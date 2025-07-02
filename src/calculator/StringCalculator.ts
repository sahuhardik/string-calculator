import { IStringParser } from './parser/IStringParser';
import { DefaultParser } from './parser/DefaultParser';

export class StringCalculator {
  private readonly parser: IStringParser;

  constructor(parser: IStringParser = new DefaultParser()) {
    this.parser = parser;
  }

  public add(input: string): number {
    const normalizedInput = input.trim();

    if (this.isEmpty(normalizedInput)) {
      return 0;
    }

    const numbers = this.parser.parse(normalizedInput);
    const negatives = numbers.filter((n) => n < 0);
    
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }

    return this.calculateSum(numbers);
  }

  private isEmpty(input: string): boolean {
    return input === '';
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
