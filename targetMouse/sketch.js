let x = 0;
let y = 0;
let xTarget = 0;
let yTarget = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  let deltaTime = 1.0 / 60.0;
  let k = 10.0;
  x = lerp(xTarget, x, exp(-k * deltaTime));
  y = lerp(yTarget, y, exp(-k * deltaTime));

  clear();
  
  ellipse(x, y, 50, 50);
}

function mousePressed() {
  xTarget = mouseX;
  yTarget = mouseY;
}

function mouseDragged() {
  xTarget = mouseX;
  yTarget = mouseY;
}