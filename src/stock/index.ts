import API from "../base";
import { SelectiveResponse } from "../type";
import { StockBasicParams, StockBasicResponse } from "./type";

/**
 * 股票
 */
export class Stock extends API {
  constructor(token: string) {
    super(token);
  }

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
}
