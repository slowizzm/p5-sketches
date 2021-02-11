class DraggableObject {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, -2);
    this.acc = createVector(0, 0);
    this.size = size;
    this.maxspeed = 0;
    this.maxforce = 0.001;
  }

  update(v) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(v);
    this.maxspeed = snapBack;

  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);

    (desired <= this.size) ? this.vel.mult(0): this.vel.mult(1);

    this.applyForce(steer);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();

    if (d < height) {
      let m = map(d, 0, height, 0, this.maxspeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxspeed);
    }

    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxspeed);

    (desired <= this.size) ? this.vel.mult(0): this.vel.mult(1);

    this.applyForce(steer);
  }

  display() {
    (drag) ? fill(100, 200, 100): fill(200, 100, 100);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  edges() {
    if (this.pos.y <= 0 || this.pos.y >= height) {
      this.pos.y = mouseY;
      this.vel.y *= -1;
    }
  }
}