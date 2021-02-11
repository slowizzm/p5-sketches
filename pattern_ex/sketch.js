let cellSize = 100;

const col_palette = ['#EFEEDD', '#B2EDE7', '#45BDB9', '#586C8D', '#78CEB2'],


  //array containing functions to create different shapes for pattern
  shapes = [
    (pos, res, col) => {
      push();
      translate(pos.x, pos.y);
      fill(col.col1);
      rect(0, 0, res.w, res.h);
      fill(col.col2);
      ellipse(0, 0, res.w / 2);
      pop();
    },
    (pos, res, col) => {
      push();
      translate(pos.x, pos.y);
      fill(col.col1);
      rect(0, 0, res.w, res.h, 0, cellSize, cellSize, 0);
      fill(col.col2);
      ellipse(0, 0, res.w / 2);
      pop();
    }
  ];



function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
  background('#427683')

  //create grid 
  for (let y = 0; y < width + cellSize; y += cellSize) {
    for (let x = 0; x < width + cellSize; x += cellSize) {
      //get random index in array
      shapes[int(random(shapes.length))]({
        x: x,
        y: y
      }, {
        w: cellSize,
        h: cellSize
      }, {
        col1: random(col_palette),
        col2: random(col_palette)
      });
    }
  }
}