import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should return the number itself when input is a single number', () => {
    expect(calculator.add('5')).toBe(5);
    expect(calculator.add('42')).toBe(42);
  });

});
