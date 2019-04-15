class Izzm {
	constructor(_pos, _NUM_IZZM) {
		this.pos = createVector(_pos.x, _pos.y);
		this.vel = createVector(1.3, 1.3);
		this.acc = createVector(0, 0.01);
		this.r = _NUM_IZZM;
	}
	update() {
		for (let i = 0; i < izzm2.length; i++) {
			this.acc = p5.Vector.sub(izzm2[i].pos, this.pos);
			this.acc.mult(3);
			this.acc.setMag(0.03);
			this.vel.normalize();
			this.vel.add(this.acc);
			this.pos.add(this.vel);
		}
	}

	display() {
		stroke(255);
		fill(42, 142, 242);
		ellipseMode(CENTER);
		ellipse(this.pos.x, this.pos.y, this.r);
	}

	edges() {
		if (this.pos.x <= 0 || this.pos.x >= width) {
			this.vel.x *= -1;
		}

		if (this.pos.y <= 0 || this.pos.y >= height) {
			this.vel.y *= -1;
		}
	}

	run() {
		this.update();
		this.display();
		this.edges();
	}
}