var bullet, wall;
var speed, weight,thickness;




function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight =  random(30,52);
  thickness = random(22,83)
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor= rgb(80,80,80);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  if(hasCollided(bullet, wall))
  {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0)
}
  }
  drawSprites();
}



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