import { describe, expect, it } from "@jest/globals";
import { config } from "dotenv";

import TuShare from "../src";

config();

describe("fund", () => {
  const token = process.env.TUSHARE_TOKEN ?? "";
  const tushare = new TuShare(token, 200);

  it("etf_basic", async () => {
    const values = await tushare.fund.etfBasic({ list_status: "P" }, [
      "ts_code",
      "extname",
      "index_code",
      "index_name",
      "exchange",
      "mgr_name",
    ]);
    console.log(values);
    expect(values.length).toBeGreaterThan(0);
  });

  it("etf_share_size", async () => {
    const values = await tushare.fund.etfShareSize(
      {
        ts_code: "510330.SH",
        start_date: "20250101",
        end_date: "20251224",
      },
      ["trade_date", "ts_code", "total_share", "total_size", "nav", "exchange"],
    );
    console.log(values[0]);

    expect(values.length).toBeGreaterThan(0);
  });

  it("fund_daily", async () => {
    const values = await tushare.fund.daily(
      {
        ts_code: "510330.SH",
        start_date: "20250101",
        end_date: "20250618",
      },
      ["ts_code", "trade_date", "open", "high", "low", "close", "pre_close", "change", "pct_chg", "vol", "amount"],
    );

    expect(values.length).toBeGreaterThan(0);
  });
});
