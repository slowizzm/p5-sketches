class Drop {
  constructor() {
    this.pos = createVector(random(width / 2 - 400, width / 2 + 400), random(height));
    this.a = 0;
  }

  update() {
    this.speed = random(5, 15);
    this.gravity = 0.85;
    this.pos.y = this.pos.y + this.speed * this.gravity;

    this.a = (map(this.pos.y, 0, height, 0, 0.4));

    return this;

  }
  display() {
    noStroke();
    fill(180, 80, 80, this.a);
    ellipse(this.pos.x, this.pos.y, 2, 10);

    return this;
  }

  bounds() {
    if (this.pos.y > height / 2 + 30) {
      this.pos.y = random(0, -height);
    }

    return this;
  }

  render() {
    return this.update().bounds().display();
  }
}