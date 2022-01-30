"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = __importDefault(require("./models/entities"));
var player_1 = __importDefault(require("./models/player"));
var snakeAndLadderGame_1 = __importDefault(require("./services/snakeAndLadderGame"));
var readline_1 = __importDefault(require("readline"));
var rl = readline_1.default.createInterface(process.stdin, process.stdout);
rl.prompt();
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.generateTinyUrl = function () {
        var entities = new entities_1.default();
        var game = new snakeAndLadderGame_1.default();
        var players = new player_1.default();
        rl.on('line', function (line) {
            var snakeArray = line.split(' ');
            if (snakeArray[0] === 'snake') {
                for (var i = 1; i < snakeArray.length - 1; i++) {
                    entities.setSnake(parseInt(snakeArray[i]), parseInt(snakeArray[i + 1]));
                    i++;
                }
            }
            var ladderArray = line.split(' ');
            if (ladderArray[0] === 'ladder') {
                for (var i = 1; i < ladderArray.length - 1; i++) {
                    entities.setLadder(parseInt(ladderArray[i]), parseInt(ladderArray[i + 1]));
                    i++;
                }
            }
            var playersInput = line.split(' ');
            if (playersInput[0] === 'players') {
                players.setPlayers(playersInput[1], 0);
                players.setPlayers(playersInput[2], 0);
                game.playGame(players.getPlayers(), entities);
            }
            if (line === "end")
                rl.close();
            rl.prompt();
        }).on('close', function () {
            process.exit(0);
        });
    };
    return Main;
}());
var main = new Main();
main.generateTinyUrl();
