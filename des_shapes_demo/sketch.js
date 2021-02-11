let col;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  colorMode(HSL, 360, 1, 1, 1);
  col = color(random(200, 300), 0.5, 0.4, 1);
  background(col);
  drawShapes(col);
}


function mousePressed() {
  drawShapes(col);
}


function drawShapes(c) {
  console.log(c)
  background(c);
  let pos = {},
    res = {};

  spark({
    x: width * 0.25,
    y: height * 0.25
  }, {
    w: 50,
    h: 50
  }, random(30, 80), color(random(360), random(0.3, 1), random(0.6, 0.9), random(0.8, 1)));
  spark({
    x: width * 0.75,
    y: height * 0.25
  }, {
    w: 50,
    h: 50
  }, random(30, 80), color(random(360), random(0.3, 1), random(0.6, 0.9), random(0.8, 1)));
  spark({
    x: width * 0.25,
    y: height * 0.75
  }, {
    w: 50,
    h: 50
  }, random(30, 80), color(random(360), random(0.3, 1), random(0.6, 0.9), random(0.8, 1)));
  spark({
    x: width * 0.75,
    y: height * 0.75
  }, {
    w: 50,
    h: 50
  }, random(30, 80), color(random(360), random(0.3, 1), random(0.6, 0.9), random(0.8, 1)));
}


function spark(pos, res, d, c) { //position, resolution, diistance, color
  fill(c);
  stroke(c);

  // draw center
  rect(pos.x, pos.y, res.w, res.h);

  // draw spokes
  rect(pos.x - d, pos.y, res.w / 3, res.h / 3);
  line(pos.x - d, pos.y, pos.x, pos.y);

  rect(pos.x + d, pos.y, res.w / 3, res.h / 3);
  line(pos.x + d, pos.y, pos.x, pos.y);

  rect(pos.x, pos.y - d, res.w / 3, res.h / 3);
  line(pos.x, pos.y - d, pos.x, pos.y);

  rect(pos.x, pos.y + d, res.w / 3, res.h / 3);
  line(pos.x, pos.y + d, pos.x, pos.y);
}