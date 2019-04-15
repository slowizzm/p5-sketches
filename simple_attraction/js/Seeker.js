function Seeker(_x, _y) {
	this.pos = createVector(_x, _y);
	this.vel = createVector();
	this.acc = createVector();
	this.maxspeed = 1.3;
	this.maxforce = 0.1;

	this.seek = function(_target) {
		// Step 1 the desired velocity
		let desired = _target.sub(this.pos);
		let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
		if (d < 133) {
			desired.setMag(this.maxspeed * -3);
		} else {
			desired.setMag(this.maxspeed);
		}

		// Step 2 calculate the steering
		let steer = desired.sub(this.vel);
		steer.limit(this.maxforce);

		this.applyForce(steer);
	}

	this.applyForce = function(_force) {
		this.acc.add(_force);
	}

	// Method to update position
	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.display = function() {
		fill(255);
		noStroke();
		ellipse(this.pos.x, this.pos.y, 20);
	}
}