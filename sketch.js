var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);

  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor= "green";

  movingRect= createSprite(500,300,80,40);
  movingRect.shapeColor= "yellow";

  movingRect.debug= true;
  fixedRect.debug= true;


}

function draw() {
  background(0);
  console.log(movingRect.x-fixedRect.x);

  movingRect.x= mouseX;
  movingRect.y= mouseY;

  if(movingRect.x-fixedRect.x< movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2 ){
    movingRect.shapeColor= "red";
  }
  else{
    movingRect.shapeColor= "yellow";
  }

  drawSprites();
}