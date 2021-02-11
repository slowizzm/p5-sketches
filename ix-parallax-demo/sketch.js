let pos = {};

function setup() {
  createCanvas(window.innerWidth - 4, 400);
  noStroke();
}

function draw() {
  background(33);

  pos.foreground = map(mouseX, 0, width, width * 0.5 - 333, width * 0.5 + 333);
  pos.background = map(mouseX, 0, width, width * 0.5 - 133, width * 0.5 + 133);

  backgroundShape();
  foregroundShape();

  water();
}

function water() {
  fill(3, 3, 14, 133);
  rect(0, 250, width, 200);
}

function backgroundShape() {
  fill(143, 199, 227);
  rect(pos.background, 100, 100, 250, 250);
}

function foregroundShape() {
  beginShape();
  fill(242);
  vertex(pos.foreground + 100, 230);
  vertex(pos.foreground + 74, 269);
  vertex(pos.foreground + 100, 256);
  vertex(pos.foreground + 132, 278);
  endShape();
}