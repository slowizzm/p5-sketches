function customShape(scl) {
  beginShape();
  vertex(7 * scl, 7 * scl);
  vertex(3 * scl, -5 * scl);
  vertex(3 * scl, 3 * scl);
  vertex(-5 * scl, 3 * scl);
  endShape(CLOSE);
}

function diamond(scl) {
  beginShape();
  vertex(0 * scl, -5 * scl);
  vertex(3 * scl, 0 * scl);
  vertex(0 * scl, 5 * scl);
  vertex(-3 * scl, 0 * scl);
  endShape(CLOSE);
}



function heart() {
  const R = 15;
  const xh = angle => R / 15.0 * 16 * Math.pow(Math.sin(angle), 3);
  const yh = p => R / 15.0 * (-13 * Math.cos(p) + 5 * Math.cos(2 * p) + 2 * Math.cos(3 * p) + Math.cos(4 * p));
  beginShape();
  let n = 200;
  for (let i = 0; i < n; i++) {
    let x = xh(TAU * i / n);
    let y = yh(TAU * i / n);
    vertex(x, y);
  }
  endShape();
}