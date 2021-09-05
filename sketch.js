var Runner, Runner_running, edges;
var pathImg,path;


function preload(){
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  Runner = createSprite(200,200,180,110);
  Runner.addAnimation("running",Runner_running);
  edges = creatEdgeSprite();
}

  Runner.scale = 2.5;
  Runner.x = 100


  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  



function draw() {
  background(0);

  path.velocityY=+2
  console.log(path.x)

  if(path.y > 400){
    path.y = height/2;
  }

 console.log(Runner.y)

  Runner.velocityY = Runner.velocityY -5;
 
 Runner.collide(path)
 drawSprites();
}
