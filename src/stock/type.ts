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
  /** 股票代码（ts_code和trade_date必须二选一） */
  ts_code?: string;
  /** 交易日期（ts_code和trade_date必须二选一） */
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

// fina_indicator
export interface FinancialIndicatorParams {
  /** TS股票代码，如 600000.SH */
  ts_code?: string;
  /** 公告日期，YYYYMMDD */
  ann_date?: string;
  /** 报告期，YYYYMMDD（例如 20240630） */
  period?: string;
  /** 开始日期(YYYYMMDD) */
  start_date?: string;
  /** 结束日期(YYYYMMDD) */
  end_date?: string;
}

export interface FinancialIndicatorResponse {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 每股收益 */
  eps?: number;
  /** 稀释每股收益 */
  dt_eps?: number;
  /** 每股营业总收入 */
  total_revenue_ps?: number;
  /** 每股营业收入 */
  revenue_ps?: number;
  /** 每股资本公积金 */
  capital_rese_ps?: number;
  /** 每股盈余公积金 */
  surplus_rese_ps?: number;
  /** 每股未分配利润 */
  undist_profit_ps?: number;
  /** 每股经营活动产生的现金流量净额 */
  ocfps?: number;
  /** 每股自由现金流量 */
  fcfps?: number;
  /** 净资产收益率(摊薄) */
  roe?: number;
  /** 净资产收益率(加权) */
  roe_waa?: number;
  /** 净资产收益率(扣非/摊薄) */
  roe_dt?: number;
  /** 总资产净利率 */
  roa?: number;
  /** 扣非净利率 */
  netprofit_margin?: number;
  /** 毛利率 */
  gross_margin?: number;
  /** 资产负债率 */
  debt_to_assets?: number;
  /** 权益乘数 */
  assets_to_eqt?: number;
  /** 流动比率 */
  current_ratio?: number;
  /** 速动比率 */
  quick_ratio?: number;
  /** 经营活动现金流净额同比(%) */
  ocf_yoy?: number;
  /** 净利润同比(%) */
  netprofit_yoy?: number;
  /** 扣非净利润同比(%) */
  dt_netprofit_yoy?: number;
  /** 营业总收入同比(%) */
  tr_yoy?: number;
  /** 营业收入同比(%) */
  or_yoy?: number;
  /** 每股经营现金流量净额同比(%) */
  cfps_yoy?: number;
  /** 净资产收益率(摊薄)同比(%) */
  roe_yoy?: number;
  /** 每股净资产相对年初增长率(%) */
  bps_yoy?: number;
  /** 资产总计相对年初增长率(%) */
  assets_yoy?: number;
  /** 归属母公司股东权益相对年初增长率(%) */
  eqt_yoy?: number;
  /** 单季度：营业总收入同比(%) */
  q_gr_yoy?: number;
  /** 单季度：营业总收入环比(%) */
  q_gr_qoq?: number;
  /** 单季度：营业收入同比(%) */
  q_sales_yoy?: number;
  /** 单季度：营业收入环比(%) */
  q_sales_qoq?: number;
  /** 单季度：营业利润同比(%) */
  q_op_yoy?: number;
  /** 单季度：营业利润环比(%) */
  q_op_qoq?: number;
  /** 单季度：净利润同比(%) */
  q_profit_yoy?: number;
  /** 单季度：净利润环比(%) */
  q_profit_qoq?: number;
  /** 单季度：归母净利润同比(%) */
  q_netprofit_yoy?: number;
  /** 单季度：归母净利润环比(%) */
  q_netprofit_qoq?: number;
  /** 净资产同比增长率(%) */
  equity_yoy?: number;
  /** 研发费用 */
  rd_exp?: number;
  /** 更新标识 */
  update_flag?: string;
}
