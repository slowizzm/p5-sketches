function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  drawOtter();
}

function drawOtter() {
  push();
  translate(width * 0.2, height * 0.2);
  push();
  rectMode(CENTER);
  fill(167, 142, 129);
  noStroke();
  translate(107, 107);
  rotate(radians(-45));
  ellipse(0, -55, 80, 80);
  ellipse(0, 0, 60, 125);
  ellipse(30, 50, 40, 125);
  ellipse(-30, 50, 40, 125);
  ellipse(0, 90, 30, 135);
  ellipse(0, -80, 90, 80);
  ellipse(-35, -105, 13, 15);
  ellipse(35, -105, 13, 15);
  fill(202, 184, 172);
  ellipse(0, -60, 90, 35);
  pop();

  push();
  scale(0.75);
  translate(40, 90);
  rotate(radians(-20));
  noFill();
  stroke(20);
  strokeWeight(3);
  arc(0, 0, 80, 80, 0, 1.0025);
  pop();

  push();
  scale(0.75);
  translate(90, 40);
  rotate(radians(50));
  noFill();
  stroke(20);
  strokeWeight(3);
  arc(0, 0, 80, 80, 0, 1.0025);
  pop();

  push();
  translate(107, 107);
  rotate(radians(-45));
  fill(41, 47, 51);
  ellipse(-20, -80, 13, 13);
  ellipse(20, -80, 13, 13);
  ellipse(0, -70, 23, 13);
  pop();


  push();
  translate(5, 5);
  fill(132, 102, 89);
  noStroke();
  beginShape();
  curveVertex(67, 71);
  curveVertex(47, 101);
  curveVertex(54, 127);
  curveVertex(77, 138);
  curveVertex(100, 127);
  curveVertex(89, 106);
  curveVertex(67, 108);
  curveVertex(47, 101);
  curveVertex(8, 70);
  endShape();

  beginShape();
  curveVertex(68, 49);
  curveVertex(102, 45);
  curveVertex(130, 52);
  curveVertex(138, 72);
  curveVertex(128, 97);
  curveVertex(107, 93);
  curveVertex(108, 71);
  curveVertex(102, 45);
  curveVertex(76, 2);
  endShape();
  pop();

  push();
  fill(202, 184, 172);
  noStroke();
  beginShape();
  curveVertex(67, 71);
  curveVertex(47, 101);
  curveVertex(54, 127);
  curveVertex(77, 138);
  curveVertex(100, 127);
  curveVertex(89, 106);
  curveVertex(67, 108);
  curveVertex(47, 101);
  curveVertex(8, 70);
  endShape();


  beginShape();
  curveVertex(68, 49);
  curveVertex(102, 45);
  curveVertex(130, 52);
  curveVertex(138, 72);
  curveVertex(128, 97);
  curveVertex(107, 93);
  curveVertex(108, 71);
  curveVertex(102, 45);
  curveVertex(76, 2);
  endShape();
  pop();

  push();
  translate(70, 105);
  rotate(radians(170));
  noFill();
  stroke(20);
  strokeWeight(3);
  arc(0, 0, 80, 80, 0, 1.0025);
  arc(-5, -5, 80, 80, 0, 1.0025);
  arc(0, 0, 80, 80, 0, 1.0025);
  pop();

  push();
  translate(110, 70);
  rotate(radians(-140));
  noFill();
  stroke(20);
  strokeWeight(3);
  arc(0, 0, 80, 80, 0, 1.0025);
  arc(-5, -5, 80, 80, 0, 1.0025);
  arc(0, 0, 80, 80, 0, 1.0025);
  pop();



  push();
  fill(132, 102, 89);
  noStroke();
  beginShape();
  curveVertex(98, 125);
  curveVertex(123, 152);
  curveVertex(139, 154);
  curveVertex(153, 146);
  curveVertex(154, 129);
  curveVertex(166, 143);
  curveVertex(173, 151);
  curveVertex(180, 160);
  curveVertex(164, 152);
  curveVertex(156, 156);
  curveVertex(152, 164);
  curveVertex(157, 175);
  curveVertex(145, 169);
  curveVertex(136, 162);
  curveVertex(135, 159);
  curveVertex(123, 152);
  curveVertex(101, 149);
  endShape();
  pop();
  pop();
}