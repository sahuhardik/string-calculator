export interface IStringParser {
  parse(_input: string):{ numbers: number[], delimiter: string };
}
