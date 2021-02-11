const timer = {
  delay: 3000,
  start: null,
  stop: null
};

function setup() {
  createCanvas(400, 400);
  textFont('Avenir');
  textAlign(CENTER, CENTER);
  textSize(42);
  fill(220);
}

function draw() {
  background(51);
  (runTimer()) ? ellipse(200, 200, 100, 100): text('click here', width * 0.5, height * 0.5);
}

function mousePressed() {
  timer.start = int(millis());
  timer.stop = timer.start + timer.delay;
}

function runTimer() {
  return timer.stop > int(millis());
}