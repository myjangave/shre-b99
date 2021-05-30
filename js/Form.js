class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Ludoo!!!");
      this.title.position(displayWidth/2 - 100, 50);
      this.title.style('font-size','80px');
      this.title.style('font-family','cursive');
        
      this.input.position(displayWidth/2 - 90 , displayHeight/2 - 80);
      this.input.style('width', '200px');
      this.input.style('height', '20px');
      this.input.style('padding', '10px');
      this.button.position(displayWidth/2 - 20, displayHeight/2);
      this.button.style('padding','5px 30px 8px 30px');
      this.button.style('border-radius','10px');
      this.button.style('color','red');
      this.button.style('background-color','#35fc6a');
      this.button.style('border','none');
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 25, displayHeight/2 - 50);
      });

      if (keyDown("enter")) {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 25, displayHeight/2 - 50);
      }
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  