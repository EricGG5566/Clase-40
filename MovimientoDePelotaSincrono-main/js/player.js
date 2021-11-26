class player{
    constructor(){

        this.index = null;
        this.distance = 0;
        this.name = null;

    }
    getCount(){ //obtiene el PlayerCount de manera automatica 
        console.log("indice del nuevo jugador:", this.index);
        console.log("nombre del nuevo jugador", this.name);
        console.log("distancia del jugador", this.distance);
        console.log("conteo de jugadores:", playerCount);
        var playerCountRef = database.ref('playerCount'); //identifica la referencia de la ubicación del valor
        playerCountRef.on("value", (data)=>{ //crea un ollente, avisará cada que haya un cambio para la variable
            playerCount = data.val(); 
           
        })
        

    }

    updateCount(count){ //actualiza el playercount en la base 
        database.ref("/").update({playerCount: count}); 
        console.log("PASO 4:");
        console.log("contador actualizado:", playerCount);
    }


    update(){ //actualiza el nombre y la distancia de los jugadores en la base de datos
        var playerIndex = "players/player" + this.index; 
        database.ref(playerIndex).set({name: this.name, distance: this.distance});
        console.log("PASO 3:");
        console.log("indice del nuevo jugador:", this.index);
        console.log("nombre del nuevo jugador", this.name);
        console.log("distancia", this.distance);
        }
    
    
    static getPlayerInfo(){
    
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {allPlayers = data.val()}) //operador de flecha: vincula la información al objeto
    console.log("valor de player info ref:", playerInfoRef);
    console.log("valor de allPlayer", allPlayers);
}
    
}