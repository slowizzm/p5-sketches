let size = 300,
  num;


let pos = {
    x: 200,
    y: 200
  },
  col = {
    r: 255,
    g: 255,
    b: 100
  },
  inc = {
    scl: 50,
    col: 30
  };



function setup() {
  createCanvas(400, 400);

  stroke('orange');
  strokeWeight(10);

  num = 5;
  createCustomShape();
}

function createCustomShape() {
  for (let i = 0; i <= num; i++) {
    fill(col.r, col.g, col.b);
    ellipse(pos.x, pos.y, size);
    col.r -= inc.col;
    size -= inc.scl;
  }
}