import { AxiosInstance } from "axios";
import { HttpClient } from "./HttpClient";

export class AxiosAdapter implements HttpClient {

  constructor (private readonly axiosInstance: AxiosInstance) {}

  async get<T>(props: { url: string; }): Promise<T> {
    const { data } = await this.axiosInstance.get<T>(props.url)
    return data
  }

  async post<T>(props: { url: string; body: unknown; }): Promise<T> {
    const { data } = await this.axiosInstance.post<T>(props.url, props.body)
    return data
  }
}