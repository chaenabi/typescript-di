
import { StorageService } from "../interface/storage-service"
import { storageService } from "../service" //<- 이게 핵심, 절대 "../service/inmemory-storage.service.ts"나 
                                            // "../service/redis-storage.service.ts"까지 들어가면 안됨 
                                            // index.ts 파일에서 불러오는거임

class StorageController {

  private storageService: StorageService;
  
  constructor(storageService: StorageService) { 
    this.storageService = storageService;
  }

  // post, get 메소드 구현...
  public remove(): void {
     storageService.remove("item")
  }

  public clear(): void {
    storageService.clear()
  }

}

export const storageController = new StorageController(storageService);