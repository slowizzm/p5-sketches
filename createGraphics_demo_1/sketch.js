let graphics;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1)
  graphics = createGraphics(width, height);
  graphics.imageMode(CENTER);

  graphics.background('#131721');
  graphics.noFill();
  graphics.stroke('#f2f2f2');
  graphics.strokeWeight(3);
  graphics.push();
  graphics.rect(0, 0, 100, 100);
  graphics.pop();
}

function draw() {
  background('#131721');

  translate(width * 0.5, height * 0.5);
  rotate(frameCount % 360);
  image(graphics, 0, 0);
}