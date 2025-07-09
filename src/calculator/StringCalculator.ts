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

    const {numbers, delimiter} = this.parser.parse(normalizedInput);

    this.validateNoNegatives(numbers);

    if (delimiter === '*') {
      return numbers.reduce((acc, a)=> acc * a, 1)
    }


    const validNumbers = this.filterValidNumbers(numbers);
    return this.calculateSum(validNumbers);
  }

  private isEmpty(input: string): boolean {
    return input === '';
  }

  private calculateSum(numbers: number[]): number {
    return numbers.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
  }

  private validateNoNegatives(numbers: number[]): void {
    if (numbers.some((n) => n < 0)) {
      const negatives = numbers.filter((n) => n < 0);
      throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
  }

  private filterValidNumbers(numbers: number[]): number[] {
    return numbers.filter((n) => n <= 1000);
  }
}
