let img,
  scl = 13;

const lines = [];

function preload() {
  img = loadImage('images/izzm.png');
}

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);

  let prox = 20,
    row = ceil(width / prox) + 1,
    col = ceil(height / prox) + 1;

  for (let y = 0; y < col; y++) {
    for (let x = 0; x < row; x++) {
      lines.push({
        x: prox * y,
        y: prox * x
      });
    }
  }
}

function draw() {
  background(255);
  noFill();
  stroke(51);
  strokeWeight(1);
  for (let i = lines.length - 1; i >= 0; i--) {
    let h = calcVec(lines[i].x - mouseX, lines[i].y - mouseY);
    rect(
      lines[i].x,
      lines[i].y,
      lines[i].x + scl * cos(h.heading()),
      lines[i].y + scl * sin(h.heading()));
  }
  push();
  fill(51);
  noStroke();
  rect(0, 0, width, height * 0.3);
  rect(0, height * 0.7, width, height);
  pop();

  imageMode(CENTER);
  image(img, width * 0.5, height * 0.5, 1920 * 0.5, 1080 * 0.5);
}


const calcVec = (x, y) => {
  return createVector(y - x, -x - y);
}

function windowResized() {
  resizeCanvas(windowWidth - 4, windowHeight - 4);
}