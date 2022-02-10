class Game {
  constructor(){

    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
  } 

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  
  start(){
    form = new Form() ;
    form.display() ;

    player = new Player() ;
    playerCount = player.getCount();


player1 = createSprite(width / 2 - 100, 100) ;
player1.addImage(player1Img,"p1") ;
player1.scale = 0.8 ;

player2 = createSprite(width / 2 + 200, 10) ;
player2.addImage(player2Img,"p2") ;
player2.scale = 1.5 ;

players = [player1 , player2] ;
}

handleElement() {
  form.hide() ;

  this.resetTitle.html("Reset Game");
  this.resetTitle.class("resetText");
  this.resetTitle.position(width / 2 + 200, 40);

  this.resetButton.class("resetButton");
  this.resetButton.position(width / 2 + 230, 100);

}

play() {
  this.handleResetButton() ;
  this.handleElement() ;
  Player.getPlayersInfo();

  if (allPlayers !== undefined) {
   // image(room1Img, 0, -height * 2, width+100, height * 2);

   background(room1Img) ;

    
      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = allPlayers[plr].positionY;

       


        players[index - 1].position.x = x;
        players[index - 1].position.y = y;

        if (index === player.index) {
          camera.position.x = players[index - 1].position.x;
          fill("light blue") ;
          text("Player1 :" +allPlayers.player1.name,width / 2 - 100, 300) ;
          text("player2:"+allPlayers.player2.name,width / 2 + 200, 310) ;


}
  }
  this.handlePlayerControl()
  drawSprites() ;
}
}

handleResetButton() {
  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      palyers: {}
    });
    window.location.reload();
  });
}

handlePlayerControl() {
  if(keyIsDown(RIGHT_ARROW)){
  player.positionX += 5 ;
  player.update() ; 
  }

  if(keyIsDown(LEFT_ARROW)){
    player.positionX -= 5 ;
    player.update() ; 
    }
}

}
