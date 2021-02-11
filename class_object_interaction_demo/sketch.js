const myButtons = [],
  num_buttons = 3,
  buttonXLocations = [100, 300, 500];


function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < num_buttons; i++) {
    myButtons[i] = new MyButton({
      x: buttonXLocations[i],
      y: height * 0.5
    }, 80);
  }
}


function draw() {
  background('#f2f2f2');

  for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].display();
  }
}


function mousePressed() {
  for (let i = 0; i < myButtons.length; i++) {
    if (myButtons[i].checkHover()) {
      myButtons[i].pressed = !myButtons[i].pressed;
      myButtons[i].updateColor();
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
    this.c = '#13172130';
    this.pressed = false;
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

  updateColor() {
    if (this.pressed) {
      this.c = '#131721';
    } else {
      this.c = '#13172130';
    }
  }
}