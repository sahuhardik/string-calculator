export class StringCalculator {
  public add(input: string): number {
    const normalizedInput = input.trim();

    if (this.isEmpty(normalizedInput)) {
      return 0;
    }

    const numbers = this.parseInput(normalizedInput);
    return this.calculateSum(numbers);
  }

  private isEmpty(input: string): boolean {
    return input === '';
  }

  private parseInput(input: string): number[] {
    const tokens = input.split(/[\n,]/);
    return tokens.map((token) => Number(token.trim()));
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
