class Particle {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(1, 1);
		this.acc = createVector();
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.pos.x += random(-5, 5);
		this.pos.y += random(-5, 5);
		this.vel.normalize();
	}

	display() {
		noStroke();
		fill(random(233, 255), random(233, 255), random(233, 255), random(117));

		ellipse(this.pos.x, this.pos.y, 1, 1);

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