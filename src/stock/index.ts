import API from "../base";
import { SelectiveResponse } from "../type";
import {
    FinancialIndicatorParams,
    FinancialIndicatorResponse,
    IncomeParams,
    IncomeResponse,
    StockAdjFactorParams,
    StockAdjFactorResponse,
    StockBasicParams,
    StockBasicResponse,
    StockDailyBasicParams,
    StockDailyBasicResponse,
    StockDailyParams,
    StockDailyResponse,
    StockLimitParams,
    StockLimitResponse,
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
   * daily A股日线行情
   * https://tushare.pro/document/2?doc_id=27
   */
  public async daily<K extends keyof StockDailyResponse>(
    params?: StockDailyParams,
    fields?: Array<keyof StockDailyResponse>
  ): Promise<SelectiveResponse<K, StockDailyResponse>[]> {
    return await this.get<StockDailyParams, SelectiveResponse<K, StockDailyResponse>>(
      "daily",
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

  /**
   * fina_indicator
   * https://tushare.pro/document/2?doc_id=79
   */
  public async financialIndicator<K extends keyof FinancialIndicatorResponse>(
    params?: FinancialIndicatorParams,
    fields?: Array<keyof FinancialIndicatorResponse>
  ): Promise<SelectiveResponse<K, FinancialIndicatorResponse>[]> {
    return await this.get<
      FinancialIndicatorParams,
      SelectiveResponse<K, FinancialIndicatorResponse>
    >("fina_indicator", params, fields);
  }

  /**
   * income 利润表
   * https://tushare.pro/document/2?doc_id=33
   */
  public async income<K extends keyof IncomeResponse>(
    params?: IncomeParams,
    fields?: Array<keyof IncomeResponse>
  ): Promise<SelectiveResponse<K, IncomeResponse>[]> {
    return await this.get<IncomeParams, SelectiveResponse<K, IncomeResponse>>(
      "income",
      params,
      fields
    );
  }


  /**
   * adj_factor 复权因子
   * https://tushare.pro/document/2?doc_id=28
   */
  public async adjFactor<K extends keyof StockAdjFactorResponse>(
    params?: StockAdjFactorParams,
    fields?: Array<keyof StockAdjFactorResponse>
  ): Promise<SelectiveResponse<K, StockAdjFactorResponse>[]> {
    return await this.get<StockAdjFactorParams, SelectiveResponse<K, StockAdjFactorResponse>>(
      "adj_factor",
      params,
      fields
    );
  }

  /**
   * stk_limit 每日涨跌停价格
   * https://tushare.pro/document/2?doc_id=183
   */
  public async limit<K extends keyof StockLimitResponse>(
    params?: StockLimitParams,
    fields?: Array<keyof StockLimitResponse>
  ): Promise<SelectiveResponse<K, StockLimitResponse>[]> {
    return await this.get<StockLimitParams, SelectiveResponse<K, StockLimitResponse>>(
      "stk_limit",
      params,
      fields
    );
  }
}
