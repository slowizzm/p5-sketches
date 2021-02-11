let graphics;

function setup() {
  createCanvas(400, 400);
  graphics = createGraphics(140, 140);
  angleMode(DEGREES);
}

function draw() {
  background('#8c8cfa');
  graphics.background('#8ce68c');
  graphics.strokeWeight(0.5);
  graphics.line(0, 0, graphics.width, graphics.height);
  graphics.stroke('#131721');
  graphics.fill('#f2ff6f');
  graphics.ellipse(0, 0, 100, 100);
  graphics.ellipse(width * 0.175, height * 0.175, 50, 50);

  push();
  translate(width / 2, height / 2);
  rotate(map(mouseX, 0, width, 0, 360));
  image(graphics, 0, 0);
  pop();
}