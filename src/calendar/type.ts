/** trade_cal 支持的交易所代码。 */
export type TradeCalendarExchange = "SSE" | "SZSE" | "CFFEX" | "SHFE" | "CZCE" | "DCE" | "INE";

/** 交易日历请求参数；各字段均可省略。 */
export type TradeCalendarParams = {
  /** 交易所；省略或传空字符串时使用接口默认的上交所。 */
  exchange?: TradeCalendarExchange | "";
  /** 开始日期，格式 YYYYMMDD。 */
  start_date?: string;
  /** 结束日期，格式 YYYYMMDD。 */
  end_date?: string;
  /** 是否交易：'0' 休市，'1' 交易；省略时返回全部自然日。 */
  is_open?: "0" | "1";
};

/** 交易日历默认返回的全部字段。 */
export type TradeCalendarResponse = {
  /** 交易所代码。 */
  exchange: string;
  /** 日历日期，格式 YYYYMMDD。 */
  cal_date: string;
  /** 是否交易。文档标注为字符串，兼容实际响应中的数值 0/1，保留接口原值。 */
  is_open: 0 | 1 | "0" | "1";
  /** 上一个交易日，格式 YYYYMMDD。 */
  pretrade_date: string;
};
