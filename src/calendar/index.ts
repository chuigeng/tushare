import API from "../base";
import { SelectiveResponse } from "../type";
import { TradeCalendarParams, TradeCalendarResponse } from "./type";

export * from "./type";

export class Calendar extends API {
  /**
   * 获取交易所交易日历。
   *
   * @param params - 可选查询参数，默认使用空对象，由接口默认查询上交所。
   * @param fields - 需要返回的字段；省略时使用接口默认的全部四个字段。
   * @returns 按接口返回字段映射的日历记录，保留原始字段值。
   * @see https://tushare.pro/document/2?doc_id=26
   */
  async tradeCalendar<K extends keyof TradeCalendarResponse = keyof TradeCalendarResponse>(
    params: TradeCalendarParams = {},
    fields?: K[],
  ): Promise<SelectiveResponse<K, TradeCalendarResponse>[]> {
    return this.get<TradeCalendarParams, SelectiveResponse<K, TradeCalendarResponse>>("trade_cal", params, fields);
  }
}
