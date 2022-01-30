"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entities = /** @class */ (function () {
    function Entities() {
        this.snake = {};
        this.ladder = {};
    }
    Entities.prototype.setSnake = function (end, start) {
        this.snake[end] = start;
    };
    Entities.prototype.getSnake = function (pos) {
        return this.snake[pos];
    };
    Entities.prototype.getSnakes = function () {
        return this.snake;
    };
    Entities.prototype.setLadder = function (start, end) {
        this.ladder[start] = end;
    };
    Entities.prototype.getLadder = function (pos) {
        return this.ladder[pos];
    };
    Entities.prototype.getLadders = function () {
        return this.ladder;
    };
    return Entities;
}());
exports.default = Entities;
