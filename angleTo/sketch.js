let flashLight, ball;

function setup() {
  createCanvas(windowWidth, windowHeight);

  flashlight = new Flashlight(createVector(width * 0.5, height * 0.5));
  ball = new Ball(createVector(width * 0.5, height * 0.2));
}

function draw() {
  background('#030711');

  flashlight.render();
  ball.render();
}