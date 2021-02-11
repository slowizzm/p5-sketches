let ball = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);

  for (let i = 0; i < 3; i++) {
    ball[i] = new Ball();
  }
}

function draw() {
  background(33);

  ball[0].render(width * 0.25, height * 0.5);
  ball[1].render(width * 0.5, height * 0.5);
  ball[2].render(width * 0.75, height * 0.5);
}

function mousePressed() {
  for (let i = 0; i < ball.length; i++) {
    if (ball[i].onClick()) {
      ball[i].isClicked = !ball[i].isClicked;
    }
  }
}