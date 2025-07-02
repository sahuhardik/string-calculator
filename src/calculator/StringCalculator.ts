export class StringCalculator {
  public add(input: string): number {
    const normalizedInput = input.trim();

    if (this.isEmpty(normalizedInput)) {
      return 0;
    }

    const numbers = this.parseCommaSeparatedValues(normalizedInput);
    return this.calculateSum(numbers);
  }

  private isEmpty(input: string): boolean {
    return input === '';
  }

  private parseCommaSeparatedValues(input: string): number[] {
    return input.split(',').map((token) => Number(token.trim()));
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
