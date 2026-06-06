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
    // 使用渐进式令牌补充，避免 reservoirRefreshInterval 的硬重置
    // 导致令牌数突跳（如从 102 突然变成 149）
    const limiter = new Bottleneck({
      // 同时只处理 1 个请求
      maxConcurrent: 1,
      // 初始令牌数量
      reservoir: 1,
      // 每隔 (60s / requestsPerMin) 补充 1 个令牌，实现平滑限流
      reservoirIncreaseInterval: Math.ceil((60 * 1000) / requestsPerMin),
      reservoirIncreaseAmount: 1,
      // 令牌上限，防止空闲时累积过多
      reservoirIncreaseMaximum: 1,
      // 如果配额不足，则阻塞等待
      strategy: Bottleneck.strategy.BLOCK,
    });
    this.index = new Index(token, limiter);
    this.stock = new Stock(token, limiter);
  }
}
