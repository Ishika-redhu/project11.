var ship,shipimage,sea,seaimage;
function preload(){
shipImg=loadAnimation("ship-1.png","ship-2.png");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(600,300);
  sea=createSprite(10,200,600,10)
  sea.addImage("sea",seaImage);
  sea.scale=0.3;
  ship=createSprite(70,180,20,20);
 ship.addAnimation("ship",shipImg);
 ship.scale=0.2;
 
  
}

function draw() {
  background("blue");
 if(sea.x < 0 ){
  sea.x = sea.width/8;
 }
 sea.velocityX=-5;

  drawSprites();
}