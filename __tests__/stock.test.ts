import { describe, expect, it } from "@jest/globals";
import { config } from "dotenv";
import TuShare from "../src";

config();

const token = process.env.TUSHARE_TOKEN ?? "";

describe("stock", () => {
  it("stock_basic", async () => {
    const tushare = new TuShare(token, 200);
    const values = await tushare.stock.basic({}, [
      "symbol",
      "name",
      "area",
      "industry",
      "fullname",
      "market",
      "exchange",
      "list_status",
      "list_date",
      "delist_date",
      "is_hs",
    ]);
    expect(values.length).toBeGreaterThan(0);
  });

  it("daily_basic", async () => {
    const tushare = new TuShare(token, 200);
    const values = await tushare.stock.dailyBasic({
      ts_code: "000001.SZ",
      start_date: "20250303",
      end_date: "20250304",
    });
    console.log(values.slice(0, 10));
    expect(values.length).toBeGreaterThan(0);
  });
});
