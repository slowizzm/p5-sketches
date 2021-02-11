'use strict'

class Prey {
  constructor() {
    this.pos = createVector(random(width), random(20, height));
    this.vel = createVector(random(0.1, 2), 0);
    this.acc = createVector(0, 0);

    this.maxSpeed = 2;
    this.maxSteering = 0.5;
  }

  behaviors(predator) {
    this.flee(predator);

    return this;
  }

  applyForce(f) {
    this.acc.add(f);
  }


  flee(predator) {
    let desired = 0;
    let val = behaviorSelect.value();
    switch (val) {
      case 'Attract':
        desired = p5.Vector.sub(predator.pos, this.pos);
        break;
      case 'Repulse':
        desired = p5.Vector.sub(this.pos, predator.pos);
        break;
    }
    let distance = desired.mag();



    if (distance < 130) {
      desired.normalize();
      desired.mult(map(distance, 130, 0, 0, this.maxSpeed));

      let steer = p5.Vector.sub(desired, this.v);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
  }


  bounds() {
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed)
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.bounds();

    return this;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading())
    noStroke();
    fill(217);
    ellipse(5, 0, 15, 10);
    pop();

    return this;
  }

  render(predator) {
    return this.update().display().behaviors(predator);
  }
}