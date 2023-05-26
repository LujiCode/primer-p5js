//Basada en la obra de El Lissitzky."Golpead a los blancos con la cuña roja (Клином красным бей белых!)" Rusia, 1920.

//-------Variables globales

var radioMayor = 60;
var x = radioMayor;
var velocidad = 5;
var direccion = 1;
var anguloRotacion = 270;

let anchoPincel = 5;

function setup() {
  createCanvas(500, 500);
  background(255);
  //frameRate (10);
}

function draw() {
  //console.log("x: " + mouseX + "Y:" + mouseY);
  //console.log(frameCount);

  //puntos
  strokeWeight(10);
  point(50, 50);
  point(63, 70);
  point(30, 85);

  //linea
  strokeWeight(3);
  line(80, 1000, 300, 1);

  //rectangulo
  fill("#9E9E9E");
  rect(40, 200, 90, 90);

  //lineas
  line(60, 300, 60, 190);
  line(65, 300, 65, 190);
  line(150, 20, 89, 400);

  //elipses
  ellipse(190, 120, 50, 70);
  strokeWeight(8);
  ellipse(250, 200, 50, 50);
  fill(250);
  ellipse(280, 350, 150, 150);

  //lineas
  fill("#C62828");
  line(600, 0, 300, 400);
  strokeWeight(3);
  line(595, 0, 290, 395);

  //triangulo CAPA 1
  push();

  x += velocidad; // Aumenta el valor de x

  translate(x, height / 1);
  rotate(radians(anguloRotacion));

  //translate(250, 250);
  //scale(2.0);
  //rotate(radians(10));

  fill("#C62828");
  triangle(264, 329, 128, 70, 64, 122);

  pop();

  push();
  //--------MOUSE PRESIONADO
  if (mouseIsPressed) {
    stroke(255, 255, 0);
    strokeWeight(anchoPincel);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  pop();

  //Pincel
  /*noStroke();
  fill (255 ,255 ,0);
  ellipse (mouseX, mouseY, 20, 20);*/
}

document.oncontextmenu = function () {
  return false;
};