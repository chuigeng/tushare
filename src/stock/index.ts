import API from "../base";
import { SelectiveResponse } from "../type";
import {
  StockBasicParams,
  StockBasicResponse,
  StockDailyBasicParams,
  StockDailyBasicResponse,
} from "./type";

/**
 * 股票
 */
export class Stock extends API {
  /**
   * stock_basic
   * https://tushare.pro/document/2?doc_id=25
   */
  public async basic<K extends keyof StockBasicResponse>(
    params?: StockBasicParams,
    fields?: Array<keyof StockBasicResponse>
  ): Promise<SelectiveResponse<K, StockBasicResponse>[]> {
    return await this.get<StockBasicParams, SelectiveResponse<K, StockBasicResponse>>(
      "stock_basic",
      params,
      fields
    );
  }

  /**
   * stock_basic
   * https://tushare.pro/document/2?doc_id=32
   */
  public async dailyBasic<K extends keyof StockDailyBasicResponse>(
    params?: StockDailyBasicParams,
    fields?: Array<keyof StockDailyBasicResponse>
  ): Promise<SelectiveResponse<K, StockDailyBasicResponse>[]> {
    return await this.get<StockDailyBasicParams, SelectiveResponse<K, StockDailyBasicResponse>>(
      "daily_basic",
      params,
      fields
    );
  }
}
