let msk, mskClone, mskGraphic,
  w, h, s,
  scl = 0,
  canFill = false;

function setup() {
  createCanvas(400, 200);
  msk = createGraphics(width, height);
  mskGraphic = createGraphics(width, height);
  msk.rectMode(CENTER);
  rectMode(CENTER);

  w = width * 0.5;
  h = height * 0.5;
  s = 100;
}

function draw() {
  background(13,17,21);

  // used to frame masked shape
  stroke(233);
  strokeWeight(1);
  noFill();
  rect(w, h, s, s);

  maskedShape();
  colorShape();
}

const maskedShape = () => {
  msk.rect(w, h, 100, 100);
  mskGraphic.clear();
  mskGraphic.noStroke();
  mskGraphic.fill('#fffafa');
  mskGraphic.ellipse(w, h + (s * 1.1), scl);

  (mskClone = msk.get()).mask(mskGraphic.get());
  image(mskClone, 0, 0);
}

const colorShape = () => {
  if (canFill) {
    scl += 8;
  } else {
    scl -= 8;
  }

  if (scl <= 0) {
    scl = 0;
  } else if (scl >= 400) {
    scl = 400;
  }
}

const isRollover = () => {
  return (mouseX >= w - (s / 2) &&
    mouseX <= w + (s / 2) &&
    mouseY >= h - (s / 2) &&
    mouseY <= h + (s / 2))
}

function mousePressed() {
  isRollover() ? (canFill = !canFill) : null;
}