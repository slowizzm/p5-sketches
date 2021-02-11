class Flashlight {
  constructor(pos) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.angle = null;
    this.emoji = String.fromCodePoint(0x1F526);
    textSize(50);
  }

  display() {
    push();
    noStroke();
    fill(220, 180);
    translate(this.pos.x, this.pos.y);
    this.angle = atan2(ball.pos.x - this.pos.x, ball.pos.y - this.pos.y);
    rotate(this.angle * -1);
    quad(-10, 50, 10, 50, 25, dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y), -25, dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y));
    push();
    rotate(radians(90));
    text(this.emoji, -10, 18);
    pop();
    pop();

    return this;
  }

  render() {
    return this.display();
  }
}