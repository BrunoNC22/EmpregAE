import { GetStorage } from "../../gateways/storage/Storage";
import { CurrentAccount } from "../../types/CurrentAccount";
import { GetCurrentAccount } from "./GetCurrentAccount";

export class LocalGetCurrentAccount implements GetCurrentAccount {
  constructor(private readonly storage: GetStorage) {}

  perform(): CurrentAccount {
    return this.storage.get('credentials')
  }
}