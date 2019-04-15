class Predator {
	constructor() {
		this.pos = createVector(random(0, width), random(0, height));
	}

	move(_x, _y) {
		this.pos.set(_x, _y);
	}

	display() {
		push();
		blendMode(ADD);
		translate(this.pos.x, this.pos.y);
		for (let i = 0; i < 333; i += 13) {

			strokeWeight(6);
			stroke(111, 233, 233, 90 - i);
			fill(233 - i, 255, 255, 83 - i);
			ellipse(0, 0, i / 2);
		}
		pop();
	}
}