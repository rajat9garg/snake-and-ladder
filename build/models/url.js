"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Url = /** @class */ (function () {
    function Url() {
        this.tinyUrlObject = {};
    }
    Url.prototype.setTinyUrl = function (original_url, tinyUrl) {
        this.tinyUrlObject[tinyUrl] = original_url;
    };
    Url.prototype.getTinyUrl = function (tinyUrl) {
        console.log(this.tinyUrlObject, "tinyUrlObject");
        return this.tinyUrlObject[tinyUrl];
    };
    return Url;
}());
exports.default = Url;
