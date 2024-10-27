import API from "../base";
import { SelectiveResponse } from "../type";
import { IndexBasicParams, IndexBasicResponse, IndexDailyParams, IndexDailyResponse } from "./type";

/**
 * 指数
 */
export class Index extends API {
  constructor(token: string) {
    super(token);
  }

  /**
   * index_basic
   * https://tushare.pro/document/2?doc_id=94
   */
  public async basic<K extends keyof IndexBasicResponse>(
    params?: IndexBasicParams,
    fields?: Array<keyof IndexBasicResponse>
  ): Promise<SelectiveResponse<K, IndexBasicResponse>[]> {
    return await this.get<IndexBasicParams, SelectiveResponse<K, IndexBasicResponse>>(
      "index_basic",
      params,
      fields
    );
  }

  /**
   * index_daily
   * https://tushare.pro/document/2?doc_id=95
   */
  public async daily<K extends keyof IndexDailyResponse>(
    params?: IndexDailyParams,
    fields?: Array<keyof IndexDailyResponse>
  ): Promise<SelectiveResponse<K, IndexDailyResponse>[]> {
    return await this.get<IndexDailyParams, SelectiveResponse<K, IndexDailyResponse>>(
      "index_daily",
      params,
      fields
    );
  }
}
