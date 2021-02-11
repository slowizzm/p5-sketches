const cells = [];

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4, WEBGL);
  stroke('#fffafa');
  noFill();
  let idx = 0;

  for (let cols = 42; cols < width - 42; cols += 42) {
    for (let rows = 42; rows < height - 42; rows += 42) {
      cells[idx++] = new Cell({
        x: cols,
        y: rows
      }, 0);
    }
  }
}

function draw() {
  background(33, 37, 41);

  for (let i = 0; i < cells.length; i++) {
    cells[i].display();
  }
}