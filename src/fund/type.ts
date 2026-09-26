export interface EtfBasicParams {
  ts_code?: string;
  index_code?: string;
  list_date?: string;
  list_status?: "L" | "D" | "P";
  exchange?: "SH" | "SZ";
  mgr?: string;
}

export interface EtfBasicResponse {
  ts_code: string;
  csname: string | null;
  extname: string | null;
  cname: string | null;
  index_code: string | null;
  index_name: string | null;
  setup_date: string | null;
  list_date: string | null;
  list_status: "L" | "D" | "P";
  exchange: "SH" | "SZ";
  mgr_name: string | null;
  custod_name: string | null;
  mgt_fee: number | null;
  etf_type: string | null;
}

export interface EtfShareSizeParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
  exchange?: "SSE" | "SZSE" | "BSE";
}

export interface EtfShareSizeResponse {
  trade_date: string;
  ts_code: string;
  etf_name: string;
  total_share: number | null;
  total_size: number | null;
  nav: number | null;
  close: number | null;
  exchange: "SSE" | "SZSE" | "BSE";
}

export interface FundDailyParams {
  ts_code?: string;
  trade_date?: string;
  start_date?: string;
  end_date?: string;
}

export interface FundDailyResponse {
  ts_code: string;
  trade_date: string;
  open: number | null;
  high: number | null;
  low: number | null;
  close: number | null;
  pre_close: number | null;
  change: number | null;
  pct_chg: number | null;
  vol: number | null;
  amount: number | null;
}
