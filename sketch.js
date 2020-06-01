function setup() {
  createCanvas(1200,800);
 movingRect=createSprite(600,400,50,80)
 movingRect.shapeColor="green"
 fixedRect=createSprite(500,500,80,50)
fixedRect.shapeColor="green"
movingRect.debug=true;
fixedRect.debug=true;

}

function draw() {
  background(25,200,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
    movingRect.shapeColor = "yellow" 
    fixedRect.shapeColor="yellow"
   }
   else{
     movingRect.shapeColor="red"
     fixedRect.shapeColor="red"
   }

  

  drawSprites();
}