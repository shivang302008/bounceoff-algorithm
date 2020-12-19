var fixedRect, movingRect, car ,wall ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  car = createSprite(200,200,20,50);
  car.velocityX = 4;
  car.shapeColor = "green";

  wall = createSprite(1000,200,50,100);
  wall.shapeColor = "brown";
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //if (isTouching(car,wall)){
  //car.velocityX = 0;
  //car.shapeColor = "brown";
  //}
  
  bounceOff(car,wall);
  
  drawSprites();
}



//function isTouching(object1,object2){
//if (object1.x - object2.x < object2.width/2 + object1.width/2
  //&& object2.x - object1.x < object2.width/2 + object1.width/2
  //&& object1.y - object2.y < object2.height/2 + object1.height/2
  //&& object2.y - object1.y < object2.height/2 + object1.height/2) {
  
    //return true;
//}
//else {
  //return false;
//}}

