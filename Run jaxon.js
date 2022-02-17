var path,boy, leftBoundary,rightBoundary;
var pathImage,boyImage;

function preload(){
  pathImage= loadImage("path.png");
  boyImage = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
path=createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 4;

boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("BoyRunning",boyImage);
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  if(keyDown(RIGHT_ARROW)){
   boy.velocityX=4;
  }
  if(keyDown(LEFT_ARROW)){
    boy.velocityX=-4;
   }
  
   if(path.y > 400 ){
    path.y = length/2;
  }
  
  edges= createEdgeSprites();
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  drawSprites();
}
