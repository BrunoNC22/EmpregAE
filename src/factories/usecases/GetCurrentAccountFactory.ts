import { LocalGetCurrentAccount } from "../../usecases/getCurrentAccount/LocalGetCurrentAccount"
import { createStorage } from "../storage/StorageFactory"

export const createGetCurrentAccount = () => {
  const storage = createStorage()
  return new LocalGetCurrentAccount(storage)
}