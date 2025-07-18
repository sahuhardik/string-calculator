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

  it('should return the sum of two comma-separated numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
    expect(calculator.add('10,5')).toBe(15);
  });

  it('should return the sum of multiple comma-separated numbers', () => {
    expect(calculator.add('1,2,3')).toBe(6);
    expect(calculator.add('4,5,6,7')).toBe(22);
  });

  it('should support newline characters as valid delimiters along with commas', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('4,5\n6')).toBe(15);
  });

  it('should support custom single-character delimiter in format //;\n1;2', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
    expect(calculator.add('//#\n3#4')).toBe(7);
  });

  it('should support * as an delimiter //*\n3*2', () => {
    expect(calculator.add('//*\n3*2')).toBe(6);
  });

  it('should throw an exception if any number is negative', () => {
    expect(() => calculator.add('1,-2')).toThrow('negatives not allowed: -2');
    expect(() => calculator.add('2,-4,3,-1')).toThrow('negatives not allowed: -4, -1');
  });

  it('should ignore numbers greater than 1000', () => {
    expect(calculator.add('2,1001')).toBe(2);
    expect(calculator.add('1000,1')).toBe(1001);
    expect(calculator.add('500,1001,600')).toBe(1100);
  });
});
