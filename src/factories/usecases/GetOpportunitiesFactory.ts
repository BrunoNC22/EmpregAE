import { GetOpportunities } from "../../usecases/getOpportunities/GetOpportunities";
import { RemoteGetOpportinities } from "../../usecases/getOpportunities/RemoteGetOpportunities";
import { createHttpClient } from "../http/HttpClientFactory";

export const createGetOpportunities = (): GetOpportunities => {
  const httpClient = createHttpClient()
  return new RemoteGetOpportinities(httpClient)
}