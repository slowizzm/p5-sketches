class Light {
  constructor() {
    this.pos = createVector(width * 0.5, height * 0.425);
    this.theta = 0;
    this.dir = 1;

    this.isGlow = false;

    this.bulbPos = createVector(0, 350);
    rectMode(CENTER);
  }

  swing() {
    translate(width * 0.5, 0);
    rotate(sin(frameCount / 17) * this.dir / 9);
    return this;
  }

  fixture() {
    push();
    stroke(0, 30, 5, 1);
    strokeWeight(7);
    fill(0, 70, 20, 1);
    line(0, 0, 0, 295);
    pop();

    push();
    noStroke();
    fill(0, 10, 10, 1);
    rect(0, 300, 25, 5, 10);
    pop();
    return this;
  }

  bulb() {
    push();
    stroke(0, 90, 90, 0.1);
    fill(0, 70, 90, 0.02);
    rect(0, 310, 10, 20, 10);
    pop();

    push();
    stroke(0, 90, 90, 0.2);
    noFill();
    arc(7, 345, 50, 50, -7, HALF_PI - 7);
    pop();

    push();
    stroke(0, 90, 90, 0.1);
    fill(0, 70, 90, 0.02);
    ellipse(0, 350, 100);
    pop();
    return this;
  }

  display() {
    return this.bulb().fixture();
  }

  glow() {
    if (this.isGlow) {

      for (let i = 110; i > 0; i--) {
        push();
        noStroke();
        fill(0, 100, 100, map(i, 0.1, 0, 0.0000035, 0));
        ellipse(0, 350, i * 2);
        pop();

        push();
        noStroke();
        ellipse(0, 350, 100);
        pop();
      }
    }

    return this;
  }

  rollover() {
    let d = dist(this.pos.x, this.pos.y, mouseX, mouseY);

    return (d <= 100);
  }

  hand() {
    if (this.rollover()) {
      cursor('pointer');
    } else {
      cursor();
    }

    return this;
  }

  render() {
    return this.swing().glow().display().hand();
  }
}