function setup() {
  createCanvas(600, 600);

  textAlign(CENTER);
  noCursor();
}

function draw() {
  clear();
  background('#131721');

  fill(255);
  noStroke();
  let rad = 100;
  let ft = 70;
  let off = 100;

  textSize(ft);
  text('Found Me', width / 2, height / 2 + ft / 4);

  beginShape();
  vertex(off, off);
  vertex(width - off, off);
  vertex(width - off, height - off);
  vertex(off, height - off);

  beginContour();

  for (let i = 0; i < TWO_PI; i += 0.05) {
    let x = mouseX + rad * sin(i);
    let y = mouseY + rad * cos(i);
    if (x > width - off) {
      x = width - off;
    }
    if (x < off) {
      x = off;
    }
    if (y > height - off) {
      y = height - off;
    }
    if (y < off) {
      y = off;
    }
    vertex(x, y);
  }

  endContour(CLOSE);
  endShape(CLOSE);

}