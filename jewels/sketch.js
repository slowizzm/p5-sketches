let jewels = [];

function setup() {
  createCanvas(480, 480);
  jewels[0] = new Jewel(createVector(width * 0.5, height * 0.35),
    1,
    200,
    createVector(3, 3));
  jewels[1] = new Jewel(createVector(width * 0.405, height * 0.5),
    0.8,
    200,
    createVector(3, 3));
  jewels[2] = new Jewel(createVector(width * 0.595, height * 0.475),
    0.6,
    200,
    createVector(3, 3));
}

function draw() {
  background(220);
  let jewelHue = 200;

  jewels.forEach(jewel => {
    jewel.render();
  });
}

class Jewel {
  constructor(pos, scl, col, hov) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.scl = scl;
    this.col = col;
    this.motion = {
      angle: 0,
      sclr: hov.x,
      spd: hov.y,
      newY: 0
    }
  }

  hover() {
    this.motion.newY = this.motion.sclr * cos(radians(this.motion.angle));
    this.motion.angle += this.motion.spd;
    return this;
  }

  base() {
    push();
    translate(0, this.motion.newY);
    fill(this.col - 50, 54, 71);
    quad(this.pos.x + (35 * this.scl), this.pos.y + (10 * this.scl),
      this.pos.x, this.pos.y - (83 * this.scl),
      this.pos.x - (35 * this.scl), this.pos.y + (10 * this.scl),
      this.pos.x, this.pos.y + (83 * this.scl));
    pop();

    return this;
  }

  plates() {
    push();
    translate(0, this.motion.newY);
    fill(this.col, 68, 80);
    triangle(this.pos.x - (35 * this.scl), this.pos.y + (10 * this.scl),
      this.pos.x - (10 * this.scl), this.pos.y + (20 * this.scl),
      this.pos.x, this.pos.y - (83 * this.scl));

    fill(this.col, 75, 75);
    triangle(this.pos.x - (35 * this.scl), this.pos.y + (10 * this.scl),
      this.pos.x - (10 * this.scl), this.pos.y + (20 * this.scl),
      this.pos.x, this.pos.y + (83 * this.scl));

    fill(this.col - 40, 46, 64);
    triangle(this.pos.x + (35 * this.scl), this.pos.y + (10 * this.scl),
      this.pos.x - (10 * this.scl), this.pos.y + (20 * this.scl),
      this.pos.x, this.pos.y + (83 * this.scl));
    pop();

    return this;
  }

  render() {
    return this.base().plates().hover();
  }
}