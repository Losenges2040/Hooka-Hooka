var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600,300, 60,100);
  movingRect.velocityX = -2;
  movingRect.velocityY = -1;

  fixedRect.velocityX = 1;
  fixedRect.velocityY = 2;

} 

function draw() {
  background(255,255,255); 
  //movingRect.x =  mouseX;
  //movingRect.y =  mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
     //movingRect.shapeColor = "green";
     //fixedRect.shapeColor = "yellow";
     movingRect.velocityX = -1*movingRect.velocityX;
     movingRect.velocityY = -1*movingRect.velocityY;

  fixedRect.velocityX = -1*fixedRect.velocityX;
  fixedRect.velocityY = -1*fixedRect.velocityX;
  }
  /*else {
    movingRect.shapeColor = "black";
    fixedRect.shapeColor = "purple";
  }*/
  drawSprites();
}