var Particle = function(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(3, 0);
  this.acc = createVector(3, 0);
  this.mass = 33;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.display = function() {
    stroke(255, 44);
      fill(random(155), random(33), random(55));
      rect(this.pos.x, this.pos.y, random(33), random(13));

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }

    if (this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
    }
  }
}