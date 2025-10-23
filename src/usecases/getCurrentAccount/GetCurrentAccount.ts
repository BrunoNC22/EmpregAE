import { CurrentAccount } from "../../types/CurrentAccount";

export interface GetCurrentAccount {
  perform(): CurrentAccount
}