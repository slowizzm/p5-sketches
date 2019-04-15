class PSphere {
	constructor(_theta) {
		this.amp = 0;
		this.theta = createVector(float(_theta.x), float(_theta.y));
		this.pos = createVector();
	}

	update(a) {
		this.amp = a;
		this.pos.x = this.amp * cos(radians(this.theta.x)) * sin(radians(this.theta.y));
		this.pos.y = this.amp * sin(radians(this.theta.x));
		this.pos.z = this.amp * cos(radians(this.theta.x)) * cos(radians(this.theta.y));
		this.theta.x += 0.1;
		//this.theta.y += 0.7;

		return this;
	}

	display() {
		let d = dist(width>>1,height>>1, width,height);
		stroke(-(this.pos.y*3));
		noFill();
		strokeWeight(d*0.03);
		push();
		translate(this.pos.x, this.pos.y, this.pos.z);
		box(3, 3, 3);
		pop();

		return this;
	}

	run(_a) {
		return this.update(_a).display();
	}
}