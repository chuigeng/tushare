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
  /** 报告期，每个季度的最后一天，YYYYMMDD（例如 20240630） */
  period?: string;
  /** 开始日期(YYYYMMDD) */
  start_date?: string;
  /** 结束日期(YYYYMMDD) */
  end_date?: string;
  /** 更新标识 */
  update_flag?: string;
}

export interface FinancialIndicatorResponse {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 基本每股收益 */
  eps?: number;
  /** 稀释每股收益 */
  dt_eps?: number;
  /** 每股营业总收入 */
  total_revenue_ps?: number;
  /** 每股营业收入 */
  revenue_ps?: number;
  /** 每股资本公积 */
  capital_rese_ps?: number;
  /** 每股盈余公积 */
  surplus_rese_ps?: number;
  /** 每股未分配利润 */
  undist_profit_ps?: number;
  /** 非经常性损益 */
  extra_item?: number;
  /** 扣除非经常性损益后的净利润（扣非净利润） */
  profit_dedt?: number;
  /** 毛利 */
  gross_margin?: number;
  /** 流动比率 */
  current_ratio?: number;
  /** 速动比率 */
  quick_ratio?: number;
  /** 保守速动比率 */
  cash_ratio?: number;
  /** 存货周转天数 */
  invturn_days?: number;
  /** 应收账款周转天数 */
  arturn_days?: number;
  /** 存货周转率 */
  inv_turn?: number;
  /** 应收账款周转率 */
  ar_turn?: number;
  /** 流动资产周转率 */
  ca_turn?: number;
  /** 固定资产周转率 */
  fa_turn?: number;
  /** 总资产周转率 */
  assets_turn?: number;
  /** 经营活动净收益 */
  op_income?: number;
  /** 价值变动净收益 */
  valuechange_income?: number;
  /** 利息费用 */
  interst_income?: number;
  /** 折旧与摊销 */
  daa?: number;
  /** 息税前利润 */
  ebit?: number;
  /** 息税折旧摊销前利润 */
  ebitda?: number;
  /** 企业自由现金流量 */
  fcff?: number;
  /** 股权自由现金流量 */
  fcfe?: number;
  /** 无息流动负债 */
  current_exint?: number;
  /** 无息非流动负债 */
  noncurrent_exint?: number;
  /** 带息债务 */
  interestdebt?: number;
  /** 净债务 */
  netdebt?: number;
  /** 有形资产 */
  tangible_asset?: number;
  /** 营运资金 */
  working_capital?: number;
  /** 营运流动资本 */
  networking_capital?: number;
  /** 全部投入资本 */
  invest_capital?: number;
  /** 留存收益 */
  retained_earnings?: number;
  /** 期末摊薄每股收益 */
  diluted2_eps?: number;
  /** 每股净资产 */
  bps?: number;
  /** 每股经营活动产生的现金流量净额 */
  ocfps?: number;
  /** 每股留存收益 */
  retainedps?: number;
  /** 每股现金流量净额 */
  cfps?: number;
  /** 每股息税前利润 */
  ebit_ps?: number;
  /** 每股企业自由现金流量 */
  fcff_ps?: number;
  /** 每股股东自由现金流量 */
  fcfe_ps?: number;
  /** 销售净利率 */
  netprofit_margin?: number;
  /** 销售毛利率 */
  grossprofit_margin?: number;
  /** 销售成本率 */
  cogs_of_sales?: number;
  /** 销售期间费用率 */
  expense_of_sales?: number;
  /** 净利润/营业总收入 */
  profit_to_gr?: number;
  /** 销售费用/营业总收入 */
  saleexp_to_gr?: number;
  /** 管理费用/营业总收入 */
  adminexp_of_gr?: number;
  /** 财务费用/营业总收入 */
  finaexp_of_gr?: number;
  /** 资产减值损失/营业总收入 */
  impai_ttm?: number;
  /** 营业总成本/营业总收入 */
  gc_of_gr?: number;
  /** 营业利润/营业总收入 */
  op_of_gr?: number;
  /** 息税前利润/营业总收入 */
  ebit_of_gr?: number;
  /** 净资产收益率 */
  roe?: number;
  /** 加权平均净资产收益率 */
  roe_waa?: number;
  /** 净资产收益率(扣除非经常损益) */
  roe_dt?: number;
  /** 总资产报酬率 */
  roa?: number;
  /** 总资产净利润 */
  npta?: number;
  /** 投入资本回报率 */
  roic?: number;
  /** 年化净资产收益率 */
  roe_yearly?: number;
  /** 年化总资产报酬率 */
  roa2_yearly?: number;
  /** 平均净资产收益率(增发条件) */
  roe_avg?: number;
  /** 经营活动净收益/利润总额 */
  opincome_of_ebt?: number;
  /** 价值变动净收益/利润总额 */
  investincome_of_ebt?: number;
  /** 营业外收支净额/利润总额 */
  n_op_profit_of_ebt?: number;
  /** 所得税/利润总额 */
  tax_to_ebt?: number;
  /** 扣除非经常损益后的净利润/净利润 */
  dtprofit_to_profit?: number;
  /** 销售商品提供劳务收到的现金/营业收入 */
  salescash_to_or?: number;
  /** 经营活动产生的现金流量净额/营业收入 */
  ocf_to_or?: number;
  /** 经营活动产生的现金流量净额/经营活动净收益 */
  ocf_to_opincome?: number;
  /** 资本支出/折旧和摊销 */
  capitalized_to_da?: number;
  /** 资产负债率 */
  debt_to_assets?: number;
  /** 权益乘数 */
  assets_to_eqt?: number;
  /** 权益乘数(杜邦分析) */
  dp_assets_to_eqt?: number;
  /** 流动资产/总资产 */
  ca_to_assets?: number;
  /** 非流动资产/总资产 */
  nca_to_assets?: number;
  /** 有形资产/总资产 */
  tbassets_to_totalassets?: number;
  /** 带息债务/全部投入资本 */
  int_to_talcap?: number;
  /** 归属于母公司的股东权益/全部投入资本 */
  eqt_to_talcapital?: number;
  /** 流动负债/负债合计 */
  currentdebt_to_debt?: number;
  /** 非流动负债/负债合计 */
  longdeb_to_debt?: number;
  /** 经营活动产生的现金流量净额/流动负债 */
  ocf_to_shortdebt?: number;
  /** 产权比率 */
  debt_to_eqt?: number;
  /** 归属于母公司的股东权益/负债合计 */
  eqt_to_debt?: number;
  /** 归属于母公司的股东权益/带息债务 */
  eqt_to_interestdebt?: number;
  /** 有形资产/负债合计 */
  tangibleasset_to_debt?: number;
  /** 有形资产/带息债务 */
  tangasset_to_intdebt?: number;
  /** 有形资产/净债务 */
  tangibleasset_to_netdebt?: number;
  /** 经营活动产生的现金流量净额/负债合计 */
  ocf_to_debt?: number;
  /** 经营活动产生的现金流量净额/带息债务 */
  ocf_to_interestdebt?: number;
  /** 经营活动产生的现金流量净额/净债务 */
  ocf_to_netdebt?: number;
  /** 已获利息倍数(EBIT/利息费用) */
  ebit_to_interest?: number;
  /** 长期债务与营运资金比率 */
  longdebt_to_workingcapital?: number;
  /** 息税折旧摊销前利润/负债合计 */
  ebitda_to_debt?: number;
  /** 营业周期 */
  turn_days?: number;
  /** 年化总资产净利率 */
  roa_yearly?: number;
  /** 总资产净利率(杜邦分析) */
  roa_dp?: number;
  /** 固定资产合计 */
  fixed_assets?: number;
  /** 扣除财务费用前营业利润 */
  profit_prefin_exp?: number;
  /** 非营业利润 */
  non_op_profit?: number;
  /** 营业利润／利润总额 */
  op_to_ebt?: number;
  /** 非营业利润／利润总额 */
  nop_to_ebt?: number;
  /** 经营活动产生的现金流量净额／营业利润 */
  ocf_to_profit?: number;
  /** 货币资金／流动负债 */
  cash_to_liqdebt?: number;
  /** 货币资金／带息流动负债 */
  cash_to_liqdebt_withinterest?: number;
  /** 营业利润／流动负债 */
  op_to_liqdebt?: number;
  /** 营业利润／负债合计 */
  op_to_debt?: number;
  /** 年化投入资本回报率 */
  roic_yearly?: number;
  /** 固定资产合计周转率 */
  total_fa_trun?: number;
  /** 利润总额／营业收入 */
  profit_to_op?: number;
  /** 经营活动单季度净收益 */
  q_opincome?: number;
  /** 价值变动单季度净收益 */
  q_investincome?: number;
  /** 扣除非经常损益后的单季度净利润 */
  q_dtprofit?: number;
  /** 每股收益(单季度) */
  q_eps?: number;
  /** 销售净利率(单季度) */
  q_netprofit_margin?: number;
  /** 销售毛利率(单季度) */
  q_gsprofit_margin?: number;
  /** 销售期间费用率(单季度) */
  q_exp_to_sales?: number;
  /** 净利润／营业总收入(单季度) */
  q_profit_to_gr?: number;
  /** 销售费用／营业总收入 (单季度) */
  q_saleexp_to_gr?: number;
  /** 管理费用／营业总收入 (单季度) */
  q_adminexp_to_gr?: number;
  /** 财务费用／营业总收入 (单季度) */
  q_finaexp_to_gr?: number;
  /** 资产减值损失／营业总收入(单季度) */
  q_impair_to_gr_ttm?: number;
  /** 营业总成本／营业总收入 (单季度) */
  q_gc_to_gr?: number;
  /** 营业利润／营业总收入(单季度) */
  q_op_to_gr?: number;
  /** 净资产收益率(单季度) */
  q_roe?: number;
  /** 净资产单季度收益率(扣除非经常损益) */
  q_dt_roe?: number;
  /** 总资产净利润(单季度) */
  q_npta?: number;
  /** 经营活动净收益／利润总额(单季度) */
  q_opincome_to_ebt?: number;
  /** 价值变动净收益／利润总额(单季度) */
  q_investincome_to_ebt?: number;
  /** 扣除非经常损益后的净利润／净利润(单季度) */
  q_dtprofit_to_profit?: number;
  /** 销售商品提供劳务收到的现金／营业收入(单季度) */
  q_salescash_to_or?: number;
  /** 经营活动产生的现金流量净额／营业收入(单季度) */
  q_ocf_to_sales?: number;
  /** 经营活动产生的现金流量净额／经营活动净收益(单季度) */
  q_ocf_to_or?: number;
  /** 基本每股收益同比增长率(%) */
  basic_eps_yoy?: number;
  /** 稀释每股收益同比增长率(%) */
  dt_eps_yoy?: number;
  /** 每股经营活动产生的现金流量净额同比增长率(%) */
  cfps_yoy?: number;
  /** 营业利润同比增长率(%) */
  op_yoy?: number;
  /** 利润总额同比增长率(%) */
  ebt_yoy?: number;
  /** 归属母公司股东的净利润同比增长率(%) */
  netprofit_yoy?: number;
  /** 归属母公司股东的净利润-扣除非经常损益同比增长率(%) */
  dt_netprofit_yoy?: number;
  /** 经营活动产生的现金流量净额同比增长率(%) */
  ocf_yoy?: number;
  /** 净资产收益率(摊薄)同比增长率(%) */
  roe_yoy?: number;
  /** 每股净资产相对年初增长率(%) */
  bps_yoy?: number;
  /** 资产总计相对年初增长率(%) */
  assets_yoy?: number;
  /** 归属母公司的股东权益相对年初增长率(%) */
  eqt_yoy?: number;
  /** 营业总收入同比增长率(%) */
  tr_yoy?: number;
  /** 营业收入同比增长率(%) */
  or_yoy?: number;
  /** 营业总收入同比增长率(%)(单季度) */
  q_gr_yoy?: number;
  /** 营业总收入环比增长率(%)(单季度) */
  q_gr_qoq?: number;
  /** 营业收入同比增长率(%)(单季度) */
  q_sales_yoy?: number;
  /** 营业收入环比增长率(%)(单季度) */
  q_sales_qoq?: number;
  /** 营业利润同比增长率(%)(单季度) */
  q_op_yoy?: number;
  /** 营业利润环比增长率(%)(单季度) */
  q_op_qoq?: number;
  /** 净利润同比增长率(%)(单季度) */
  q_profit_yoy?: number;
  /** 净利润环比增长率(%)(单季度) */
  q_profit_qoq?: number;
  /** 归属母公司股东的净利润同比增长率(%)(单季度) */
  q_netprofit_yoy?: number;
  /** 归属母公司股东的净利润环比增长率(%)(单季度) */
  q_netprofit_qoq?: number;
  /** 净资产同比增长率 */
  equity_yoy?: number;
  /** 研发费用 */
  rd_exp?: number;
  /** 更新标识 */
  update_flag?: string;
}

