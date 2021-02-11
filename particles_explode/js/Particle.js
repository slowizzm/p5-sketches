class Particle {
  constructor(x, y) {
    this.size = random(8, 16);
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(2));
    this.acc = createVector();
    this.color = color(100, 130, random(180, 200), 150);
  }

  bounds() {
    if ((this.pos.x > width - this.size / 2) || (this.pos.x < this.size / 2)) {
      this.vel.y = this.vel.y;
      this.vel.x = -this.vel.x;
    }

    return this;

  }

  hitGround() {
    return (this.pos.y > height - this.size / 2);
  }

  move() {

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.y += 0.2; // gravity

    return this;
  }


  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

    return this;
  }

  render() {
    return this.display().bounds().move();
  }

  getInfo() {
    return {
      pos: createVector(this.pos.x, this.pos.y),
      vel: this.vel.y,
      sz: this.size,
      cl: this.color
    };
  }
}