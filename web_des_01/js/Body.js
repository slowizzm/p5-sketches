class Body {
	constructor(_x, _y) {
		this.pos = createVector();
		this.vel = createVector();
		this.acc = createVector();
		this.isRaised = false;
		noStroke();
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	header() {
		push()
		fill(34);
		rect(this.pos.x, this.pos.y, width, height * 0.2);
		pop();
	}

	footer() {
		push()
		fill(34);
		rect(0, height * 0.7, width, height);
		pop();
	}

	raiseHeader() {
		if (this.pos.y <= -83) {
			this.vel.y = 0;
			this.isRaised = false;
		}

		if (this.pos.y >= 0) {
			this.vel.y = 0;
			this.isRaised = true;
		}
	}

	display() {
		this.header();
		this.footer();
		this.update();
		this.raiseHeader();
	}
}