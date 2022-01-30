import Dice from '../models/dice'
class Game{

    public playGame(players:any,entities:any){
        let dice = new Dice(6)

        const playerInGame = players
        let gameOn = true
        while(gameOn){
            for(let i=0;i<playerInGame.length;i++){
                let diceRoll = dice.randomIntFromInterval()
                let playersLastPosition =  playerInGame[i].position;
                this.setNewPosition(playerInGame[i],diceRoll,entities);
                console.log(`${playerInGame[i].name} rolled a ${diceRoll} and moved from ${playersLastPosition} to ${playerInGame[i].position}`)
                if(this.winGame(playerInGame[i])){
                    console.log(playerInGame[i].name,' wins the game')
                    gameOn = false;
                    break;
                }
            }
        }
    }

    private setNewPosition(player:any,newPosition:number,entities:any){
        if(entities.getSnake(newPosition)){
            player.position = entities.getSnake(newPosition)
        }else if(entities.getLadder(newPosition)){
            player.position = entities.getLadder(newPosition)
        }else{
            if(newPosition + player.position <= 100){
                player.position = player.position + newPosition
            }else{
            player.position = 100
            }
        }
        return player
    }

    private winGame(player:any){
            if(player.position === 100){
                return true
            }
        return false
    }

}

export default Game;