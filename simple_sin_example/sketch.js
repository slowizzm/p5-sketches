let angle = 0, scalar = 10, speed = 13, newXPosition;

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(33);
  
  newXPosition = scalar * cos(radians(angle));

  fill(100, 202, 153);
  push();
  translate(width*0.5,height*0.5);
  ellipse(newXPosition, 0, 33, 33);
  pop();

  

  angle += speed;
}