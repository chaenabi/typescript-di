"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageController = void 0;
var service_1 = require("../service"); //<- 이게 핵심, 절대 "../service/inmemory-storage.service.ts"나 
// "../service/redis-storage.service.ts"까지 들어가면 안됨 
// index.ts 파일에서 불러오는거임
var StorageController = /** @class */ (function () {
    function StorageController(storageService) {
        this.storageService = storageService;
    }
    // post, get 메소드 구현...
    StorageController.prototype.remove = function () {
        service_1.storageService.remove("item");
    };
    StorageController.prototype.clear = function () {
        service_1.storageService.clear();
    };
    return StorageController;
}());
exports.storageController = new StorageController(service_1.storageService);
