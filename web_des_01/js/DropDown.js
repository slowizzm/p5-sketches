class DropDown {
	constructor(_x, _y, _vy) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(0, _vy);
		this.acc = createVector();
		this.isDropped = false;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	display() {
		push();
		rectMode(CENTER);
		noStroke();
		fill(237, 196, 68);
		rect(this.pos.x, this.pos.y, width, height * 0.33);
		for (let x = -this.pos.x; x < width + 42; x += 10) {
			for (let y = -120; y < height * 0.4; y += 10) {
				fill(157, 50);
				rect(this.pos.x + x, this.pos.y - y, 3, 3);
			}
		}
		pop();
	}

	stopDrop() {
		if (this.pos.y >= height * 0.5) {
			this.vel.y = 0;
			this.isDropped = true;
		}

		if (this.pos.y <= height * 0.3) {
			this.vel.y = 0;
			this.isDropped = false;
		}
	}

	run() {
		this.update();
		this.display();
		this.stopDrop();
	}
}