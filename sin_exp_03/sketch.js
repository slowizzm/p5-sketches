function setup() {
  createCanvas(window.innerWidth - 4, 400);
  angleMode(DEGREES);
}

function draw() {
  background(13, 17, 21);
  push();
  blendMode(ADD);
  translate(0, height / 2);
  stroke(`#fffafa`);
  for (let x = 0; x < width; x = x + 15) {
    let y = sin(x + frameCount) * 150;
    line(x, 0, x, y % 100, 255 - (x + y));
    ellipse(x, y % 100, frameCount % 10);
    ellipse(x, y, frameCount % 20);
  }
  pop();
}