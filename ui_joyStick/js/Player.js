class Player {
	constructor(_x, _y, _r) {
		this.pos = createVector(_x, _y);
		this.r = _r;
	}

	update(_spd) {
		this.pos = p5.Vector.add(_spd, this.pos);
		if (this.pos.x < 0) {
			this.pos.x = width;
		} else if (this.pos.x > width) {
			this.pos.x = 0;
		} else if (this.pos.y < 0) {
			this.pos.y = height;
		} else if (this.pos.y > height) {
			this.pos.y = 0;
		}

		return this;
	}

	display() {
		push();
		fill(217);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.r);
		pop();

		return this;
	}

	run(_spd) {
		return this.update(_spd).display();
	}
}