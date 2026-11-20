import { describe, expect, it } from "@jest/globals";
import { config } from "dotenv";

import TuShare from "../src";

config();

const token = process.env.TUSHARE_TOKEN ?? "";

describe("exchange", () => {
  it("daily_info", async () => {
    const tushare = new TuShare(token, 200);
    const values = await tushare.exchange.dailyInfo({ trade_date: "20261113", exchange: "SH" });

    expect(values.length).toBeGreaterThan(0);
  });

  it("margin", async () => {
    const tushare = new TuShare(token, 200);
    const values = await tushare.exchange.margin({ trade_date: "20240930" });

    expect(values.length).toBeGreaterThan(0);
  });

  it("margin_detail", async () => {
    const tushare = new TuShare(token, 200);
    const values = await tushare.exchange.marginDetail({ trade_date: "20261109", ts_code: "920145.BJ" });

    expect(values.length).toBeGreaterThan(0);
  });
});
