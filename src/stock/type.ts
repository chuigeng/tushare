// stock_basic
export interface StockBasicParams {
  ts_code?: string;
  name?: string;
  market?: string;
  list_status?: "L" | "D" | "P";
  exchange?: "SSE" | "SZSE" | "BSE";
  is_hs?: "N" | "H" | "S";
}

export interface StockBasicResponse {
  ts_code: string;
  symbol: string;
  name: string;
  area: string;
  industry: string;
  fullname: string;
  enname: string;
  cnspell: string;
  market: string;
  exchange: string;
  curr_type: string;
  list_status: "L" | "D" | "P";
  list_date: string;
  delist_date: string;
  is_hs: "N" | "H" | "S";
  act_name: string;
  act_ent_type: string;
}

// daily_basic
export interface StockDailyBasicParams {
  /** 股票代码（二选一） */
  ts_code: string;
  /** 交易日期（二选一） */
  trade_date?: string;
  /** 开始日期(YYYYMMDD) */
  start_date?: string;
  /** 结束日期(YYYYMMDD) */
  end_date?: string;
}

export interface StockDailyBasicResponse {
  /** TS股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 当日收盘价 */
  close: number;
  /** 换手率（%） */
  turnover_rate?: number;
  /** 换手率（自由流通股） */
  turnover_rate_f?: number;
  /** 量比 */
  volume_ratio?: number;
  /** 市盈率（总市值/净利润， 亏损的PE为空） */
  pe?: number;
  /** 市盈率（TTM，亏损的PE为空） */
  pe_ttm?: number;
  /** 市净率（总市值/净资产） */
  pb?: number;
  /** 市销率 */
  ps?: number;
  /** 市销率（TTM） */
  ps_ttm?: number;
  /** 股息率 （%） */
  dv_ratio?: number;
  /** 股息率（TTM）（%） */
  dv_ttm?: number;
  /** 总股本 （万股） */
  total_share?: number;
  /** 流通股本 （万股） */
  float_share?: number;
  /** 自由流通股本 （万） */
  free_share?: number;
  /** 总市值 （万元） */
  total_mv?: number;
  /** 流通市值（万元） */
  circ_mv?: number;
}
