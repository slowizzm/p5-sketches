let inc = 0.0,
  sig = 0.0,
  amp = 333.0,
  samples = 333,
  x1;

function setup() {
  createCanvas(windowWidth * 0.95, windowHeight * 0.95);
  ellipseMode(CENTER);
  inc = TWO_PI / samples;
  noFill();
}

function draw() {
  background(13, 17, 21);
  translate(0, height * 0.5);
  for (let i = 0; i < samples; i++) {
    stroke(sig, 155 - i, 255 - i, i * 13);
    x1 = i * 7;
    sig = amp * abs(sin(i * inc));
    ellipse(x1, 0, 333, sig);
  }
  inc += 0.0005;
}