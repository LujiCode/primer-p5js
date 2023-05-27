function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
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

  fill("#C62828");
  triangle(264, 329, 128, 70, 64, 122);
}