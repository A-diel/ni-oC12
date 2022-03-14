var nino, niñoImg; // AQUI ESTA EL ERROR! CAMBIA LA Ñ 


function preload(){
 ninoImg=loadAnimation("jake3.png","jake5.png"); // AQUI PUEDES AGREGAR TODAS LAS IMAGENES, JUSTO COMO LO HICISTE ESCRIBIENDO CADA UNA COMO ES 
 
}

function setup(){
  createCanvas(400,400);
nino=createSprite(200,200,20,50);  
nino.addAnimation("c",niñoImg); // AQUI TAMBIEN HAY QUE CAMBIAR LA Ñ 

}


  function draw() {
    background("black");
   drawSprites();
  }
 
