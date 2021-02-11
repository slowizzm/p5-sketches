let ob1 = {
  x: 100,
  y: 100,
  r: 33
}

let ob2 = {
  x: 100,
  y: 200,
  r: 33
}

let ripples = [];
let dots = [];

function setup() {
  createCanvas(400, 400);

  ripples[0] = new Ripple(ob1.x, ob1.y, ob1.r, color(200, 100, 100), true);
  dots[0] = new Dots(ob2.x, ob2.y, ob2.r, color(100, 100, 200), false);
  // dots[1] = new Dots(300, 20, ob2.r, color(100, 100, 200), false);
}

function draw() {
  background(220);

  for (let i = 0; i < ripples.length; i++) {
    ripples[i].render();
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].render();
  }
}


class Ripple {
  constructor(_x, _y, _r, _c, g) {
    this.pos = {
      x: _x,
      y: _y
    }
    this.r = _r;
    this.col = _c;
    this.alpha = 255;
    this.rippleLife = 1;
    this.shouldGrow = g;
  }

  checkIfHitDot() {
    for (let i = 0; i < dots.length; i++) {
      if (dist(this.pos.x, this.pos.y, dots[i].pos.x, dots[i].pos.y) < this.r + dots[i].r && this.alpha > 0) {
        dots[i].isHit = true;
      } else if (this.alpha <= 0) {
        dots[i].isHit = false;
      }
    }
    return this;
  }

  update() {
    this.alpha -= this.rippleLife;
    if (this.shouldGrow) this.r += 2;

    return this;
  }

  display() {
    push();
    noFill();
    stroke(200, 100, 100, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.r);
    pop();

    return this;
  }

  render() {
    return this.update().checkIfHitDot().display();
  }
}

class Dots {
  constructor(_x, _y, _r, _c) {
    this.pos = {
      x: _x,
      y: _y
    }
    this.r = _r;
    this.col = _c;
    this.osc = 0;
    this.speed = 0;
    this.scalar = 7;
    this.newXPos = 0;
    this.isHit = false;

    this.min = 0;
    this.max = 3;
  }

  update() {

    if (this.isHit) {
      this.speed += 0.075;
    } else {
      this.speed -= 0.01;
    }

    if (this.speed <= this.min) {
      this.speed = this.min;
    } else if (this.speed >= this.max) {
      this.speed = this.max;
    }

    this.osc += this.speed;
    this.newXPos = this.scalar * cos(radians(this.osc));

    return this;
  }

  checkRipplePos() {
    if (mouseIsPressed) {
      if (mouseX < this.pos.x - (this.r / 2) && mouseY < this.pos.y - (this.r / 2)) {
        console.log('top left');
      } else if (mouseX > this.pos.x - (this.r / 2) && mouseY < this.pos.y - (this.r / 2)) {
        console.log('top right');
      } else if (mouseX < this.pos.x - (this.r / 2) && mouseY > this.pos.y - (this.r / 2)) {
        console.log('bottom left');
      } else if (mouseX > this.pos.x - (this.r / 2) && mouseY > this.pos.y - (this.r / 2)) {
        console.log('bottom right');
      }
    }

    return this;
  }

  display() {
    fill(this.col);
    translate(this.pos.x, 0);
    ellipse(this.newXPos, this.pos.y, this.r);

    return this;
  }

  render() {
    return this.update().display().checkRipplePos();
  }
}