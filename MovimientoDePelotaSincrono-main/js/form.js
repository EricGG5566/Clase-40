class form{
    constructor(){
    this.input = createInput("nombre");
    this.button = createButton("play");
    this.title = createElement("h1")
    this.greeting = createElement("h3");
    
}
    hide(){
        
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        

    }



    display(){
    //var title = createElement("h2");
    this.title.html("RACING CARS");
    this.title.position(displayWidth/2, 0);
    this.input.position(displayWidth/2, displayHeight-600);
    this.button.position(displayWidth/2, displayHeight-500);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player1.name = this.input.value();
        playerCount +=1;
        console.log("número de jugadores:",playerCount);
        player1.index = playerCount;
        player1.update();
        player1.updateCount(playerCount);
        this.greeting.html("Hola: " + player1.name);
        this.greeting.position(displayWidth/2, displayHeight/4);
    })
    }
}
    

//etiquetas (elements), input, botones, títulos y subtítulos