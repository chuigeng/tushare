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
      ts_code: "002126.SZ",
      start_date: "20250101",
      end_date: "20250901",
    });
    console.log(values);
    expect(values.length).toBeGreaterThan(0);
  });

  it("financial_indicator", async () => {
    const tushare = new TuShare(token, 200);
    const values = await tushare.stock.financialIndicator(
      {
        ts_code: "002126.SZ",
        start_date: "20250101",
        end_date: "20250901",
        update_flag: "1",
      },
      ["ts_code", "ann_date", "end_date", "eps", "dt_eps", "profit_dedt", "update_flag"]
    );
    console.log(values);
    expect(values.length).toBeGreaterThan(0);
  });

  it("income", async () => {
    const tushare = new TuShare(token, 200);
    const values = await tushare.stock.income(
      {
        ts_code: "002126.SZ",
        start_date: "20240101",
        end_date: "20250901",
        // report_type: "3",
      },
      [
        "ts_code",
        "ann_date",
        "f_ann_date",
        "end_date",
        "report_type",
        "end_type",
        "total_revenue",
        "revenue",
        "n_income",
        "n_income_attr_p",
        "net_after_nr_lp_correct",
        "continued_net_profit",
        "end_net_profit",
        "update_flag",
      ]
    );
    console.log(values);
    expect(values.length).toBeGreaterThan(0);
  });
});
