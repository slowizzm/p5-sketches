let c1, c2;

function setup() {
  createCanvas(windowWidth - 4, 800);
  c1 = color(3, 7, 11);
  c2 = color(200, 10, 1, 3);
}

function draw() {
  background(13, 33, 51);
  push();
  colorMode(HSL, 360, 1, 1, 1);
  fill(300, 1, 0.8, 1);
  translate(width * 0.5, height * 0.38);
  rotate(radians(157.5));
  arc(0, 0, 460, 460, 0, PI + QUARTER_PI, CHORD);
  pop();
  drawSmallWaves();
  setGradient(0, 0, width, height, c1, c2);
}

const drawSmallWaves = _ => {
  strokeWeight(1);
  colorMode(HSL, 360, 1, 1, 1);
  for (let i = 0; i < 32; i++) {
    stroke(55, 70, sin(i / 20) * 80, (i / 100) + 0.1);
    fill(300, 1, 0.8, 1);
    line(width * 0.3 + i * 6 + sin(frameCount / 10 - i) * 10, height * 0.5 + i * 10, width * 0.7 - i * 6 - sin(frameCount / 10 - i) * 10, height * 0.5 + i * 10);
  }
  colorMode(RGB, 255);
}

const setGradient = (x, y, w, h, c1, c2) => {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 0.9);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}