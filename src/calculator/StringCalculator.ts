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
    let delimiterRegex = /[,\n]/;
    let numbersSection = input;

    const customDelimiterMatch = input.match(/^\/\/(.+)\n(.*)/);
    if (customDelimiterMatch) {
      const rawDelimiter = customDelimiterMatch[1];
      numbersSection = customDelimiterMatch[2];

      const escapedDelimiter = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      delimiterRegex = new RegExp(`[${escapedDelimiter}\n]`);
    }

    return numbersSection
      .split(delimiterRegex)
      .map((token) => Number(token.trim()));
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
