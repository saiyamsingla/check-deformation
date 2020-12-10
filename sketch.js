var wall,car;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,99);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor=color(220);


  wall=createSprite(1500, 200, 60,height/2);
  wall.shapeColor=color(80,80,80);

  
}

function draw() {
  background(255,255,255);  

  if(isTouching(car,wall)){

    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation<180){
      car.shapeColor=color("red");
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color("yellow");
    }

    if(deformation<100){
      car.shapeColor=color("green");
    }
  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2   &&    
    object2.x - object1.x  < object2.width/2 + object1.width/2  && 
    object1.y - object2.y < object2.height/2 + object1.height/2 &&  
    object2.y - object1.y  < object2.height/2 + object1.height/2)
  {
    return true;
  }
  else
  {

    return false;
  }
}