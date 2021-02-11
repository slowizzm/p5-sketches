class Obs extends Izzm {
  constructor(_x, _y, _w, _h, _r) {
    super(_x, _y, _w, _h);
    this.r = _r;
    this.pos = createVector();
    this.angle = 0;


    this.friction = 0.2;
    this.restitution = 0.6;
    this.body.isStatic = true;
  }

  update() {
    this.pos = this.body.position;
    this.angle = this.body.angle;

    return this;
  }

  display() {
    push();
    noStroke();
    fill(33, 60);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    ellipse(3, 3, this.r);
    pop();
    push();
    noStroke();
    fill(217);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    ellipse(0, 0, this.r);
    pop();

    return this;
  }

  render() {
    return this.update().display();
  }
}