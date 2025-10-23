import { createHttpClient } from "./factories/http/HttpClientFactory"
import { createGetCurrentAccount } from "./factories/usecases/GetCurrentAccountFactory"
import { createGetOpportunities } from "./factories/usecases/GetOpportunitiesFactory"
import { createLogin } from "./factories/usecases/LoginFactory"
import { createUpdateCurrentAccount } from "./factories/usecases/UpdateCurrentAccountFactory"

export const providers = {
  HTTP_CLIENT: {
    key: 'HttpClient',
    factory: () => { return createHttpClient() } 
  },
  GET_OPPORTUNITIES: {
    key: 'GetOpportunities',
    factory: () => { return createGetOpportunities() }
  },
  LOGIN: {
    key: 'Login',
    factory: () => { return createLogin() }
  },
  UPDATE_CURRENT_ACCOUNT: {
    key: 'UpdateCurrentAccount',
    factory: () => { return createUpdateCurrentAccount() }
  },
  GET_CURRENT_ACCOUNT: {
    key: 'GetCurrentAccount',
    factory: () => { return createGetCurrentAccount() }
  }
} as const