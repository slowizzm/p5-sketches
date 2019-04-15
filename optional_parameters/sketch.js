function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(51);
  
  col(233,222);
  rect(width * 0.5, height * 0.5, 40, 40);
}

function col(_r = 0, _g = 0, _b = 0) {
  fill(_r, _g, _b);
}