// income 利润表
export interface IncomeParams {
  /** 股票代码（必填），如 600000.SH */
  ts_code: string;
  /** 公告日期 YYYYMMDD */
  ann_date?: string;
  /** 实际公告日期 YYYYMMDD */
  f_ann_date?: string;
  /** 公告开始日期 YYYYMMDD */
  start_date?: string;
  /** 公告结束日期 YYYYMMDD */
  end_date?: string;
  /** 报告期（每个季度最后一天），如 20171231 */
  period?: string;
  /** 报告类型，见文档底部说明 */
  report_type?: string;
  /** 公司类型（1一般工商业 2银行 3保险 4证券） */
  comp_type?: string;
}

export interface IncomeResponse {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 实际公告日期 */
  f_ann_date: string;
  /** 报告期（期末日期） */
  end_date: string;
  /** 报告类型 */
  report_type: string;
  /** 公司类型 */
  comp_type: string;
  /** 报告期类型 */
  end_type: string;
  /** 基本每股收益 */
  basic_eps?: number;
  /** 稀释每股收益 */
  diluted_eps?: number;
  /** 营业总收入 */
  total_revenue?: number;
  /** 营业收入 */
  revenue?: number;
  /** 利息收入 */
  int_income?: number;
  /** 已赚保费 */
  prem_earned?: number;
  /** 手续费及佣金收入 */
  comm_income?: number;
  /** 手续费及佣金净收入 */
  n_commis_income?: number;
  /** 其他经营净收益 */
  n_oth_income?: number;
  /** 加:其他业务净收益 */
  n_oth_b_income?: number;
  /** 保险业务收入 */
  prem_income?: number;
  /** 减:分出保费 */
  out_prem?: number;
  /** 提取未到期责任准备金 */
  une_prem_reser?: number;
  /** 其中:分保费收入 */
  reins_income?: number;
  /** 代理买卖证券业务净收入 */
  n_sec_tb_income?: number;
  /** 证券承销业务净收入 */
  n_sec_uw_income?: number;
  /** 受托客户资产管理业务净收入 */
  n_asset_mg_income?: number;
  /** 其他业务收入 */
  oth_b_income?: number;
  /** 加:公允价值变动净收益 */
  fv_value_chg_gain?: number;
  /** 加:投资净收益 */
  invest_income?: number;
  /** 其中:对联营企业和合营企业的投资收益 */
  ass_invest_income?: number;
  /** 加:汇兑净收益 */
  forex_gain?: number;
  /** 营业总成本 */
  total_cogs?: number;
  /** 减:营业成本 */
  oper_cost?: number;
  /** 减:利息支出 */
  int_exp?: number;
  /** 减:手续费及佣金支出 */
  comm_exp?: number;
  /** 减:营业税金及附加 */
  biz_tax_surchg?: number;
  /** 减:销售费用 */
  sell_exp?: number;
  /** 减:管理费用 */
  admin_exp?: number;
  /** 减:财务费用 */
  fin_exp?: number;
  /** 减:资产减值损失 */
  assets_impair_loss?: number;
  /** 退保金 */
  prem_refund?: number;
  /** 赔付总支出 */
  compens_payout?: number;
  /** 提取保险责任准备金 */
  reser_insur_liab?: number;
  /** 保户红利支出 */
  div_payt?: number;
  /** 分保费用 */
  reins_exp?: number;
  /** 营业支出 */
  oper_exp?: number;
  /** 减:摊回赔付支出 */
  compens_payout_refu?: number;
  /** 减:摊回保险责任准备金 */
  insur_reser_refu?: number;
  /** 减:摊回分保费用 */
  reins_cost_refund?: number;
  /** 其他业务成本 */
  other_bus_cost?: number;
  /** 营业利润 */
  operate_profit?: number;
  /** 加:营业外收入 */
  non_oper_income?: number;
  /** 减:营业外支出 */
  non_oper_exp?: number;
  /** 其中:减:非流动资产处置净损失 */
  nca_disploss?: number;
  /** 利润总额 */
  total_profit?: number;
  /** 所得税费用 */
  income_tax?: number;
  /** 净利润(含少数股东损益) */
  n_income?: number;
  /** 净利润(不含少数股东损益) */
  n_income_attr_p?: number;
  /** 少数股东损益 */
  minority_gain?: number;
  /** 其他综合收益 */
  oth_compr_income?: number;
  /** 综合收益总额 */
  t_compr_income?: number;
  /** 归属于母公司(或股东)的综合收益总额 */
  compr_inc_attr_p?: number;
  /** 归属于少数股东的综合收益总额 */
  compr_inc_attr_m_s?: number;
  /** 息税前利润 */
  ebit?: number;
  /** 息税折旧摊销前利润 */
  ebitda?: number;
  /** 保险业务支出 */
  insurance_exp?: number;
  /** 年初未分配利润 */
  undist_profit?: number;
  /** 可分配利润 */
  distable_profit?: number;
  /** 研发费用 */
  rd_exp?: number;
  /** 财务费用:利息费用 */
  fin_exp_int_exp?: number;
  /** 财务费用:利息收入 */
  fin_exp_int_inc?: number;
  /** 盈余公积转入 */
  transfer_surplus_rese?: number;
  /** 住房周转金转入 */
  transfer_housing_imprest?: number;
  /** 其他转入 */
  transfer_oth?: number;
  /** 调整以前年度损益 */
  adj_lossgain?: number;
  /** 提取法定盈余公积 */
  withdra_legal_surplus?: number;
  /** 提取法定公益金 */
  withdra_legal_pubfund?: number;
  /** 提取企业发展基金 */
  withdra_biz_devfund?: number;
  /** 提取储备基金 */
  withdra_rese_fund?: number;
  /** 提取任意盈余公积金 */
  withdra_oth_ersu?: number;
  /** 职工奖金福利 */
  workers_welfare?: number;
  /** 可供股东分配的利润 */
  distr_profit_shrhder?: number;
  /** 应付优先股股利 */
  prfshare_payable_dvd?: number;
  /** 应付普通股股利 */
  comshare_payable_dvd?: number;
  /** 转作股本的普通股股利 */
  capit_comstock_div?: number;
  /** 扣除非经常性损益后的净利润（更正前） */
  net_after_nr_lp_correct?: number;
  /** 信用减值损失 */
  credit_impa_loss?: number;
  /** 净敞口套期收益 */
  net_expo_hedging_benefits?: number;
  /** 其他资产减值损失 */
  oth_impair_loss_assets?: number;
  /** 营业总成本（二） */
  total_opcost?: number;
  /** 以摊余成本计量的金融资产终止确认收益 */
  amodcost_fin_assets?: number;
  /** 其他收益 */
  oth_income?: number;
  /** 资产处置收益 */
  asset_disp_income?: number;
  /** 持续经营净利润 */
  continued_net_profit?: number;
  /** 终止经营净利润 */
  end_net_profit?: number;
  /** 更新标识 */
  update_flag: string;
}
