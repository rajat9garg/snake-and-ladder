"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomStringGenerator = /** @class */ (function () {
    function RandomStringGenerator() {
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
    RandomStringGenerator.prototype.generateString = function (length) {
        var result = ' ';
        var charactersLength = this.characters.length;
        for (var i = 0; i < length; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    return RandomStringGenerator;
}());
exports.default = new RandomStringGenerator();
