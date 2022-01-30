"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_generator_1 = __importDefault(require("../models/url-generator"));
var url_1 = __importDefault(require("../models/url"));
var CreateUrlService = /** @class */ (function () {
    function CreateUrlService() {
        this.url = new url_1.default();
        this.urlGenerator = new url_generator_1.default();
    }
    CreateUrlService.prototype.createUrl = function (original_url) {
        var hash = this.urlGenerator.get();
        this.url.setTinyUrl(original_url, hash);
        return hash;
    };
    CreateUrlService.prototype.getUrl = function (tinyUrl) {
        this.url.getTinyUrl(tinyUrl);
    };
    return CreateUrlService;
}());
exports.default = CreateUrlService;
