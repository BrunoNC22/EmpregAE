import { CurrentAccount } from "../../types/CurrentAccount";
import { LoginProps } from "./LoginProps";

export interface Login {
  perform(props: LoginProps): Promise<CurrentAccount>
}