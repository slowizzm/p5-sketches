function setup() {
  createCanvas(400, 400);
  textFont('Cedarville Cursive');
  textSize(33);
  noStroke();
  fill(33);
}

function draw() {
  background(220);
  push();
  translate(width * 0.5, height * 0.5);
  rotate(radians(map(mouseX, 0, width, 0, 90)));
  text('Hello Font', -80, 0);
  pop();
}