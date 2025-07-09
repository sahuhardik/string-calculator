import { IStringParser } from './IStringParser';

export class DefaultParser implements IStringParser {
  private readonly defaultDelimiterPattern = /[,\n]/;
  private readonly customDelimiterPattern = /^\/\/(.+)\n(.*)$/;

  public parse(input: string) {
    const customMatch = input.match(this.customDelimiterPattern);

    if (customMatch) {
      const delimiter = this.escapeRegex(customMatch[1]);
      const numbersSection = customMatch[2];

      const cleanedDelimiter = delimiter.replace('\\', '');
      return {
        delimiter: cleanedDelimiter,
        numbers: this.tokenize(numbersSection, new RegExp(`[${delimiter}\n]`))
      }
    }

    return {
      delimiter: '\n',
      numbers:  this.tokenize(input, this.defaultDelimiterPattern)
    }
  }

  private tokenize(value: string, delimiter: RegExp): number[] {
    return value.split(delimiter).map((token) => Number(token.trim()));
  }

  private escapeRegex(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
