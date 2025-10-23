import { LocalUpdateCurrentAccount } from "../../usecases/updateCurrentAccount/LocalUpdateCurrentAccount"
import { UpdateCurrentAccount } from "../../usecases/updateCurrentAccount/UpdateCurrentAccount"
import { createStorage } from "../storage/StorageFactory"

export const createUpdateCurrentAccount = (): UpdateCurrentAccount => {
  const storage = createStorage()
  return new LocalUpdateCurrentAccount(storage)
}