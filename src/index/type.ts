// index_basic
export interface IndexBasicParams {
  ts_code?: string;
  name?: string;
  market?: string;
  publisher?: string;
  category?: string;
}

export interface IndexBasicResponse {
  ts_code: string;
  name: string;
  fullname: string;
  market: string;
  publisher: string;
  index_type: string;
  category: string;
  base_date: string;
  base_point: number;
  list_date: string;
  weight_rule: string;
  desc: string;
  exp_date: string;
}

// index_daily
export interface IndexDailyParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexDailyResponse {
  ts_code: string;
  trade_date: string;
  close: number;
  open: number;
  high: number;
  low: number;
  pre_close: number;
  change: number;
  pct_chg: number;
  vol: number;
  amount: number;
}

// index_weekly
export interface IndexWeeklyParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexWeeklyResponse {
  ts_code: string;
  trade_date: string;
  close: number;
  open: number;
  high: number;
  low: number;
  pre_close: number;
  change: number;
  pct_chg: number;
  vol: number;
  amount: number;
}

// index_monthly
export interface IndexMonthlyParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexMonthlyResponse {
  ts_code: string;
  trade_date: string;
  close: number;
  open: number;
  high: number;
  low: number;
  pre_close: number;
  change: number;
  pct_chg: number;
  vol: number;
  amount: number;
}

// index_weight
export interface IndexWeightParams {
  index_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexWeightResponse {
  index_code: string;
  con_code: string;
  trade_date: string;
  weight: number;
}

// index_dailybasic
export interface IndexDailyBasicParams {
  trade_date?: string;
  ts_code?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexDailyBasicResponse {
  ts_code: string;
  trade_date: string;
  total_mv: number;
  float_mv: number;
  total_share: number;
  float_share: number;
  free_share: number;
  turnover_rate: number;
  turnover_rate_f: number;
  pe: number;
  pe_ttm: number;
  pb: number;
}

// index_classify
export interface IndexClassifyBasicParams {
  index_code?: string;
  level?: "L1" | "L2" | "L3";
  parent_code?: string;
  src?: "SW2014" | "SW2021";
}

export interface IndexClassifyBasicResponse {
  index_code: string;
  industry_name: string;
  parent_code: string;
  level: string;
  industry_code: string;
  is_pub: string;
  src: string;
}

// index_member_all
export interface IndexMemberAllParams {
  l1_code?: string;
  l2_code?: string;
  l3_code?: string;
  ts_code?: string;
  is_new?: "Y" | "N";
}

export interface IndexMemberAllResponse {
  l1_code: string;
  l1_name: string;
  l2_code: string;
  l2_name: string;
  l3_code: string;
  l3_name: string;
  ts_code: string;
  name: string;
  in_date: string;
  out_date: string;
  is_new: "Y" | "N";
}

// daily_info
export interface IndexDailyInfoParams {
  trade_date?: string;
  ts_code?: string;
  exchange?: "SH" | "SZ";
  start_date?: string;
  end_date?: string;
  fields?: string;
}

export interface IndexDailyInfoResponse {
  trade_date: string;
  ts_code: string;
  ts_name: string;
  com_count: number;
  total_share: number;
  float_share: number;
  total_mv: number;
  float_mv: number;
  amount: number;
  vol: number;
  trans_count: number;
  pe: number;
  tr: number;
  exchange: "SH" | "SZ";
}

// sz_daily_info
export interface IndexSZDailyInfoParams {
  trade_date?: string;
  ts_code?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexSZDailyInfoResponse {
  trade_date: string;
  ts_code: string;
  count: number;
  amount: number;
  vol: number | null;
  total_share: number;
  total_mv: number;
  float_share: number;
  float_mv: number;
}

// ths_index
export interface IndexTHSIndexParams {
  ts_code?: string;
  exchange?: "A" | "HK" | "US";
  type?: "N" | "I" | "R" | "S" | "ST" | "TH" | "BB";
}

export interface IndexTHSIndexResponse {
  ts_code: string;
  name: string;
  count: number;
  exchange: "A" | "HK" | "US";
  list_date: string;
  type: "N" | "S";
}

// ths_daily
export interface IndexTHSDailyParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexTHSDailyResponse {
  ts_code: string;
  trade_date: string;
  close: number;
  open: number;
  high: number;
  low: number;
  pre_close: number;
  avg_price: number;
  change: number;
  pct_change: number;
  vol: number;
  turnover_rate: number;
  total_mv: number;
  float_mv: number;
}

// ths_member
export interface IndexTHSMemberParams {
  ts_code?: string;
  code?: string;
}

export interface IndexTHSMemberResponse {
  ts_code: string;
  code: string;
  name: string;
  weight?: number;
  in_date?: string;
  out_date?: string;
  is_new: "Y" | "N";
}

// ci_daily
export interface IndexCIDailyParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexCIDailyResponse {
  ts_code: string;
  trade_date: string;
  open: number;
  low: number;
  high: number;
  close: number;
  pre_close: number;
  change: number;
  pct_change: number;
  vol: number;
  amount: number;
}

// sw_daily
export interface IndexSWDailyParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexSWDailyResponse {
  ts_code: string;
  trade_date: string;
  name: string;
  open: number;
  low: number;
  high: number;
  close: number;
  change: number;
  pct_change: number;
  vol: number;
  amount: number;
  pe: number;
  pb: number;
  float_mv: number;
  total_mv: number;
}

// index_global
export interface IndexGlobalParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface IndexGlobalResponse {
  ts_code: string;
  trade_date: string;
  open: number;
  close: number;
  high: number;
  low: number;
  pre_close: number;
  change: number;
  pct_chg: number;
  swing: number;
  vol?: number;
  amount?: number;
}
