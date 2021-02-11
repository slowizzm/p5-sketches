class BallClass {
  constructor(pos, diam) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };

    this.diam = diam;
  }

  display() {
    noStroke();
    fill('blue');
    ellipse(this.pos.x, this.pos.y, this.diam);
  }
}