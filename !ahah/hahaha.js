var Hahaha = function(x, y, m, img) {
  this.pos = createVector(x,y);
  this.vel = createVector(0,-7);
  this.acc = createVector(0,0);
  this.mass = m;
  this.img = img;
  
  //applying the force and taking mass into account
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
    image(this.img, this.pos.x, this.pos.y, (this.mass*4)-map(this.pos.y,0,height,33,0), (this.mass*4)-map(this.pos.y,0,height,33,0));
		// image(this.img, this.pos.x, this.pos.y, this.mass*4, this.mass*4);
  }
}