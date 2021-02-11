const pads = [];

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
      pads[idx++].init();
    }
  }
}

function draw() {
  background(51);

  for (let i = 0; i < pads.length; i++) {
    pads[i].run();
  }
}

