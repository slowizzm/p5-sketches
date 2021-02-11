let originPoint;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  originPoint = new OriginPoint(width * 0.5, height * 0.5);
  rectMode(CENTER);
}

function draw() {
  background(220);

  originPoint.display();
}