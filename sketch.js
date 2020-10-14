var fixedRect, movingRect;
var circle,square,square2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  circle = createSprite(200,200,30,30);
  circle.shapeColor = "purple";

  square = createSprite(300,200,40,40);
  square.shapeColor = "green";

  square2 = createSprite(400,300,40,40);
  square2.shapeColor = "red";

  circle.velocityX = 2;
  square.velocityX = -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bouncing(circle,square);


 if (isTouching(square,movingRect)) {
   
movingRect.shapeColor = "yellow";
square.shapeColor = "yellow";
 } else {

movingRect.shapeColor = "blue";
square.shapeColor = "blue";
   
}

  drawSprites();
}

