
import { StorageService } from "../interface/storage-service"

class RedisStorageService implements StorageService {

  public save(key: string, value: string): boolean {
    return true;
  }

  public remove(key: string): void {
    console.log("redis remove.")
  }

  public clear(): void { 
    console.log("redis clear.")
   }
}

export const storageService = new RedisStorageService();