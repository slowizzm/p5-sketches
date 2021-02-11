const bokehs = [],
  NUM_BOKEHS = 13;

function setup() {
  createCanvas(375, 667);
  background(3, 13, 33);
  noStroke();
  for (let i = 0; i < NUM_BOKEHS; i++) {
    bokehs[i] = new Bokeh(random(-33, width + 33), random(-33, height + 33), random(33, 333), random(33, 113));
  }
  noLoop();
}

function draw() {
  background(3, 7, 1);
  for (let i = 0; i < NUM_BOKEHS; i++) {
    bokehs[i].display();
  }

  drawOverlay();

  drawName();
}

function drawOverlay() {
  push();
  noStroke();
  fill(33, 33);
  rect(0, 0, width, height);
  pop();
}

function drawName() {
  fill(250);
  push();
  textAlign(CENTER);
  textSize(83);
  text("I", width * 0.66, height * 0.55);
  text("Z", width * 0.676, height * 0.55);
  text("Z", width * 0.775, height * 0.55);
  text("M", width * 0.894, height * 0.55);
  pop();
  push();
  textSize(33);
  text("1", width * 0.61, height * 0.6);
  text("9", width * 0.715, height * 0.6);
  text("8", width * 0.819, height * 0.6);
  text("3", width * 0.927, height * 0.6);
  pop();
}