"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dice = /** @class */ (function () {
    function Dice(max) {
        this.dice = max;
    }
    Dice.prototype.randomIntFromInterval = function () {
        return Math.floor(Math.random() * (this.dice - 1 + 1) + 1);
    };
    return Dice;
}());
exports.default = Dice;
