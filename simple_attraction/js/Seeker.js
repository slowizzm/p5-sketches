class Seeker {
  constructor(x, y) {
	this.pos = createVector(x, y);
	this.vel = createVector();
	this.acc = createVector();
	this.maxspeed = 1.3;
	this.maxforce = 0.1;
  }
	seek(target) {
		// Step 1 the desired velocity
		let desired = target.sub(this.pos);
		let d = dist(seeked.pos.x, seeked.pos.y, this.pos.x, this.pos.y);
      
		(d < 133) ? desired.setMag(this.maxspeed * -3) : desired.setMag(this.maxspeed);

		// Step 2 calculate the steering
		let steer = desired.sub(this.vel);
		steer.limit(this.maxforce);

		this.applyForce(steer);
      
      return this;
	}

	applyForce(force) {
		this.acc.add(force);
	}

	// Method to update position
	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
      
      return this;
	}

	display() {
		fill(255);
		noStroke();
		ellipse(this.pos.x, this.pos.y, 20);
      
      return this;
	}
  
    render(target) {
      return this.update().seek(target).display();
    }
}