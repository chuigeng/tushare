import { config } from "dotenv";
import TuShare from "../src";

config();

const token = process.env.TUSHARE_TOKEN ?? "";

describe("index", () => {
  it("index_basic", async () => {
    const tushare = new TuShare(token);
    const values = await tushare.index.basic({
      market: "SSE",
    });
    expect(values.length).toBeGreaterThan(0);
  });

  it("index_basic with params and fields", async () => {
    const tushare = new TuShare(token);
    const values = await tushare.index.basic(
      {
        market: "SSE",
      },
      ["market", "category", "base_date"]
    );
    for (let value of values) {
      expect(value.market).toBe("SSE");
      expect(Object.keys(value).length).toBe(3);
    }
  });

  it("index_daily", async () => {
    const tushare = new TuShare(token);
    const values = await tushare.index.daily({ ts_code: "000120.SH" });
    expect(values.length).toBeGreaterThan(0);
  });
});
