import Bottleneck from "bottleneck";
import { Index } from "./index/index";
import { Stock } from "./stock";

export default class TuShare {
  // 指数
  public index;
  // 股票
  public stock;

  constructor(token: string, requestsPerMin: number) {
    // 平滑地限制每分钟请求次数
    const limiter = new Bottleneck({
      // 同时只处理 1 个请求
      maxConcurrent: 1,
      // 一个时间窗口内，分配的令牌数量
      reservoir: requestsPerMin,
      // 每 60 秒重新补充令牌
      reservoirRefreshInterval: 60 * 1000,
      // 每次补充的令牌数量
      reservoirRefreshAmount: requestsPerMin,
      // 如果配额不足，则阻塞等待
      strategy: Bottleneck.strategy.BLOCK,
    });
    this.index = new Index(token, limiter);
    this.stock = new Stock(token, limiter);
  }
}
