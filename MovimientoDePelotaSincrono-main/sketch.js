var gameState = 0;
var playerCount;
var database;
var form1;
var game1;
var allPlayers;
var player1;
var distance = 0;
var car1, car2, car3, car4, cars;
var car1IM, car2IM, car3IM, car4IM, track1, track2;

function preload(){

car1IM = loadImage("imágenes/car1.png");
car2IM = loadImage("imágenes/car2.png");
car3IM = loadImage("imágenes/car3.png");
car4IM = loadImage("imágenes/car4.png");
track1 = loadImage("imágenes/track1.jpeg");
track2 = loadImage("imágenes/track2.png");

}








function setup(){
  createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game1 = new game();
  console.log("PASO 1:");
  game1.getState();
  console.log("PASO 2:");
  game1.start();
  
  
  
}

function draw(){
  background("white");
  if(playerCount === 4){
    game1.update(1)
  }
   
  
  

  if (gameState === 1){
    clear();
    game1.play();
  }
  if(gameState === 2){
  game1.end();
  }
  


}


 
