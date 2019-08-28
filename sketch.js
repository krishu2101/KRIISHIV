var fixrect ,mrect;
function setup() {
  createCanvas(800,400);
 fixrect= createSprite(400, 200, 50, 50);
 mrect= createSprite(200, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  mrect.y=World.mouseY;
  mrect.x=World.mouseX;  
if(fixrect.x-mrect.x<fixrect.width/2+mrect.width/2&&
  mrect.x-fixrect.x<fixrect.width/2+mrect.width/2&&
  fixrect.y-mrect.y<fixrect.height/2+mrect.height/2&&
  mrect.y-fixrect.y<fixrect.height/2+mrect.height/2){
fixrect.shapeColor="red";
mrect.shapeColor="red";
}
else{
  fixrect.shapeColor="blue";
mrect.shapeColor="blue";
}
  drawSprites();
}