class Flame {
  constructor() {
    this.reset();
  }

  reset() {
    this.startRadius = random(33, 42);
    this.radius = this.startRadius;
    this.pos = createVector(width / 2 + (random(0, 6) - 3), 250);
    this.vel = createVector();
    this.hue = random(globalTick - hueRange, globalTick + hueRange);
    this.saturation = random(50, 100);
    this.lightness = random(20, 70);
    this.startAlpha = random(1, 10) / 100;
    this.alpha = this.startAlpha;
    this.decayRate = 0.1;
    this.startLife = 7;
    this.life = this.startLife;
    this.lineWidth = random(1, 3);
  }

  update() {
    this.vel.x += (random(0, 200) - 100) / 1500;
    this.vel.y -= this.life / 50;
    this.pos.add(this.vel);
    this.alpha = this.startAlpha * (this.life / this.startLife);
    this.radius = this.startRadius * (this.life / this.startLife);
    this.life -= this.decayRate;
    if (
      this.pos.x > width + this.radius ||
      this.pos.x < -this.radius ||
      this.pos.y > height + this.radius ||
      this.pos.y < -this.radius ||
      this.life <= this.decayRate
    ) {
      this.reset();
    }

    return this;
  }

  display() {
    push();
    blendMode(ADD);
    fill((globalTick % 360) / 33, this.saturation, this.lightness, this.alpha);
    stroke(this.hue, this.saturation, this.lightness, this.alpha);
    strokeWeight(this.lineWidth);
    ellipse(this.pos.x, this.pos.y, this.radius);
    pop();

    return this;
  }

  render() {
    return this.update().display();
  }
}