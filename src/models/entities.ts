class Entities{
    private snake:any;
    private ladder:any;

    constructor(){
        this.snake = {};
        this.ladder = {};
    }

    public setSnake(end:number,start:number){
        this.snake[end] = start
    }
    public getSnake(pos:number){
        return this.snake[pos]
    }
    public getSnakes(){
        return this.snake
    }

    public setLadder(start:number,end:number){
        this.ladder[start] = end
    }
    public getLadder(pos:number){
        return this.ladder[pos]
    }

    public getLadders(){
        return this.ladder
    }

}

export default Entities;