"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dice_1 = __importDefault(require("../models/dice"));
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.playGame = function (players, entities) {
        var dice = new dice_1.default(6);
        var playerInGame = players;
        var gameOn = true;
        while (gameOn) {
            for (var i = 0; i < playerInGame.length; i++) {
                var diceRoll = dice.randomIntFromInterval();
                var playersLastPosition = playerInGame[i].position;
                this.setNewPosition(playerInGame[i], diceRoll, entities);
                console.log("".concat(playerInGame[i].name, " rolled a ").concat(diceRoll, " and moved from ").concat(playersLastPosition, " to ").concat(playerInGame[i].position));
                if (this.winGame(playerInGame[i])) {
                    console.log(playerInGame[i].name, ' wins the game');
                    gameOn = false;
                    break;
                }
            }
        }
    };
    Game.prototype.setNewPosition = function (player, newPosition, entities) {
        if (entities.getSnake(newPosition)) {
            player.position = entities.getSnake(newPosition);
        }
        else if (entities.getLadder(newPosition)) {
            player.position = entities.getLadder(newPosition);
        }
        else {
            if (newPosition + player.position <= 100) {
                player.position = player.position + newPosition;
            }
            else {
                player.position = 100;
            }
        }
        return player;
    };
    Game.prototype.winGame = function (player) {
        if (player.position === 100) {
            return true;
        }
        return false;
    };
    return Game;
}());
exports.default = Game;
