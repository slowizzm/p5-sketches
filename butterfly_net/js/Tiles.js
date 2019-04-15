class Tiles {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.d = 0;
	}

	update() {
		this.d = dist(this.pos.x, this.pos.y, att.pos.x, att.pos.y);
		push();
		noFill();
		stroke(this.d);
		translate(this.pos.x - width * 0.5, this.pos.y - height * 0.5, -1100);
		rotateY(radians(frameCount / this.d));
		return this;
	}

	display() {
		if (this.d <= 42) {
			push();
			fill(51, this.d);
			box(this.d, this.d);
			pop();
		} else {
			sphere(142 + (this.d / 33), 1, 3, 3);
		}
		pop();
		return this;
	}

	render() {
		return this.update().display();
	}
}