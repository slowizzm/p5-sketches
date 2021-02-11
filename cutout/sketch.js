setup = _ => {
  createCanvas(400, 400);
  background('#f2f2f2');

  translate(width / 2, height / 2);
  fill('#131721');
  noStroke();
  beginShape();
  // Exterior part of shape, clockwise winding
  vertex(-110, -100);
  vertex(100, -95);
  vertex(95, 100);
  vertex(-100, 100);
  // Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(-10, -25);
  vertex(-25, 25);
  vertex(25, 30);
  vertex(25, -25);
  endContour();
  endShape(CLOSE);
}