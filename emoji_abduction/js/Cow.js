class Cow {
  constructor() {
    this.pos = createVector(floor(random(width * 0.025, width * 0.975)), floor(random(height * 0.75, height * 0.97)));
    this.originalPos = {
      x: this.pos.x,
      y: this.pos.y
    };
    this.vel = createVector();
    this.acc = createVector();
    this.scl = 0;
    this.emoji = String.fromCodePoint(0x1F404);
    this.isCow = true;
    this.shadow = 0;
  }

  display() {
    if (this.isCaptured()) {
      this.scl = 13;
      this.emoji = String.fromCodePoint(0x1F47D);
      this.isCow = false;
    }
    this.scl = map(this.pos.y, 0, height, 3, 42);
    //shadow
    textSize(this.scl);
    noStroke();
    push();
    this.shadow = map(this.pos.y, 0, 255, 0, 5);
    fill(1, 1, 1, this.shadow);
    rect(this.originalPos.x - this.scl / 2, this.originalPos.y + this.scl / 2, this.scl, this.scl / 4, 13);
    pop();
    text(this.emoji, this.pos.x, this.pos.y);

    return this;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    return this;
  }

  isCaptured() {
    return (dist(ufo.pos.x, ufo.pos.y, this.pos.x, this.pos.y) < ufo.scl / 4);
  }

  inRange() {
    return (dist(ufo.pos.x, ufo.pos.y, this.pos.x, this.pos.y) < 300);
  }

  isHovered() {
    return (ufo.pos.x >= this.pos.x - ((this.scl / 2) + 25) &&
      ufo.pos.x <= this.pos.x + ((this.scl / 2) + 25) &&
      ufo.pos.y < this.pos.y)
  }

  tractorBeam() {
    if (this.inRange() && this.isHovered() && this.isCow) {
      this.vel.y = -1;
    } else {
      if (this.pos.y < this.originalPos.y) {
        this.vel.y = 1;
      } else {
        this.vel.y = 0;
      }
    }
    return this;
  }

  render() {
    return this.update().display().tractorBeam();
  }
}