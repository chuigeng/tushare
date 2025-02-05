import API from "../base";
import { SelectiveResponse } from "../type";
import {
  IndexBasicParams,
  IndexBasicResponse,
  IndexCIDailyParams,
  IndexCIDailyResponse,
  IndexClassifyBasicParams,
  IndexClassifyBasicResponse,
  IndexDailyBasicParams,
  IndexDailyBasicResponse,
  IndexDailyInfoParams,
  IndexDailyInfoResponse,
  IndexDailyParams,
  IndexDailyResponse,
  IndexGlobalParams,
  IndexGlobalResponse,
  IndexMemberAllParams,
  IndexMemberAllResponse,
  IndexMonthlyParams,
  IndexMonthlyResponse,
  IndexSWDailyParams,
  IndexSWDailyResponse,
  IndexSZDailyInfoParams,
  IndexSZDailyInfoResponse,
  IndexTHSDailyParams,
  IndexTHSDailyResponse,
  IndexTHSIndexParams,
  IndexTHSIndexResponse,
  IndexTHSMemberParams,
  IndexTHSMemberResponse,
  IndexWeeklyParams,
  IndexWeeklyResponse,
  IndexWeightParams,
  IndexWeightResponse,
} from "./type";

/**
 * 指数
 */
export class Index extends API {
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

  /**
   * index_weekly
   * https://tushare.pro/document/2?doc_id=171
   */
  public async weekly<K extends keyof IndexWeeklyResponse>(
    params?: IndexWeeklyParams,
    fields?: Array<keyof IndexWeeklyResponse>
  ): Promise<SelectiveResponse<K, IndexWeeklyResponse>[]> {
    return await this.get<IndexWeeklyParams, SelectiveResponse<K, IndexWeeklyResponse>>(
      "index_weekly",
      params,
      fields
    );
  }

  /**
   * index_monthly
   * https://tushare.pro/document/2?doc_id=172
   */
  public async monthly<K extends keyof IndexMonthlyResponse>(
    params?: IndexMonthlyParams,
    fields?: Array<keyof IndexMonthlyResponse>
  ): Promise<SelectiveResponse<K, IndexMonthlyResponse>[]> {
    return await this.get<IndexMonthlyParams, SelectiveResponse<K, IndexMonthlyResponse>>(
      "index_monthly",
      params,
      fields
    );
  }

  /**
   * index_weight
   * https://tushare.pro/document/2?doc_id=96
   */
  public async weight<K extends keyof IndexWeightResponse>(
    params?: IndexWeightParams,
    fields?: Array<keyof IndexWeightResponse>
  ): Promise<SelectiveResponse<K, IndexWeightResponse>[]> {
    return await this.get<IndexWeightParams, SelectiveResponse<K, IndexWeightResponse>>(
      "index_weight",
      params,
      fields
    );
  }

  /**
   * index_dailybasic
   * https://tushare.pro/document/2?doc_id=128
   */
  public async dailyBasic<K extends keyof IndexDailyBasicResponse>(
    params?: IndexDailyBasicParams,
    fields?: Array<keyof IndexDailyBasicResponse>
  ): Promise<SelectiveResponse<K, IndexDailyBasicResponse>[]> {
    return await this.get<IndexDailyBasicParams, SelectiveResponse<K, IndexDailyBasicResponse>>(
      "index_dailybasic",
      params,
      fields
    );
  }

  /**
   * index_classify
   * https://tushare.pro/document/2?doc_id=181
   */
  public async classify<K extends keyof IndexClassifyBasicResponse>(
    params?: IndexClassifyBasicParams,
    fields?: Array<keyof IndexClassifyBasicResponse>
  ): Promise<SelectiveResponse<K, IndexClassifyBasicResponse>[]> {
    return await this.get<
      IndexClassifyBasicParams,
      SelectiveResponse<K, IndexClassifyBasicResponse>
    >("index_classify", params, fields);
  }

  /**
   * index_member_all
   * https://tushare.pro/document/2?doc_id=335
   */
  public async memberAll<K extends keyof IndexMemberAllResponse>(
    params?: IndexMemberAllParams,
    fields?: Array<keyof IndexMemberAllResponse>
  ): Promise<SelectiveResponse<K, IndexMemberAllResponse>[]> {
    return await this.get<IndexMemberAllParams, SelectiveResponse<K, IndexMemberAllResponse>>(
      "index_member_all",
      params,
      fields
    );
  }

