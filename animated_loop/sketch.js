const obj = {
  x: -100,
  scl: 3,
  spd: 1.01
}

let timeStarted = 0;
let spd = 2;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  noFill();
}

function draw() {
  background('#fffafa');

  let timeLapsed = millis() - timeStarted;

  animatedTimeline(timeLapsed);

  animatedObject();

  resetAnimation(timeLapsed);
}