import { config } from "dotenv";
import TuShare from "../src";

config();

const token = process.env.TUSHARE_TOKEN ?? "";

describe("stock", () => {
  it("stock_basic", async () => {
    const tushare = new TuShare(token);
    const values = await tushare.stock.basic();
    expect(values.length).toBeGreaterThan(0);
  });
});
