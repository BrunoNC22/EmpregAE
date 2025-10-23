import { RemoteLogin } from "../../usecases/login/RemoteLogin"
import { createHttpClient } from "../http/HttpClientFactory"

export const createLogin = () => {
  const httpClient = createHttpClient()
  return new RemoteLogin(httpClient)
}