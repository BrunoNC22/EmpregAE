import { CurrentAccount } from "../../types/CurrentAccount";

export interface UpdateCurrentAccount {
  perform(currentAccount: CurrentAccount): void
}