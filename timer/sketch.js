let bg_col, blink = false;

const timer = {
  hide: 750,
  show: 2000,
  start: null,
  stop: null,
  running: false
};

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);
  bg_col = color(280, 0.7, 0.1, 1);
  startLoop(timer.delay);
}

function draw() {
  background(bg_col);
  push();
  fill(color(295, 0.7, 0.1, 0.6));
  rectMode(CENTER);
  rect(width * 0.5, height * 0.5, 300, 300, 11);
  pop();

  timerState();
  if (!blink) {
    noStroke();
    fill(130, 0.7, 0.5, 1);
    ellipse(width * 0.5, height * 0.5, 100);
  }
}