import { DefaultParser } from './DefaultParser';

describe('DefaultParser', () => {
  const parser = new DefaultParser();

  it('should parse comma-separated values', () => {
    expect(parser.parse('1,2,3')).toEqual([1, 2, 3]);
  });

  it('should parse mixed comma and newline delimiters', () => {
    expect(parser.parse('1\n2,3')).toEqual([1, 2, 3]);
  });

  it('should parse custom delimiter specified with //', () => {
    expect(parser.parse('//;\n1;2')).toEqual([1, 2]);
    expect(parser.parse('//#\n3#4')).toEqual([3, 4]);
  });

  it('should trim whitespace from tokens', () => {
    expect(parser.parse(' 1 , 2 \n 3')).toEqual([1, 2, 3]);
  });
});
