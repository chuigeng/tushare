import axios from "axios";
import { TushareError } from "./error";
/**
 * 基类，封装 Tushare 的接口标准
 */
export default abstract class API {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  protected async get<P, R>(apiName: string, params?: P, fields?: string[]): Promise<R[]> {
    const requestData = {
      api_name: apiName,
      token: this.token,
      params,
      fields: fields?.join(","),
    };

    const response = await axios.post("http://api.tushare.pro", requestData, {
      headers: {
        "Content-Type": "application/json",
      },
      validateStatus: () => true,
    });

    if (response.status !== 200) {
      throw new Error(`Http request failed with status ${response.status}: ${response.statusText}`);
    }

    const { code, msg, data } = response.data as {
      code: number;
      msg: string;
      data?: { fields: string[]; items: any[][] };
    };

    if (code !== 0) {
      throw new TushareError(code, msg);
    }

    const itemFields = data?.fields ?? [];
    if (!itemFields.length) {
      throw new Error(`Tushare request failed with empty fields`);
    }

    const items = data?.items ?? [];
    return items.map((item) =>
      Object.fromEntries(itemFields.map((field, index) => [field, item[index]]))
    ) as R[];
  }
}
