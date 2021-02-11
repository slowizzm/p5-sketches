let temp = -10;

function setup() {
  createCanvas(400, 600);
  colorMode(HSL, 360, 1, 1, 1);
}

function draw() {
  background(20, 0.1, 0.1, 1);
  thermometer();
}

function thermometer() {
  let mapTemp = map(temp, -10, 210, height * 0.7, height * 0.3)

  //outline of thermometer
  rectMode(CENTER);
  strokeWeight(5);
  stroke(200, 1, 0.7, 0.8);
  noFill();
  rect(width * 0.5, height * 0.5, 30, 270);

  //bulb fill
  fill(0, 0.9, 0.4, 1);
  ellipse(width * 0.5, height * 0.79, 100);

  //mercury fill
  stroke(0, 0.9, 0.4, 1);
  strokeWeight(25);
  strokeCap(PROJECT);
  line(width * 0.5, height * 0.7, width * 0.5, mapTemp);


  //temps
  noStroke();
  fill(200, 1, 0.7, 1)
  textSize(12);
  textAlign(RIGHT, CENTER);
  text('210', 260, 170);
  text('200', 260, 180);
  text('100', 260, 285);
  text('30', 260, 365);
  text('0', 260, 395);
  text('-10', 260, 405);

  //temp lines
  stroke(0, 0, 0, 1);
  strokeWeight(2);
  line(200, 170, 230, 170);
  line(200, 180, 230, 180);
  line(200, 285, 230, 285);
  line(200, 365, 230, 365);
  line(200, 395, 230, 395);
  line(200, 405, 230, 405);
}

// -10 - 210


function mousePressed(e) {
  console.log(e.clientX, e.clientY)
}