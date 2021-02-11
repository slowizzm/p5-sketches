//WIP

let drink;
const bubbles = [],
      NUM_BUBBLES = 33;

function setup() {
  createCanvas(375, 667);

  drink = new Drink();

  for (let i = 0; i < NUM_BUBBLES; i++) {
    bubbles[i] = new Bubble(width * 0.56 + random(-7, 7), height * 0.553 + random(-7, 7), ceil(random(7)));
  }
}

function draw() {
  background(255,254,224);
  drink.render();

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].render();
  }

  face();
}

function face() {
  push();
  translate(0, 37);
  noFill();
  stroke(33, 200);
  strokeWeight(2);
  beginShape();
  vertex(width * 0.85, height * 0.1);
  bezierVertex(width * 0.75, height * 0.1, width * 0.65, height * 0.18, width * 0.7, height * 0.23);
  bezierVertex(width * 0.7, height * 0.23, width * 0.63, height * 0.28, width * 0.7, height * 0.29);
  bezierVertex(width * 0.67, height * 0.29, width * 0.61, height * 0.35, width * 0.78, height * 0.37);
  endShape();

  ellipse(width * 0.73, height * 0.2, 7, 7);
  pop();
}