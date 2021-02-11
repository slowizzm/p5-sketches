// used in Nick Cage Meme Adventure https://editor.p5js.org/slow_izzm/sketches/eJEk-7sBW

let cageFace;

function preload() {
  cageFace = loadImage('assets/images/cage-face.png');
}

function setup() {
  createCanvas(480, 280);

  cageFace = new CageFace(createVector(width / 2, height / 2),
    createVector(0.7, 0.9),
    cageFace,
    createVector(cageFace.width / 3, cageFace.height / 3));
}

function draw() {
  // background(220);

  cageFace.run();
}

class CageFace {
  constructor(pos, spd, img, res) {
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(spd.x, spd.y);
    this.acc = createVector();
    this.res = createVector(res.x, res.y);
    this.img = img;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    return this;
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y, this.res.x, this.res.y);
    return this;
  }

  bounds() {
    if (this.pos.x <= 0 + (this.res.x / 2) || this.pos.x >= width - (this.res.x / 2)) {
      this.vel.x *= -1;
    }

    if (this.pos.y <= 0 + (this.res.y / 2) || this.pos.y >= height - (this.res.y / 2)) {
      this.vel.y *= -1;
    }

    return this;
  }

  run() {
    return this.update().bounds().display();
  }
}