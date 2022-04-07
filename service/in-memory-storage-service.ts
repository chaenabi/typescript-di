import { StorageService } from "../interface/storage-service"

class InMemoryService implements StorageService {
  public save(key: string, value: string): boolean {
    return false;
  }

  public remove(key: string): void {
    console.log("in memory remove.")
  }

  public clear(): void { 
    console.log("in memory clear.")
  }
}

export const storageService = new InMemoryService();