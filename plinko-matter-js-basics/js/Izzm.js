class Izzm {
  constructor(_x, _y, _w, _h) {
    _x += random(-5, 5);
    this.pos = createVector();
    let options = {
      friction: 0.01,
      restitution: 1,
      mass: 0.9
    }
    this.body = Bodies.rectangle(_x, _y, _w, _h, options);

    this.res = createVector(_w, _h);
    rectMode(CENTER);
    World.add(world, this.body);
  }

  display() {
    this.pos = this.body.position;
    const angle = this.body.angle;

    push();
    noStroke();
    fill(33, 60)
    translate(this.pos.x, this.pos.y);
    rect(1.5, 1.5, this.res.x, this.res.y, 7);
    pop();

    push();
    noStroke();
    fill(33)
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    rect(0, 0, this.res.x, this.res.y, 7);
    pop();

    return this;
  }

  destroy() {
    return (this.pos.y > height + this.res.y);
  }

  remove() {
    World.remove(world, this.body);
  }
}