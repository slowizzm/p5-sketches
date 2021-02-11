let x = 0,
  y = 0,
  spacing = 15;

function setup() {
  createCanvas(400, 400);
  background('#131721');
  frameRate(12);
  stroke('#f2f2f2');

}

function draw() {
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }


  x += spacing;


  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}