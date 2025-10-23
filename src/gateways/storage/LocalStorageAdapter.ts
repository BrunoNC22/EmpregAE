import { Storage } from "./Storage";

export class LocalStorageAdapter implements Storage {
  get<T>(key: string): T {
    const response = localStorage.getItem(key)
    
    return JSON.parse(response) as T
  }

  async insert(key: string, data: unknown): Promise<void> {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

