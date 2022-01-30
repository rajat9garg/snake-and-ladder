"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_string_generator_1 = __importDefault(require("../helper/random-string-generator"));
var UrlGenerator = /** @class */ (function () {
    function UrlGenerator() {
        this.generatedStrings = [];
        for (var i = 0; i < 10; i++) {
            this.generatedStrings.push(random_string_generator_1.default.generateString(10));
        }
    }
    UrlGenerator.prototype.get = function () {
        var hash = this.generatedStrings[0];
        this.generatedStrings.shift();
        return hash;
    };
    return UrlGenerator;
}());
exports.default = UrlGenerator;
