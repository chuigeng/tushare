import { Index } from "./index/index";
import { Stock } from "./stock";

export default class TuShare {
  // 指数
  public index;
  // 股票
  public stock;

  constructor(token: string) {
    this.index = new Index(token);
    this.stock = new Stock(token);
  }
}
