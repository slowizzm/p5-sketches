let easing = 0.03;

class Seeker {
	constructor() {
		this.target = 0;
		this.pos = createVector();
	}

	update() {
		let targetX = mouseX;
		this.pos.x += (targetX - this.pos.x) * easing;
		let targetY = mouseY;
		this.pos.y += (targetY - this.pos.y) * easing;

		return this;
	}

	display() {
		ellipse(this.pos.x, this.pos.y, 40, 40);
		return this;
	}

	run() {
		return this.update().display();
	}
}