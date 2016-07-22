function Drip() {
  this.pos = createVector(random(width), random(height));

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.vel = createVector((random(1, 40) - mouse) * (1 / random(0, 666)), (random(1, 60) - mouseY) * (1 / random(0, 666)));
    this.acc = createVector(1 / random(0, 666), 1 / random(0, 666));

    this.pos.add(this.vel);

    if (this.pos.x > width) {
      this.pos.x = random(width - random(100, 300), width);

    }
    if (this.pos.y > height) {
      this.pos.y = random(height - random(3, 83), height);

    }
    if (this.pos.x < 0) {
      this.pos.x = random(100, 333);

    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }

  this.display = function() {
    var bleed = map(mouseY, 0, height, 255, 0);

    noStroke();
    fill(3, 0, 0, 67);
    ellipse(this.pos.x, this.pos.y, random(3, 7), random(3, 7));
    noStroke();
    fill(33, 3, 3, bleed);
    ellipse(this.pos.x, this.pos.y, random(3, 7), random(3, 7));
  }
}

function Particle(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = 3;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }

  this.display = function() {
    for (var k = 0; k < particle.length; k++) {
      fill(233, 233, 233, 3);
      ellipse(this.pos.x + random(width), this.pos.y + random(height), 42, 42);
    }
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }

  }

}