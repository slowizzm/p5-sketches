class Cell {
  constructor(pos) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
  }

  display() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y)
    push();
    noFill();
    stroke(d);
    translate(this.pos.x - width / 2, this.pos.y - height / 2, -d);
    rotateY(radians(map(d, 0, height, 90, 0)));
    if (d <= 42) {
      push();
      fill(d, 200);
      box(33);
      pop();
    } else {
      box(42);
    }
    pop();
  }
}