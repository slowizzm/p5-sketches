let r;

function setup() {
	createCanvas(400, 400);
	r = new BouncingBall();
}

function draw() {
	background(51);

	r.run();
}

class BouncingBall {
	constructor() {
		this.pos = createVector(width >> 1, height >> 1);
		this.vel = createVector(1, 0);
		this.acc = createVector();
		this.isBounce = false;
		this.r = 33;
		this.mass = random(1, 4) * 20;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
		//this.vel.normalize();


		this.vel.x = map(this.pos.x, 0, width * 0.8, 17, 0);
		if (!this.isBounce) {
			if (this.vel.x <= 3.0) {
				this.vel.y += 0.3;
			}
		}
		return this;
	}

	display() {
		noStroke();
		fill(217);
		ellipse(this.pos.x, this.pos.y, this.r);
		return this;
	}

	applyForce(force) {
		var f = force.copy(); //necessary so force is not divided (changed) as it is applied in multiple functions
		f.div(this.mass);
		this.acc.add(force);
		return this;
	}

	edges() {
		if (this.pos.x <= 0 || this.pos.x >= width) {
			this.vel.x *= -1;
		}

		if (this.pos.y >= height - (this.r * 0.5)) {
			this.isBounce = true;
			this.vel.y *= -0.67;
			this.pos.y = height - (this.r * 0.5);
		}
		return this;
	}

	run() {
		return this.update().applyForce(createVector(0, 1.9)).display().edges();
	}
}