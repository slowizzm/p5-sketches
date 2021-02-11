function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS);
}

function draw() {
  background(220);

  rect(width * 0.5 - 10, height * 0.75, width * 0.5 + 10, constrain(mouseY, height * 0.2, height * 0.75))
}