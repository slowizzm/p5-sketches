class MyShape {
  constructor(a, r, func, spd, d1, d2) {
    this.angle = a * count;
    count++;
    this.r = r;
    this.pos = {
      x: (Math.cos(this.angle) * this.r),
      y: (Math.sin(this.angle) * this.r)
    }

    this.a = 0;
    this.func = func;
    this.spd = spd;
    this.d1 = d1;
    this.d2 = d2
  }

  display() {
    push();
    translate(width / 2, height / 2);
    rotate(this.a * this.d1);
    translate(this.pos.x, this.pos.y);
    rotate((-this.a * 2) * this.d2);
    noStroke();
    fill(200, 200, 120, 200);
    this.func();
    pop();
    this.a += this.spd;
  }
}