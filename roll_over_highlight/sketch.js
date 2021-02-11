let pos = {};

function setup() {
  createCanvas(400, 400);

  pos.x = width * 0.5;
  pos.y = height * 0.5;
}

function draw() {
  background(3, 11, 33);

  //ternary operator - checks distance, invokes function if true
  if (dist(pos.x, pos.y, mouseX, mouseY) <= 100) highlight(pos);

  //draw dark ellipse
  fill(33);
  ellipse(pos.x, pos.y, 200);
}


//creates highlight
const highlight = pos => {
  this.pos = pos;
  for (let i = 0; i < 250; i += 5) {
    fill(i, 250 - i);
    ellipse(this.pos.x, this.pos.y, i);
  }
}