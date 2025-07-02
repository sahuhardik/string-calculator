export class StringCalculator {
  public add(input: string): number {
    const trimmedInput = input.trim();

    if (trimmedInput === '') {
      return 0;
    }

    const numberTokens = trimmedInput.split(',');
    const numbers = numberTokens.map((token) => Number(token.trim()));
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
