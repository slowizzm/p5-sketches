class Seeker {
	constructor() {

		this.pos = createVector(random(-boxSz, boxSz), random(-boxSz, boxSz), random(boxSz * 2, boxSz * 4));
		this.vel = createVector(random(-2, 2), random(-2, 2), 0);
		this.acc = createVector();
		this.sz = 10;
		this.maxSpeed = random(5, 7.5);
		this.maxForce = 0.3;
		this.trail = [];
		this.trailMax = 100;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);

		if (this.trail.length > this.trailMax) {
			this.trail.splice(0, 1);
		}

		if (frameCount % 10 == 0) {
			let v = createVector(this.pos.x, this.pos.y, this.pos.z);
			this.trail.push(v);
		}
	}

	display() {
		for (let i = 0; i < this.trail.length; i++) {
			let pos = this.trail[i];

			push();
			translate(pos.x, pos.y, pos.z);
			this.sz = map(i, 0, this.trailMax, 1, 8);
			this.colorTint = map(i, 0, this.trailMax, 190, 200);
			specularMaterial(this.colorTint);
			sphere(this.sz/2, 33);

			pop();
		}

		push();
		translate(this.pos.x, this.pos.y, this.pos.z);
		specularMaterial(0, 100, 100);
		sphere(10, 30);
		pop();
	}

	applyForce(_force) {
		let f = _force.copy();
		this.acc.add(f);
	}
	seek(target) {
		let desired = p5.Vector.sub(target, this.pos);
		desired.setMag(this.maxSpeed);

		let steering = p5.Vector.sub(desired, this.vel);
		steering.limit(this.maxForce);
		this.applyForce(steering);
	}
}