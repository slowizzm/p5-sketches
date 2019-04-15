class Falling {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(0, 0.8);
		this.acc = createVector();
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		return this;
	}

	display() {
		image(img_falling, this.pos.x, this.pos.y, img_falling.width * 0.2, img_falling.height * 0.2);
		return this;
	}

	fell() {
		if (this.pos.y >= height + img_falling.height*0.2) {
			this.pos.y = 0 - img_falling.height*0.2;
		}
		return this;
	}

	render() {
		return this.update().display().fell();
	}
}