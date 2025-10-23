import axios from "axios";
import { AxiosAdapter } from "../../gateways/httpClient/AxiosAdapter";
import { HttpClient } from "../../gateways/httpClient/HttpClient";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  withCredentials: true,
})

export const createHttpClient = (): HttpClient => {
  return new AxiosAdapter(axiosInstance)
}