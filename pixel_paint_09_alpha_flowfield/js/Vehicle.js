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
		pg.clear();
		pg.noStroke();
		let col = img.get(this.pos.x, this.pos.y);
		let brush_radius = this.pos.y/133;
		let img_margin = brush_radius / 2 + 1;
		if (this.pos.x > 0 + img_margin &&
			this.pos.x < img.width - img_margin &&
			this.pos.y > 0 + img_margin &&
			this.pos.y < img.height - img_margin) {
			pg.fill(col[0], col[1], col[2], col[3]);
			pg.ellipse(this.pos.x, this.pos.y, brush_radius, brush_radius); 
		}
		image(pg, 0, 0);
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