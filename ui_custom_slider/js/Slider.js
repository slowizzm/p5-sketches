class Slider {
	constructor() {
		this.pos = createVector(width * 0.5, height * 0.5);
		this.res = createVector(80, 30);
		this.offset = createVector();
		this.isDraggable = false;
		rectMode(CENTER);
	}

	isRollOver() {
		if (mouseX >= this.pos.x - (this.res.x / 2) &&
			mouseX <= this.pos.x + (this.res.x / 2) &&
			mouseY >= this.pos.y - (this.res.y / 2) &&
			mouseY <= this.pos.y + (this.res.y / 2)) {
			return true;
		} else {
			return false;
		}
		return this;
	}

	drag() {
		if (this.isDraggable) {
			this.pos.x = constrain(mouseX + this.offset.x, width * 0.1, width * 0.9);
			//this.pos.y = mouseY + this.offset.y;
		}
		return this;
	}

	head() {
		noStroke();
		if (this.isDraggable) {
			fill(175, 200, 200);
		}
		rect(this.pos.x, this.pos.y, this.res.x, this.res.y, 7);
		return this;
	}

	render() {
		return this.drag().head();
	}
}