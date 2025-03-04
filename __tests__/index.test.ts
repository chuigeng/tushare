import { describe, expect, it } from "@jest/globals";
import { config } from "dotenv";
import TuShare from "../src";

config();

const token = process.env.TUSHARE_TOKEN ?? "";
const tushare = new TuShare(token, 200);

describe("index", () => {
  it("index_basic", async () => {
    const values = await tushare.index.basic({
      market: "SSE",
    });
    expect(values.length).toBeGreaterThan(0);
  });

  it("index_basic with params and fields", async () => {
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
    const values = await tushare.index.daily({
      ts_code: "399396.SZ",
      start_date: "20250101",
      end_date: "20250205",
    });
    expect(values.length).toBeGreaterThan(0);
  });

  it("index_weekly", async () => {
    const values = await tushare.index.weekly({ ts_code: "000120.SH" });
    expect(values.length).toBeGreaterThan(0);
  });

  it("index_monthly", async () => {
    const values = await tushare.index.monthly({ ts_code: "000120.SH" });
    expect(values.length).toBeGreaterThan(0);
  });

  it("index_weight", async () => {
    console.log("params: index_code: 000852.SH, start_date: 20150201, end_date: 20150228");
    const values = await tushare.index.weight({
      index_code: "000852.SH",
      start_date: "20150201",
      end_date: "20150228",
    });
    console.log("number of constituents: " + values.length);

    expect(values.length).toBeGreaterThan(0);
  });

  it("index_dailybasic", async () => {
    const values = await tushare.index.dailyBasic({ trade_date: "20241028" });
    expect(values.length).toBeGreaterThan(0);
  });

  it("index_classify", async () => {
    const values = await tushare.index.classify();
    expect(values.length).toBeGreaterThan(0);
  });

  it("index_member_all", async () => {
    const values = await tushare.index.memberAll();
    expect(values.length).toBeGreaterThan(0);
  });

  it("daily_info", async () => {
    const values = await tushare.index.dailyInfo();
    expect(values.length).toBeGreaterThan(0);
  });

  it("sz_daily_info", async () => {
    const values = await tushare.index.szDailyInfo();
    expect(values.length).toBeGreaterThan(0);
  });

  it("ths_index", async () => {
    const values = await tushare.index.thsIndex();
    expect(values.length).toBeGreaterThan(0);
  });

  it("ths_daily", async () => {
    const values = await tushare.index.thsDaily();
    expect(values.length).toBeGreaterThan(0);
  });

  it("ths_member", async () => {
    const values = await tushare.index.thsMember();
    expect(values.length).toBeGreaterThan(0);
  });

  it("ci_daily", async () => {
    const values = await tushare.index.ciDaily();
    expect(values.length).toBeGreaterThan(0);
  });

  it("sw_daily", async () => {
    const values = await tushare.index.swDaily();
    expect(values.length).toBeGreaterThan(0);
  });

  it("index_global", async () => {
    const values = await tushare.index.global();
    expect(values.length).toBeGreaterThan(0);
  });
});
