var backImage,backgr;

var mario,mario_running,mario_collided;

var ground,backImage,groundImage,brickImg;

function preload(){
  backImage=loadImage("bg.png");
   
  mario_running = loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");
  mario_collided = loadAnimation("collided.png");
  
  groundImage = loadImage("ground2.png");
  
  
}
function setup() {
  createCanvas(600, 400);
  
  
 // backgr=createSprite(600,200,600,400) ;
  backgr=createSprite(0,200,600,400) ;
  backgr.addImage(backImage);
  //backgr.scale=1;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  mario = createSprite(50,315,20,50);
  
  mario.addAnimation("running", mario_running);
  mario.addAnimation("collided", mario_collided);
  
  ground = createSprite(400,375,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX=-4;
  ground.visible=false;
}

function draw() {
  background(255);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(backgr.x < 100){
    backgr.x=backgr.width/2;
  }
 
  mario.collide(ground);
  drawSprites();
}