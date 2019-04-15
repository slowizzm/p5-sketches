class Vehicle {
	constructor(l, ms, mf) {

		this.pos = l.copy();
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);

		this.r = 3.0;
		this.maxforce = mf;
		this.maxspeed = ms;
		this.theta = 0;
	}

	update() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxspeed);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	border() {
		if (this.pos.x < -this.r) this.pos.x = width + this.r;
		if (this.pos.y < -this.r) this.pos.y = height + this.r;
		if (this.pos.x > width + this.r) this.pos.x = -this.r;
		if (this.pos.y > height + this.r) this.pos.y = -this.r;
	}

	render() {
		
		
		let ix = constrain(floor(this.pos.x), 0, width - 1);
		let iy = constrain(floor(this.pos.y), 0, height - 1);
		
		let m_pixelColor = img.get(this.pos.x, this.pos.y);
		stroke(m_pixelColor);

		this.theta = this.vel.heading() + PI / 3;
		push();
		
		fill(m_pixelColor);
		translate(this.pos.x, this.pos.y);
		rotate(this.theta);
		ellipse(0, 0,this.pos.y/133);
		pop();
	}

	applyForce(force) {
		this.acc.add(force);
	}

	follow(flow) {
		let desired = flow.lookup(this.pos);
		desired.mult(this.maxspeed);
		let steer = p5.Vector.sub(desired, this.vel);
		steer.limit(this.maxforce);
		this.applyForce(steer);
	}

	run() {
		this.update();
		this.border();
		this.render();
	}
}