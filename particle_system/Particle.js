class Particle {
	constructor(_pos) {
		this.acc = createVector(0, 0);
		this.vel = createVector(random(1, 1), random(-1, 0));
		this.pos = _pos.copy();
		this.lifespan = 120.0;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.pos.y += sin(radians(this.pos.y + this.pos.x));
		this.lifespan -= 1;
		
		return this;
	}

	display() {
		stroke(200, this.lifespan);
		strokeWeight();
		fill(217, this.lifespan);
		ellipse(this.pos.x, this.pos.y, 15, 20);
		
		return this;
	}

	isDead() {
		if (this.lifespan < 0) {
			return true;
		} else {
			return false;
		}
	}

	run() {
		return this.update().display();
	}
}