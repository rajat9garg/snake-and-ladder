class Dice{
    private dice:number;
    constructor(max:number){
        this.dice = max
    }

    public randomIntFromInterval() {
        return Math.floor(Math.random() * (this.dice - 1 + 1) + 1)
    }
}

export default Dice;