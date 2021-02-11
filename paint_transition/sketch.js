let y = -5,
  scl = 0.025,
  spd = 0.05;

const levels = [0.45, 0.4, 0.3, 0.2, 0.1];

function setup() {
  colorMode(HSL, 360, 1, 1, 1);
  createCanvas(400, 400);
  noStroke();
  background(280, 0.1, 0.1, 1);
}

const generate = _ => {
  for (let x = 0; x < width; x++) {
    let n = noise(x * scl, height * scl + y / 16);
    fill(0, 1, 0.5, 1);
    ellipse(x, y * 8 + n * 32, 4);
  }
  y += spd;
}

const checkIfGenerationIsDone = _ => {
  return (y > height * 0.125);
}

function draw() {
  if (!checkIfGenerationIsDone()) {
    generate();
  }
}