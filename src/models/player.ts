class Players{

    private players:object[] = [];

    public setPlayers(name:string,position:number){
        this.players.push({
            name:name,position : position
        })
    }

    public getPlayers(){
        return this.players
    }
}

export default Players