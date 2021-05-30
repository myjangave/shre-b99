var canvas;
var database;

var gameState = 0;
var playerCount;
var allPlayers;

var greenhome,redhome,yellowhome,bluehome;

var gdname; 
var rdname;
var ydname;
var bdname;
var allpointers;
var opnames;

var gc1,gc2,gc3,gc4;

var rc1,rc2,rc3,rc4;

var yc1,yc2,yc3,yc4;

var bc1,bc2,bc3,bc4;

var gpointer,rpointer,ypointer,bpointer;

var gc1img,rc1img,yc1img,bc1img;

var gdiceholder,rdiceholder,ydiceholder,bdiceholder;

var dice,diceat1,diceat2,diceat3,diceat4,diceat5,diceat6,diceimg;
var holderpos;

var form, player, game;

var bg;


function preload() {
    bg = loadImage("img/board.png");
    gc1img = loadImage("img/mgreen.png");
    rc1img = loadImage("img/mred.png");
    yc1img = loadImage("img/myellow.png");
    bc1img = loadImage("img/mblue.png");
    diceat1 = loadImage("img/diceone.png");
    diceat2 = loadImage("img/dicetwo.png");
    diceat3 = loadImage("img/dicethree.png");
    diceat4 = loadImage("img/dicefour.png");
    diceat5 = loadImage("img/dicefive.png");
    diceat6 = loadImage("img/dicesix.png");
}


function setup() {
    canvas = createCanvas(712,712);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();


}

function draw(){
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
  }