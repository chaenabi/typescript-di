"use strict";
// 개발자가 직접 di를 제어, 필요에 따라 다른 객체를 export
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageService = void 0;
var redis_storage_service_1 = require("./redis-storage-service");
Object.defineProperty(exports, "storageService", { enumerable: true, get: function () { return redis_storage_service_1.storageService; } });
//export { storageService } from "./in-memory-storage-service"
