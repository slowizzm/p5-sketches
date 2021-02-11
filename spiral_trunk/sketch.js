let elephant, e_trunk;
let eyes = [];

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  e_trunk = createSlider(-0.3, 0.3, 0.1, 0.01);
  e_trunk.position(0, height * 0.7);
  // e_leftEye = createSlider(13, 133, 13);
  // e_leftEye.position(0, height * 0.8);
  elephant = new Elephant(width * 0.6, height * 0.25);
  for (let i = 0; i < 2; i++) {
    eyes[i] = new Eyes(width, height, ((i + 1) * 170) - width * 0.365);
  }
}

function draw() {
  background(51);
  push();
  translate(-20, -130);
  for (let i = 0; i < eyes.length; i++) {
    eyes[i].render();
  }
  pop();
  elephant.render(e_trunk.value());
}

class Elephant {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.w = 80;

  }
  trunk(tVal) {
    push();
    translate(this.pos.x, this.pos.y);
    for (let i = 0; i < 80; i++) {
      stroke(80 - i);
      fill(131 - i);
      ellipse(0, 0, this.w, this.w);
      rotate(tVal);
      scale(0.98);
      translate(8, 12);
    }
    pop();
  }

  render(tVal) {
    this.trunk(tVal);
  }
}

class Eyes {
  constructor(w, h, offSetX) {
    this.offSetX = offSetX;
    this.size = 142;
    this.pos = createVector();
    this.res = createVector(w, h);
    this.target = createVector();
  }
  update() {
    this.target.x = mouseX;
    this.target.y = mouseY;
    this.pos.x += (this.target.x - this.pos.x) * 0.33;
    this.pos.y += (this.target.y - this.pos.y) * 0.33;

    return this;
  }

  display() {
    push();
    translate((width * 0.5) - this.offSetX, height * 0.3);
    fill(255);
    ellipse(width * -0.005, height * 0.005, this.size, this.size);
    fill(45);
    ellipse((this.pos.x - this.res.x * 0.5) * this.size / 3333, (this.pos.y - this.res.y * 0.5) * this.size / 3333, this.size * 0.5, this.size * 0.5);
    pop();

    return this;
  }

  render() {
    return this.update().display();
  }
}