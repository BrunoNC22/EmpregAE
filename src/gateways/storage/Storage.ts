
export interface InsertStorage {
  insert(key: string, data: unknown): Promise<void>
}

export interface GetStorage {
  get<T>(key: string): T
}

export interface Storage extends GetStorage, InsertStorage {}