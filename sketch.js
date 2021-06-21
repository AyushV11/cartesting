var car
var wall
var speed
var backGround,backGroundImg


function preload(){
  backGroundImg = loadImage("Background.png") 
  whitecarImg = loadImage("whiteCar.png")
  redcarImg = loadAnimation("redCar.png")
  bluecarImg = loadAnimation("blueCar.png")
  greencarImg = loadAnimation("greenCar.png")
}

function setup() {
  createCanvas(800,400);
  car = createSprite(700, 200, 50, 50);
  car.addImage("whitecar",whitecarImg)
  car.scale=0.1
  wall = createSprite(30,200,30,150)
  backGround = createSprite(400,250,1000,1000)
  backGround.addImage(backGroundImg);
  car.addAnimation("redcar",redcarImg)
  car.addAnimation("bluecar",bluecarImg)
  car.addAnimation("greencar",greencarImg)
 
}

function draw() {
  background("black"); 
  drawSprites();
  backGround.depth=car.depth
  car.depth=car.depth+1
  speed=Math.round(random(1,3))
 
  switch(speed){
   case 1 :  
     car.velocityX = -3
     if(car.x-wall.x<=wall.width/2+car.width/2 ){
       car.changeAnimation("redcar",redcarImg)
       car.x=700
       car.y=200
       car.collide(wall)
       break;
     }
           

   case 2 : 
     car.velocityX = -6
     if(car.x-wall.x<=wall.width/2+car.width/2 ){
       car.changeAnimation("bluecar",bluecarImg)
       car.x=700
       car.y=200
       break;  
    }
                    

   case 3 :  
     car.velocityX = -10
     if(car.x-wall.x<=wall.width/2+car.width/2 ){
       car.changeAnimation("greencar",greencarImg)
       car.x=700
       car.y=200
       break;
    }
          
        
 } 

} 
