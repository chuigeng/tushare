import { describe, expect, it } from "@jest/globals";
import { config } from "dotenv";

import TuShare from "../src";

config();

describe("calendar", () => {
  const token = process.env.TUSHARE_TOKEN ?? "";
  const tushare = new TuShare(token, 200);

  it("trade_calendar", async () => {
    const values = await tushare.calendar.tradeCalendar({
      exchange: "SSE",
    });
    console.log(values);
    expect(values.length).toBeGreaterThan(0);
  });
});
