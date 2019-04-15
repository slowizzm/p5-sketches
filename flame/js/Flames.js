class Flame {
  constructor() {
    this.reset();
  }

  reset() {
    this.startRadius = rand(25, 51);
    this.radius = this.startRadius;
    this.x = width / 2 + (rand(0, 6) - 3);
    this.y = 250;
    this.vx = 0;
    this.vy = 0;
    this.hue = rand(globalTick - hueRange, globalTick + hueRange);
    this.saturation = rand(50, 100);
    this.lightness = rand(20, 70);
    this.startAlpha = rand(1, 10) / 100;
    this.alpha = this.startAlpha;
    this.decayRate = 0.1;
    this.startLife = 7;
    this.life = this.startLife;
    this.lineWidth = rand(1, 3);
  }

  update() {
    this.vx += (rand(0, 200) - 100) / 1500;
    this.vy -= this.life / 50;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha = this.startAlpha * (this.life / this.startLife);
    this.radius = this.startRadius * (this.life / this.startLife);
    this.life -= this.decayRate;
    if (
      this.x > width + this.radius ||
      this.x < -this.radius ||
      this.y > height + this.radius ||
      this.y < -this.radius ||
      this.life <= this.decayRate
    ) {
      this.reset();
    }
  }

  render() {
    push();
    blendMode(ADD);
    fill(this.hue, this.saturation, this.lightness, this.alpha);
    stroke(this.hue, this.saturation, this.lightness, this.alpha);
    strokeWeight(this.lineWidth);
    ellipse(this.x, this.y, this.radius);
    pop();
  }
}