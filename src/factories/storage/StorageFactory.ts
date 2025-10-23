import { LocalStorageAdapter } from "../../gateways/storage/LocalStorageAdapter"
import { Storage } from "../../gateways/storage/Storage"

export const createStorage = (): Storage => {
  return new LocalStorageAdapter()
}