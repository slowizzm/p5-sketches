function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let d = map(mouseX, 0, width, 1, 10);
  strokeOutside(d, 100, 100, 100, 10, 200, 3);
}

function strokeOutside(w, x, y, scl, br, f, s) {
  fill(f);
  stroke(s);
  rect(x, x, scl, scl, br);
  noStroke();
  strokeWeight(w);
  rect(x, y, scl, scl, br);
}