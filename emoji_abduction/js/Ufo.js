class Ufo {
  constructor() {
    this.pos = {
      x: width * 0.1,
      y: height * 0.1
    }
    this.emoji = String.fromCodePoint(0x1F6F8);
    this.scl = null;
  }

  update() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      this.pos.x = mouseX;
      this.pos.y = constrain(mouseY, 0, height * 0.5);
      this.scl = map(this.pos.y, 0, height, 50, 250);
    }

    return this;
  }

  display() {
    push();
    textSize(this.scl);
    text(this.emoji, this.pos.x, this.pos.y);
    pop();

    return this;
  }

  render() {
    return this.update().display();
  }
}