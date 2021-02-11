const dots = [],
  num_dots = 42,
  dotXLocations = [100, 300, 500];


function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < num_dots; i++) {
    dots[i] = new MyButton({
      x: random(width),
      y: random(height)
    }, 42);
  }
}


function draw() {
  background('#f2f2f2');

  for (let i = 0; i < dots.length; i++) {
    dots[i].display();
  }
}


function mousePressed() {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].checkHover()) {
      dots.splice(i, 1);
    }
  }
}


class MyButton {
  constructor(pos, r) {
    this.pos = {
      x: pos.x,
      y: pos.y
    }

    this.r = r;
    this.c = '#131721';
  }

  display() {
    push();
    stroke('#f2f2f2');
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r);
    pop();
  }

  checkHover() {
    return ((dist(mouseX, mouseY, this.pos.x, this.pos.y) < this.r / 2));
  }
}