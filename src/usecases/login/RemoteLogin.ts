import { HttpPostClient } from "../../gateways/httpClient/HttpClient";
import { CurrentAccount } from "../../types/CurrentAccount";
import { Login } from "./Login";
import { LoginProps } from "./LoginProps";

type LoginReponse = {
  token: string
}

export class RemoteLogin implements Login {
  constructor(
    private readonly httpClient: HttpPostClient,
  ) {}

  async perform(props: LoginProps): Promise<CurrentAccount> {
    const response = await this.httpClient.post<LoginReponse>({ 
      url: '/auth/default/login',
      body: {
        name: props.name,
        email: props.email
      }
    })

    return {
      token: response.token,
      name: props.name,
      email: props.email
    }
  }
}