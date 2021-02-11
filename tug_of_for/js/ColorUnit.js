class ColorUnit {
  constructor(pos, s, col) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };

    this.s = s;
    this.c = color(col.x, col.y, col.z);
  }

  display() {
    push();
    fill(this.c);
    rect(this.pos.x, this.pos.y, this.s, this.s);
    pop();
  }
}