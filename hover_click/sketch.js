function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  let pos = createVector(width / 2, height / 2);
  let rad = 200;

  ellipse(pos.x, pos.y, rad);
  if (isHovering(createVector(pos.x, pos.y), rad) && mouseIsPressed) {
    fill('red');
  } else if (isHovering(createVector(pos.x, pos.y), rad)) {
    fill('green');
  } else {
    fill('blue');
  }
}

function isHovering(pos, rad) {
  return (dist(mouseX, mouseY, pos.x, pos.y) <= rad / 2);
}