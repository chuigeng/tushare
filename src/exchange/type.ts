export interface ExchangeDailyInfoParams {
  /** 交易日期，格式为 YYYYMMDD。 */
  trade_date?: string;
  /** Tushare 市场板块代码。 */
  ts_code?: string;
  /** 交易所代码。 */
  exchange?: "SH" | "SZ";
  /** 查询开始日期，格式为 YYYYMMDD。 */
  start_date?: string;
  /** 查询结束日期，格式为 YYYYMMDD。 */
  end_date?: string;
  /** 兼容 Tushare 原始参数的字段列表；新代码建议使用方法的 fields 参数。 */
  fields?: string;
}

export interface ExchangeDailyInfoResponse {
  /** 交易日期，格式为 YYYYMMDD。 */
  trade_date: string;
  /** Tushare 市场板块代码。 */
  ts_code: string;
  /** 市场板块名称。 */
  ts_name: string;
  /** 挂牌证券数量。 */
  com_count: number | null;
  /** 总股本，单位为亿股。 */
  total_share: number | null;
  /** 流通股本，单位为亿股。 */
  float_share: number | null;
  /** 总市值，单位为亿元。 */
  total_mv: number | null;
  /** 流通市值，单位为亿元。 */
  float_mv: number | null;
  /** 成交金额，单位为亿元。 */
  amount: number | null;
  /** 成交量，单位为亿股。 */
  vol: number | null;
  /** 成交笔数，单位为万笔。 */
  trans_count: number | null;
  /** 平均市盈率。 */
  pe: number | null;
  /** 换手率，单位为百分比。 */
  tr: number | null;
  /** 交易所代码。 */
  exchange: "SH" | "SZ";
}

export interface ExchangeMarginParams {
  /** 交易日期，格式为 YYYYMMDD。 */
  trade_date?: string;
  /** 查询开始日期，格式为 YYYYMMDD。 */
  start_date?: string;
  /** 查询结束日期，格式为 YYYYMMDD。 */
  end_date?: string;
  /** 交易所代码。 */
  exchange_id?: "SSE" | "SZSE" | "BSE";
}

export interface ExchangeMarginResponse {
  /** 交易日期，格式为 YYYYMMDD。 */
  trade_date: string;
  /** 交易所代码。 */
  exchange_id: "SSE" | "SZSE" | "BSE";
  /** 融资余额，单位为元。 */
  rzye: number | null;
  /** 融资买入额，单位为元。 */
  rzmre: number | null;
  /** 融资偿还额，单位为元。 */
  rzche: number | null;
  /** 融券余额，单位为元。 */
  rqye: number | null;
  /** 融券卖出量，单位为股、份或手。 */
  rqmcl: number | null;
  /** 融资融券余额，单位为元。 */
  rzrqye: number | null;
  /** 融券余量，单位为股、份或手。 */
  rqyl: number | null;
}

export interface ExchangeMarginDetailParams {
  /** 交易日期，格式为 YYYYMMDD。 */
  trade_date?: string;
  /** TS 证券代码。 */
  ts_code?: string;
  /** 查询开始日期，格式为 YYYYMMDD。 */
  start_date?: string;
  /** 查询结束日期，格式为 YYYYMMDD。 */
  end_date?: string;
}

export interface ExchangeMarginDetailResponse {
  /** 交易日期，格式为 YYYYMMDD。 */
  trade_date: string;
  /** TS 证券代码。 */
  ts_code: string;
  /** 证券名称；2019 年 9 月 10 日之前的记录可能为空。 */
  name: string | null;
  /** 融资余额，单位为元。 */
  rzye: number | null;
  /** 融券余额，单位为元。 */
  rqye: number | null;
  /** 融资买入额，单位为元。 */
  rzmre: number | null;
  /** 融券余量，单位为股、份或手。 */
  rqyl: number | null;
  /** 融资偿还额，单位为元。 */
  rzche: number | null;
  /** 融券偿还量，单位为股、份或手。 */
  rqchl: number | null;
  /** 融券卖出量，单位为股、份或手。 */
  rqmcl: number | null;
  /** 融资融券余额，单位为元。 */
  rzrqye: number | null;
}
