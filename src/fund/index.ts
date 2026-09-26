import API from "../base";
import { SelectiveResponse } from "../type";
import {
  EtfBasicParams,
  EtfBasicResponse,
  EtfShareSizeParams,
  EtfShareSizeResponse,
  FundDailyParams,
  FundDailyResponse,
} from "./type";

/**
 * 基金与 ETF 数据。
 */
export class Fund extends API {
  /**
   * ETF 基础信息。
   * https://tushare.pro/document/2?doc_id=385
   */
  public async etfBasic<K extends keyof EtfBasicResponse>(
    params?: EtfBasicParams,
    fields?: Array<keyof EtfBasicResponse>,
  ): Promise<SelectiveResponse<K, EtfBasicResponse>[]> {
    return await this.get<EtfBasicParams, SelectiveResponse<K, EtfBasicResponse>>("etf_basic", params, fields);
  }

  /**
   * ETF 每日份额和规模。
   * https://tushare.pro/document/2?doc_id=408
   */
  public async etfShareSize<K extends keyof EtfShareSizeResponse>(
    params?: EtfShareSizeParams,
    fields?: Array<keyof EtfShareSizeResponse>,
  ): Promise<SelectiveResponse<K, EtfShareSizeResponse>[]> {
    return await this.get<EtfShareSizeParams, SelectiveResponse<K, EtfShareSizeResponse>>(
      "etf_share_size",
      params,
      fields,
    );
  }

  /**
   * 场内基金日线行情。
   * https://tushare.pro/document/2?doc_id=127
   */
  public async daily<K extends keyof FundDailyResponse>(
    params?: FundDailyParams,
    fields?: Array<keyof FundDailyResponse>,
  ): Promise<SelectiveResponse<K, FundDailyResponse>[]> {
    return await this.get<FundDailyParams, SelectiveResponse<K, FundDailyResponse>>("fund_daily", params, fields);
  }
}

export * from "./type";
