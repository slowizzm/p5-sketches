let mothra;

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
  noStroke();
  mothra = new Mothra();
  frameRate(12);
}

function draw() {
  background(13,17,21);
  mothra.render();
}