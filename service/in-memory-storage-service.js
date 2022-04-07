"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageService = void 0;
var InMemoryService = /** @class */ (function () {
    function InMemoryService() {
    }
    InMemoryService.prototype.save = function (key, value) {
        return false;
    };
    InMemoryService.prototype.remove = function (key) {
        console.log("in memory remove.");
    };
    InMemoryService.prototype.clear = function () {
        console.log("in memory clear.");
    };
    return InMemoryService;
}());
exports.storageService = new InMemoryService();
