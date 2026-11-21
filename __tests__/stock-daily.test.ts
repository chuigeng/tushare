import { expect, it, jest } from "@jest/globals";
import axios from "axios";
import TuShare from "../src";

it("requests and returns the selected daily after-hours fields", async () => {
  const fields = ["ts_code", "trade_date", "ah_vol", "ah_amount"] as const;
  const post = jest.spyOn(axios, "post").mockResolvedValue({
    status: 200,
    data: {
      code: 0,
      data: {
        fields,
        items: [["300750.SZ", "20260707", 125, 2500]],
      },
    },
  });

  try {
    const tushare = new TuShare("test-token", 200);
    const params = { trade_date: "20260707" };
    const rows = await tushare.stock.daily(params, [...fields]);

    expect(post).toHaveBeenCalledWith(
      expect.any(String),
      { api_name: "daily", token: "test-token", params, fields: fields.join(",") },
      expect.any(Object),
    );
    expect(rows).toEqual([{ ts_code: "300750.SZ", trade_date: "20260707", ah_vol: 125, ah_amount: 2500 }]);
  } finally {
    post.mockRestore();
  }
});
