//using Polygon Point Collision Detection by Jeremy Thompson
// http://www.jeffreythompson.org/collision-detection/poly-point.php

const polyPoints = [{
    x: 445,
    y: 240
  },
  {
    x: 350,
    y: 410
  },
  {
    x: 150,
    y: 410
  },
  {
    x: 45,
    y: 240
  },
  {
    x: 150,
    y: 60
  },
  {
    x: 240,
    y: 225
  }
];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#f8f8f8');

  drawCustomShape();
  drawCollidingShape();

  (hit()) ? fill('#131721'): noFill();
}

//is colliding shape in custom shape
function hit() {
  return polyPoint(polyPoints, mouseX, mouseY);
}

//shape being collided with
function drawCustomShape() {
  beginShape();
  strokeJoin(ROUND);
  strokeWeight(10)
  for (let i = 0; i < Object.keys(polyPoints).length; i++) {
    vertex(polyPoints[i].x, polyPoints[i].y);
  }
  endShape(CLOSE);
}

//colliding shape
function drawCollidingShape() {
  push();
  fill('#f8f8f8');
  ellipse(mouseX, mouseY, 10, 10);
  pop();
}



// POLYGON/POINT
function polyPoint(vertices, px, py) {
  let collision = false;

  // go through each of the vertices, plus
  // the next vertex in the list
  let next = 0;
  for (let current = 0; current < vertices.length; current++) {

    // get next vertex in list
    // if we've hit the end, wrap around to 0
    next = current + 1;
    if (next == vertices.length) next = 0;

    // get the Vectors at our current position
    // this makes our if statement a little cleaner
    let vc = vertices[current]; // c for "current"
    let vn = vertices[next]; // n for "next"

    // compare position, flip 'collision' variable
    // back and forth
    if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
      (px < (vn.x - vc.x) * (py - vc.y) / (vn.y - vc.y) + vc.x)) {
      collision = !collision;
    }
  }
  return collision;
}