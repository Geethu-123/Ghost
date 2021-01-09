var towerImg,doorImg,climberImg,ghostImg;
var tower;
var ghost;
var doorgroup,climbergroup;
var ghostsound;
function preload(){
towerImg=loadImage("tower.png");
doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
ghostImg=loadImage("ghost-standing.png");
ghostsound=loadSound("spooky.wav")
  
}
function setup(){
createCanvas(600,600);
tower=createSprite(300,300);
tower.addImage(towerImg);
tower.velocityY=1;
ghost=createSprite(200,200,50,50);
ghost.addImage(ghostImg);
ghost.scale=0.5;
doorgroup=new Group();
climbergroup=new Group();
ghostsound.loop();
}
function draw(){
background("black");
if(tower.y>400){
  tower.y=200;
}
if(keyDown("left_arrow")){
  ghost.x=ghost.x-3;
}
if(keyDown("right_arrow")){
  ghost.x=ghost.x+3;
}
if(keyDown("space")){
  ghost.velocityY=-10;
}
ghost.velocityY=ghost.velocityY+0.5; 
spawndoor();
if(climbergroup.isTouching(ghost)){
  ghost.velocityY=0;
}
drawSprites();
}
function spawndoor(){
  if(frameCount%250==0){
var door=createSprite(300,+127); 
door.addImage(doorImg);
door.velocityY=1;
var climber=createSprite(300,200); 
climber.addImage(climberImg);
climber.velocityY=1;
door.x=Math.round(random(120,400));
climber.x=door.x;  
door.lifetime=800;
climber.lifetime=800;
doorgroup.add(door);
climbergroup.add(climber);
ghost.depth=door.depth;
ghost.depth=ghost.depth+1;
  }
 
}