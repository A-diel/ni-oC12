var nino, niñoImg;


function preload(){
 ninoImg=loadAnimation("jake3.png","jake5.png");
 
}

function setup(){
  createCanvas(400,400);
nino=createSprite(200,200,20,50);  
nino.addAnimation("c",niñoImg);

}


  function draw() {
    background("black");
   drawSprites();
  }
 
