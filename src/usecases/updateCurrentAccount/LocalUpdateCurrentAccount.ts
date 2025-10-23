import { InsertStorage } from "../../gateways/storage/Storage";
import { CurrentAccount } from "../../types/CurrentAccount";
import { UpdateCurrentAccount } from "./UpdateCurrentAccount";

export class LocalUpdateCurrentAccount implements UpdateCurrentAccount {
  constructor(private readonly storage: InsertStorage) {}
  perform(currentAccount: CurrentAccount): void {
    this.storage.insert('credentials', currentAccount)
  }
}