export class StringCalculator {
  public add(input: string): number {
    if (input.trim() === '') {
      return 0;
    }

    return Number(input.trim());
  }
}
