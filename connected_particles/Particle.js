class Particle {
  constructor(r) {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.fromAngle(random(TWO_PI));
    this.acc = createVector();
    this.r = r;
    this.vel.setMag(5);
    this.switch = false;
    this.lineDist = 0;
    ellipseMode(CENTER);
  }

  connect(_len) {
    this.lineDist = _len;
    for (let i = 0; i < particles.length; i++) {
      let d = dist(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y);
      if (d < this.lineDist) {
        if (this.switch == false) {
          this.switch = true;
        }
        stroke(255);
        line(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y);
      } else {
        if (this.switch == true)
          this.switch = false;
      }
    }
    
    return this;
  }

  collision() {
    for (let i = 0; i < particles.length; i++) {
      let d = dist(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y);
      if (d >= this.lineDist - 0.3 && d <= this.lineDist + 0.3) {
        this.vel.mult(-0.9);
      }
    }
    
    return this;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    return this;
  }

  edges() {
    if (this.pos.x <= 0 || this.pos.x >= width) {
      this.vel.x *= -1;
    }

    if (this.pos.y <= 0 || this.pos.y >= height) {
      this.vel.y *= -1;
    }
    
    return this;

  }

  display() {
    ellipse(this.pos.x, this.pos.y, this.r);
    
    return this;
  }

  render(_len) {
    return this.update().collision().edges().connect(_len).display();
  }
}