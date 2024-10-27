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
  ts_code: string;
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