  /**
   * daily_info
   * https://tushare.pro/document/2?doc_id=215
   */
  public async dailyInfo<K extends keyof IndexDailyInfoResponse>(
    params?: IndexDailyInfoParams,
    fields?: Array<keyof IndexDailyInfoResponse>
  ): Promise<SelectiveResponse<K, IndexDailyInfoResponse>[]> {
    return await this.get<IndexDailyInfoParams, SelectiveResponse<K, IndexDailyInfoResponse>>(
      "daily_info",
      params,
      fields
    );
  }

  /**
   * sz_daily_info
   * https://tushare.pro/document/2?doc_id=268
   */
  public async szDailyInfo<K extends keyof IndexSZDailyInfoResponse>(
    params?: IndexSZDailyInfoParams,
    fields?: Array<keyof IndexSZDailyInfoResponse>
  ): Promise<SelectiveResponse<K, IndexSZDailyInfoResponse>[]> {
    return await this.get<IndexSZDailyInfoParams, SelectiveResponse<K, IndexSZDailyInfoResponse>>(
      "sz_daily_info",
      params,
      fields
    );
  }

  /**
   * ths_index
   * https://tushare.pro/document/2?doc_id=259
   */
  public async thsIndex<K extends keyof IndexTHSIndexResponse>(
    params?: IndexTHSIndexParams,
    fields?: Array<keyof IndexTHSIndexResponse>
  ): Promise<SelectiveResponse<K, IndexTHSIndexResponse>[]> {
    return await this.get<IndexTHSIndexParams, SelectiveResponse<K, IndexTHSIndexResponse>>(
      "ths_index",
      params,
      fields
    );
  }

  /**
   * ths_daily
   * https://tushare.pro/document/2?doc_id=260
   */
  public async thsDaily<K extends keyof IndexTHSDailyResponse>(
    params?: IndexTHSDailyParams,
    fields?: Array<keyof IndexTHSDailyResponse>
  ): Promise<SelectiveResponse<K, IndexTHSDailyResponse>[]> {
    return await this.get<IndexTHSDailyParams, SelectiveResponse<K, IndexTHSDailyResponse>>(
      "ths_daily",
      params,
      fields
    );
  }

  /**
   * ths_member
   * https://tushare.pro/document/2?doc_id=261
   */
  public async thsMember<K extends keyof IndexTHSMemberResponse>(
    params?: IndexTHSMemberParams,
    fields?: Array<keyof IndexTHSMemberResponse>
  ): Promise<SelectiveResponse<K, IndexTHSMemberResponse>[]> {
    return await this.get<IndexTHSMemberParams, SelectiveResponse<K, IndexTHSMemberResponse>>(
      "ths_member",
      params,
      fields
    );
  }

  /**
   * ci_daily
   * https://tushare.pro/document/2?doc_id=308
   */
  public async ciDaily<K extends keyof IndexCIDailyResponse>(
    params?: IndexCIDailyParams,
    fields?: Array<keyof IndexCIDailyResponse>
  ): Promise<SelectiveResponse<K, IndexCIDailyResponse>[]> {
    return await this.get<IndexCIDailyParams, SelectiveResponse<K, IndexCIDailyResponse>>(
      "ci_daily",
      params,
      fields
    );
  }

  /**
   * sw_daily
   * https://tushare.pro/document/2?doc_id=327
   */
  public async swDaily<K extends keyof IndexSWDailyResponse>(
    params?: IndexSWDailyParams,
    fields?: Array<keyof IndexSWDailyResponse>
  ): Promise<SelectiveResponse<K, IndexSWDailyResponse>[]> {
    return await this.get<IndexSWDailyParams, SelectiveResponse<K, IndexSWDailyResponse>>(
      "sw_daily",
      params,
      fields
    );
  }

  /**
   * index_global
   * https://tushare.pro/document/2?doc_id=211
   */
  public async global<K extends keyof IndexGlobalResponse>(
    params?: IndexGlobalParams,
    fields?: Array<keyof IndexGlobalResponse>
  ): Promise<SelectiveResponse<K, IndexGlobalResponse>[]> {
    return await this.get<IndexGlobalParams, SelectiveResponse<K, IndexGlobalResponse>>(
      "index_global",
      params,
      fields
    );
  }
}
