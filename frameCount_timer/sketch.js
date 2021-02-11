const timer = {
  start: 7,
  current: 7,
  canReset: false
};

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  background(220);
  textSize(100);
  text(timer.current, width / 2, height / 2);

  if (frameCount % 60 == 0 && timer.current > 0) timer.current--;


  if (timer.current == 0) {
    textSize(20);
    text("click to restart", width / 2, height * 0.7);
    timer.canReset = true;
  }
}

function mouseClicked() {
  if (timer.canReset) timer.current = timer.start;
  timer.canReset = false;
}