"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageService = void 0;
var RedisStorageService = /** @class */ (function () {
    function RedisStorageService() {}
    
    RedisStorageService.prototype.save = function (key, value) {
        return true;
    };
    RedisStorageService.prototype.remove = function (key) {
        console.log("redis remove.");
    };
    RedisStorageService.prototype.clear = function () {
        console.log("redis clear.");
    };
    return RedisStorageService;
}());
exports.storageService = new RedisStorageService();
