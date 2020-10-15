var fixedRect, object2;
var movingRect,object1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  object2 = createSprite(400, 800,80,30);
  object2.shapeColor = "green";
  object2.debug = true;

  object2.velocityY = -5;
  fixedRect.velocityY = +5;

  movingRect = createSprite(200,300,50,50);
  object1 = createSprite(400,400,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  bounceOff(object2,fixedRect);
  drawSprites();
}
