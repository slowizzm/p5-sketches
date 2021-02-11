const polyPoints = [{
    x: 56,
    y: 116
  },
  {
    x: 148,
    y: 220
  },
  {
    x: 200,
    y: 123
  },
  {
    x: 242,
    y: 282
  },
  {
    x: 297,
    y: 126
  },
  {
    x: 367,
    y: 218
  }
];

function setup() {
  createCanvas(500, 500);
  background('#f2f2f2');

  drawCustomShape(polyPoints);
}


function drawCustomShape(points) {
  beginShape();
  noStroke();
  fill('#343434');
  for (let i = 0; i < Object.keys(points).length; i++) {
    vertex(points[i].x, points[i].y);
  }
  endShape(CLOSE);
}

function mousePressed() {
  console.log(mouseX, mouseY)
}