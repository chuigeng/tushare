# tushare

## 介绍

一个封装 [Tushare](https://tushare.pro/document/2) API 的 JS 库

1. 提供 typescript 类型检查
2. 以对象的形式，返回结构化响应数据

使用示例：

```
const tushare = new TuShare(token);

const values = await tushare.index.basic({
  market: "SSE",
});
```

返回数据

```
[
  {
    ts_code: '000001.SH',
    name: '上证指数',
    market: 'SSE',
    publisher: '中证指数有限公司',
    category: '综合指数',
    base_date: '19901219',
    base_point: 100,
    list_date: '19910715'
  },
  {
    ts_code: '000002.SH',
    name: '上证A指',
    market: 'SSE',
    publisher: '中证指数有限公司',
    category: '规模指数',
    base_date: '19901219',
    base_point: 100,
    list_date: '19920221'
  },
  ...
]
```

## 安装

`npm install @chuigeng/tushare`

或者

`pnpm install @chuigeng/tushare`

## 一些说明

### 异常处理

接回会抛出两类异常

1. 网络请求异常，本库使用 [axios](https://github.com/axios/axios) 作为 HTTP 请求客户端， [axios](https://github.com/axios/axios) 捕获的网络异常都会原封不动地对外抛出
2. Tushare 返回错误代码。Tushare 的 API，返回的数据中 `code !== 0` 时代表异常（如缺少必传参数），此时会抛出 TushareError 异常。

### 已封装的 API

由于 Tushare 接口众多，前期只封装了我自己需要的接口，其余接口逐步完善。以下是已封装好的 API

- [指数](https://tushare.pro/document/2?doc_id=93)

### 测试用例

测试用例在 `__tests__` 目录下。

执行所有测试用例：`npm test`

执行指定测试用例：`npm test -- __tests__/index.test.ts -t "index_daily"`
