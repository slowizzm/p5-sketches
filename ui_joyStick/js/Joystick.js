class Joystick {
	constructor(_x, _y, _r) {
		this.pos = createVector(_x, _y);
		this.value = createVector(0, 0);
		this.stickPos = this.pos.copy();
		this.r = _r;
		this.fingerPos = 0;
		this.isControllable = false;
	}

	activateJoystick(command) {
		this.fingerPos = createVector(mouseX, mouseY);
		var distance = p5.Vector.dist(this.fingerPos, this.pos);
		if (distance < this.r / 2 && command) {
			this.isControllable = true;
		} else {
			this.stickPos = this.pos.copy();
			this.value = this.value.setMag(0);
			this.isControllable = false;
		}
	}

	update() {
		if (this.isControllable) {
			this.fingerPos = createVector(mouseX, mouseY);
			this.stickPos = p5.Vector.sub(this.fingerPos, this.pos);
			this.stickPos.limit(this.r / 2);
			this.value = this.stickPos.copy();
			this.stickPos = p5.Vector.add(this.pos, this.stickPos);
		}
		return this;
	}

	getValue() {
		this.value = this.value.mult(0.3);
		return this.value;
	}

	display() {
		stroke(217, 90);
		strokeWeight(this.r / 20);
		fill(180, 10);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
		stroke(60);
		strokeWeight(this.r / 20);
		fill(33);
		ellipse(this.stickPos.x, this.stickPos.y, 2 * this.r / 3, 2 * this.r / 3);

		return this;
	}

	run() {
		return this.update().display();
	}
}