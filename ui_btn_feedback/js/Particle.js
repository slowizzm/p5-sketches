class Particle {
  constructor(pos) {
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.h = random(280, 300);
    this.s = 100;
    this.l = random(40, 60);
    this.max = random(2, 24);
    this.d = random(this.max / 2, this.max * 2);
    this.alpha = map(this.d, 0, this.max * 2, 0, 100);
    this.fillAlpha = random(this.alpha);
  }

  lifespan() {
    return this.alpha <= 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.vel.limit(map(noise(frameCount / 100), 0, 1, 0, 33));
    this.alpha -= 1;
    this.d = map(this.alpha, 0, 100, 0, this.max);

    return this;
  }

  display() {
    stroke(this.h, this.s, this.l, this.alpha);
    fill(this.h, this.s - 30, this.l, this.fillAlpha);
    ellipse(this.pos.x, this.pos.y, this.d);

    return this;
  }

  render() {
    return this.update().display();
  }
}