class Sqr {
  constructor(sw) {
    this.pos = createVector(width * 0.5, height * 0.5);
    this.size = 1;
    this.sw = sw;
    this.a = 255;
  }

  grow() {
    this.size++;

    return this;
  }

  display() {
    stroke(255, 250, 250, this.a -= 0.5);
    noFill();
    strokeWeight(this.sw);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.size, this.size);

    return this;
  }

  render() {
    return this.grow().display();
  }
}