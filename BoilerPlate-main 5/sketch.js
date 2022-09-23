var runnerImg
var backgroundImg
var logImg
var rockImg
var appleImg
var starImg
var ground
var PLAY = 1
var END = 0;
var gameState = PLAY;
var gameOver, restart;

function preload(){
runnerImg  = loadImage("runner-man.png");
backgroundImg = loadImage("roads&plains.jpeg")
rockImg = loadImage("rock-1.webp")
logImg = loadImage("Log.png")
appleImg = loadImage("apple.png")
starImg = loadImage("gold-star.png")
}

function setup() 
{
  createCanvas(windowWidth,500);
  ground = createSprite(720,100,width,40)
  ground.addImage(backgroundImg)
  ground.scale = 3.5
  ground.velocityX = -(4)

  runner = createSprite(85,400,100,100)
  runner.addImage(runnerImg)
  runner.scale = 0.1

  invisibleGround = createSprite(200,490,400,10)
 invisibleGround.visible = false;
 
  obstaclesGroup = new Group();
}

function draw() 
{
  background(51);

  if(gameState===PLAY){
    if (keyDown("space") && runner.y >= 159){
       runner.velocityY = -12;
    }

  runner.velocityY = runner.velocityY + 0.8
  
  if(ground.x < 215){
    ground.x = ground.width/2
  }
}

  spawnObstacles();
  
  runner.collide(invisibleGround);

  drawSprites(); 


}

function spawnObstacles(){
  if(frameCount % 150 === 0){
  var obstacle = createSprite(width,450,10,40)
  obstacle.velocityX = -(4)
  
  var rand = Math.round(random(1,2))
  switch(rand) {
    case 1: obstacle.addImage(rockImg);
    obstacle.scale = 0.5
            break;
    case 2: obstacle.addImage(logImg);
    obstacle.scale = 0.2
            break;
    default: break;
  }

  
  obstacle.lifetime = 300;
obstaclesGroup.add(obstacle);
}

  
}

