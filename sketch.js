
var movingRect, fixedRect,dist,cal;
var fixedRect1
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400,200,80,30)
  fixedRect=createSprite(400,200,80,30)
  fixedRect1=createSprite(200,00,80,30)

}

function draw() {
  background("black");  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  //console.log(dist)
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
  fixedRect1.shapeColor="green"

  console.log(fixedRect.x - movingRect.x)
  //80
  console.log(movingRect.width/2 + fixedRect.width/2)

  //console.log(fixedRect.x - movingRect.x)


  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  else if(isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor = "blue";
  fixedRect1.shapeColor = "blue";
  }
  
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
  }
  drawSprites();
}  
