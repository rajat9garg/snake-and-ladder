"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Players = /** @class */ (function () {
    function Players() {
        this.players = [];
    }
    Players.prototype.setPlayers = function (name, position) {
        this.players.push({
            name: name, position: position
        });
    };
    Players.prototype.getPlayers = function () {
        return this.players;
    };
    return Players;
}());
exports.default = Players;
