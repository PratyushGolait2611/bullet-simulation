// Creating variables
var bullet, wall;
var speed, weight,thickness;

function setup() {
  //Creating background
  createCanvas(1600,400);
  
  // To get random speed
  speed = random(223,321);
  
  //To get random weight
  weight =  random(30,52);
  
  //To get random thickness
  thickness = random(22,83)
  
  // Creating a bullet sprite
  bullet = createSprite(50, 200, 50, 50);
  
  // Creating a wall sprite
  wall = createSprite(1200, 200, 60, height/2);
  
  // Giving color to the  wall
  wall.shapeColor= rgb(80,80,80);
}

function draw() {
  // Background
  background(255,255,255); 
  
  //Giving x-axis velocity to bullet
  bullet.velocityX=speed;
  
  // Function that detects collision between bullet and wall
  if(hasCollided(bullet, wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
    }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
    }
  }
  
  drawSprites();
}


// Collision Function
function hasCollided(lbullet, lwall)
{
bullet.RightEdge=lbullet.x+lbullet.width;
wall.LeftEdge=lwall.x;
if(bullet.RightEdge>=wall.LeftEdge)
{
return true
}
return false
}
