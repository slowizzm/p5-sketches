const grid = [];

let cols,
  rows;

function setup() {
  createCanvas(800, 800);
  background(51);

  cols = width / 5;
  rows = height / 20;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      grid.push(new Grid({
        x: col,
        y: row
      }));
    }
  }

  for (let i = 0; i < grid.length; i++) {
    grid[i].drawGrid();
  }
}