function setup() {
  createCanvas(400, 400);
  colorMode(HSL,360,1,1,1);
  rectMode(CENTER);
  background(int(random(360)),0.7,0.36,1);
}

function draw() {
  // clear();
  // if (mouseIsPressed) rect(width*0.5,height*0.5,90)
}

function mousePressed() {
  background(int(random(360)),0.7,0.36,1);
}

function mouseDragged() {
  background(int(random(360)),0.7,0.36,1);
}

function keyPressed() {
  background(int(random(360)),0.7,0.36,1);
}

function deviceMoved() {
  //do something
}