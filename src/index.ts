import Entities from './models/entities';
import Players from './models/player'
import Game from './services/snakeAndLadderGame';

import readline from 'readline';
const rl = readline.createInterface(process.stdin, process.stdout);
rl.prompt();

class Main{
    public generateTinyUrl(){
        let entities = new Entities()
        let game = new Game()

        let players = new Players()
        rl.on('line', function(line:any) {
            let snakeArray = line.split(' ');
            if(snakeArray[0] === 'snake'){
                for(let i=1;i<snakeArray.length-1;i++){
                    entities.setSnake(parseInt(snakeArray[i]),parseInt(snakeArray[i+1]));
                    i++;
                }
            }

            let ladderArray = line.split(' ');
            if(ladderArray[0] === 'ladder'){
                for(let i=1;i<ladderArray.length-1;i++){
                    entities.setLadder(parseInt(ladderArray[i]),parseInt(ladderArray[i+1]));
                    i++;
                }
            }

            let playersInput = line.split(' ')
            if(playersInput[0] === 'players'){
                players.setPlayers(playersInput[1],0)
                players.setPlayers(playersInput[2],0)
                game.playGame(players.getPlayers(),entities)
            }

            if (line === "end") rl.close();
            rl.prompt();
        }).on('close',function(){
            process.exit(0);
        });
    }
}

const main = new Main()

main.generateTinyUrl()
