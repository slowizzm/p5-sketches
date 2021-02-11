const pads = [];
let pixelRes = 10;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  let idx = 0;
  for (let cols = 90; cols < width - 90; cols += 60) {
    for (let rows = 90; rows < height - 90; rows += 60) {
      pads[idx] = new Pad({
        x: cols,
        y: rows
      }, 33);
      idx++;
    }
  }
}

function draw() {
  background(51);

  for (let i = 0; i < pads.length; i++) {
    pads[i].display();
  }
}


class Pad {
  constructor(pos, s) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.size = s;
  }

  display() {
    push();
    fill(217);
    rect(this.pos.x, this.pos.y, this.size, this.size);
    pop();

    return this;
  }
}