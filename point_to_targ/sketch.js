let pos = [],
  arrows = [];

const NUM_ARROWS = 1000;

function setup() {
  createCanvas(displayWidth, displayHeight);

  for (let i = 0; i < NUM_ARROWS; i++) {
    pos[i] = createVector(random(width), random(height));
    arrows.push(new Arrow(pos[i], 42));
  }
}

function draw() {
  background(51);

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].display(atan2(mouseY - pos[i].y, mouseX - pos[i].x));
  }
}