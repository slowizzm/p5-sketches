const txt = 'WAVEY',
  freq = 0.002,
  fs = 150;

let HALF_W,
  HALF_H,
  startX,
  step,
  amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 300, 100, 100, 1);
  HALF_W = windowWidth / 2;
  HALF_H = windowHeight / 2;
  textFont('Avenir');
  textSize(fs);
  textStyle(BOLD);

  step = 0;
  startX = HALF_W - textWidth(txt) / 1.5;
}

function getY(x) {
  return HALF_H / 2 + noise(step, x * freq) * amp;
}

function draw() {
  background(0, 10, 90, 1);
  fill(0, 10, 10, 1);


  step += 0.001;
  amp = 400;

  beginShape();
  vertex(0, height);
  for (let x = 0; x < width; x++) {
    vertex(x, getY(x));
  }
  vertex(width, getY(width));
  vertex(width, height);
  endShape(CLOSE);


  let x = startX;
  for (let i = 0; i < txt.length; i++) {
    let charW = textWidth(txt.charAt(i));
    x += charW / 1.3;
    let y = getY(x);

    let angle = atan2(getY(x - charW * 0.5) - getY(x + charW * 0.5), -fs) + PI;
    angle *= 2;
    push();
    translate(x, y);
    rotate(angle);
    translate(-x, -y);
    text(txt.charAt(i), x - charW * 0.5, y + 20);
    pop();
    x += charW * 0.5;
  }
}