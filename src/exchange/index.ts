import API from "../base";
import { SelectiveResponse } from "../type";
import {
  ExchangeDailyInfoParams,
  ExchangeDailyInfoResponse,
  ExchangeMarginDetailParams,
  ExchangeMarginDetailResponse,
  ExchangeMarginParams,
  ExchangeMarginResponse,
} from "./type";

/** 交易所统计数据。 */
export class Exchange extends API {
  /**
   * 获取交易所各市场板块的每日交易统计。
   *
   * @param params 交易日期、日期范围、市场板块或交易所筛选条件。
   * @param fields 需要返回的字段；省略时返回接口默认字段。
   * @returns 按交易日和市场板块列出的交易统计。
   * @see https://tushare.pro/document/2?doc_id=215
   */
  public async dailyInfo<K extends keyof ExchangeDailyInfoResponse = keyof ExchangeDailyInfoResponse>(
    params: ExchangeDailyInfoParams = {},
    fields?: K[],
  ): Promise<SelectiveResponse<K, ExchangeDailyInfoResponse>[]> {
    return this.get<ExchangeDailyInfoParams, SelectiveResponse<K, ExchangeDailyInfoResponse>>(
      "daily_info",
      params,
      fields,
    );
  }

  /**
   * 获取交易所每日融资融券汇总数据。
   *
   * @param params 交易日期、日期范围或交易所筛选条件。
   * @param fields 需要返回的字段；省略时返回接口默认字段。
   * @returns 融资融券汇总记录，金额单位为元，数量单位由证券类型决定。
   * @see https://tushare.pro/document/2?doc_id=58
   */
  public async margin<K extends keyof ExchangeMarginResponse = keyof ExchangeMarginResponse>(
    params: ExchangeMarginParams = {},
    fields?: K[],
  ): Promise<SelectiveResponse<K, ExchangeMarginResponse>[]> {
    return this.get<ExchangeMarginParams, SelectiveResponse<K, ExchangeMarginResponse>>("margin", params, fields);
  }

  /**
   * 获取证券每日融资融券交易明细。
   *
   * @param params 证券代码、交易日期或日期范围筛选条件。
   * @param fields 需要返回的字段；省略时返回接口默认字段。
   * @returns 按证券列出的融资融券明细，金额单位为元，数量单位由证券类型决定。
   * @see https://tushare.pro/document/2?doc_id=59
   */
  public async marginDetail<K extends keyof ExchangeMarginDetailResponse = keyof ExchangeMarginDetailResponse>(
    params: ExchangeMarginDetailParams = {},
    fields?: K[],
  ): Promise<SelectiveResponse<K, ExchangeMarginDetailResponse>[]> {
    return this.get<ExchangeMarginDetailParams, SelectiveResponse<K, ExchangeMarginDetailResponse>>(
      "margin_detail",
      params,
      fields,
    );
  }
}

export * from "./type";
