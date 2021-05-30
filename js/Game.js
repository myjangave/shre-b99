class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      gdiceholder = createSprite(50,245,70,70);
      gdiceholder.shapeColor = "green";
      ydiceholder = createSprite(50,662,70,70);
      ydiceholder.shapeColor = "#ebcf31";
      rdiceholder = createSprite(662,245,70,70);
      rdiceholder.shapeColor = "#cf320a";
      bdiceholder = createSprite(662,662,70,70);
      bdiceholder.shapeColor = "#308ac9";
      
  
      greenhome = createSprite(150,150,180,180);
      greenhome.visible = false;
  
      //green
      yc1 = createSprite(107,500,0,0);
      yc1.addImage(yc1img);
      yc1.scale = 0.4;
      yc2 = createSprite(193,500,0,0);
      yc2.addImage(yc1img);
      yc2.scale = 0.4;
      yc3 = createSprite(107,590,0,0);
      yc3.addImage(yc1img);
      yc3.scale = 0.4;
      yc4 = createSprite(193,590,0,0);
      yc4.addImage(yc1img);
      yc4.scale = 0.4;
  
      //red
      rc1 = createSprite(517,90,0,0);
      rc1.addImage(rc1img);
      rc1.scale = 0.4;
      rc2 = createSprite(605,90,0,0);
      rc2.addImage(rc1img);
      rc2.scale = 0.4;
      rc3 = createSprite(517,180,0,0);
      rc3.addImage(rc1img);
      rc3.scale = 0.4;
      rc4 = createSprite(605,180,0,0);
      rc4.addImage(rc1img);
      rc4.scale = 0.4;
  
      //yellow
      gc1 = createSprite(107,90,0,0);
      gc1.addImage(gc1img);
      gc1.scale = 0.4;
      gc2 = createSprite(193,90,0,0);
      gc2.addImage(gc1img);
      gc2.scale = 0.4;
      gc3 = createSprite(107,180,0,0);
      gc3.addImage(gc1img);
      gc3.scale = 0.4;
      gc4 = createSprite(193,180,0,0);
      gc4.addImage(gc1img);
      gc4.scale = 0.4;
  
      //blue
      bc1 = createSprite(517,500,0,0);
      bc1.addImage(bc1img);
      bc1.scale = 0.4;
      bc2 = createSprite(605,500,0,0);
      bc2.addImage(bc1img);
      bc2.scale = 0.4;
      bc3 = createSprite(517,590,0,0);
      bc3.addImage(bc1img);
      bc3.scale = 0.4;
      bc4 = createSprite(605,590,0,0);
      bc4.addImage(bc1img);
      bc4.scale = 0.4;
  
      // gpointer = [gc2,gc3,gc3,gc4];
      // rpointer = [rc2,rc3,rc3,rc4];
      // ypointer = [yc2,yc3,yc3,yc4];
      // bpointer = [bc2,bc3,bc3,bc4];
      // allpointers = [gpointer,rpointer,ypointer,bpointer];

      // holderpos = [random((50,245),(600,245),(50,600),(600,600))];

    }
  
    play(){
    form.hide();
      
    Player.getPlayerInfo();
      
      
    if(allPlayers !== undefined){
    background(rgb(198,135,103));
    image(bg,0,712,712);

    background(bg);
    textSize(32)
    text(mouseX+","+mouseY,mouseX,mouseY);

    dice = createSprite(45,245);
    dice.addImage(diceat1);
    dice.scale = 0.5;

    //green
    fill("white")
    circle(105,105,50);
    circle(105,195,50);
    circle(193,105,50);
    circle(193,195,50);  
    
    //red
    circle(517,105,50);
    circle(605,105,50);
    circle(517,197,50);
    circle(605,196,50);  

    //yellow
    circle(105,518,50);
    circle(193,518,50);
    circle(105,610,50);
    circle(193,610,50);  

    //blue
    circle(517,518,50);
    circle(605,518,50);
    circle(517,609,50);
    circle(605,609,50);  

    //var display_position = 100;
        
    //index of the array
    var index = 0;

    
    // //x and y position of the cars
    // gdname = gdiceholder.y-20,gdiceholder.x;
    // rdname = rdiceholder.y-20,rdiceholder.x;
    // ydname = ydiceholder.y-20,ydiceholder.x;
    // bdname = bdiceholder.y-20,bdiceholder.x;
    // opnames = [gdname,rdname,ydname,bdname];
  
    for(var plr in allPlayers){
    //add 1 to the index for every loop
    index = index + 1 ;

    // textSize(15);
    // text(allPlayers[plr].name,opnames);

    if (mousePressedOver(dice)) {
      rolldice();
    }
        
    // if (index === player.index){
    // stroke(10);
    // fill("red");
    // ellipse(x,y,60,60);
    // allpointers[index - 1].shapeColor = "red";
    //       }
         

    //     }
  
    //   }
  
    //   if(keyIsDown(UP_ARROW) && player.index !== null){
    //     player.distance +=10
    //     player.update();
    //   }
  
    //   if(player.distance > 3860){
    //     gameState = 2;
    //     player.rank++;
    //     Player.updateCarend(player.rank);
    //   }

 function rolldice() {
      var dicesw = random(1,6);
      switch (dicesw) {
        case 1: dice.addImage(diceat1)
          break;
          case 2: dice.addImage(diceat2)
          break;
          case 3: dice.addImage(diceat3)
          break;
          case 4: dice.addImage(diceat4)
          break;
          case 5: dice.addImage(diceat5)
          break;
          case 6: dice.addImage(diceat6)
          break;
        default:
          break;
      } 
  }

    drawSprites();
      }
     }
    }


    

  }
  