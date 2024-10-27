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
