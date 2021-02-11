class Bokeh {
  constructor(_x, _y, s, o) {
    this.pos = {
      x: _x,
      y: _y
    };
    this.col = ceil(random(3));
    this.g = random(133, 233);
    this.b = random(133, 233);
    this.s = s;
    this.o = o;
  }

  display() {
    fill(233, this.g, this.b, this.o);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.s);
    filter(BLUR, 2);
  }
}