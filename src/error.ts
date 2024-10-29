export class TushareError extends Error {
  constructor(code: number, message: string) {
    super(`Tushare request failed with code ${code}: ${message}`);
    this.name = "TushareError";
  }
}
