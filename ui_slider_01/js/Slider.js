class Slider {
	constructor() {
		this.pos = createVector(width * 0.5, height * 0.5);
		this.res = createVector(50, 30);
		this.offset = createVector();
		this.isDraggable = false;
		rectMode(CENTER);
	}

	rollover() {
		if (mouseX >= this.pos.x - (this.res.x / 2) &&
			mouseX <= this.pos.x + (this.res.x / 2) &&
			mouseY >= this.pos.y - (this.res.y / 2) &&
			mouseY <= this.pos.y + (this.res.y / 2)) {
			cursor('grab');
			return true;
		} else {
			cursor();
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
		fill(0, 0, 10, 0.3);
		ellipse(this.pos.x, this.pos.y, this.res.x / 1.7);
		fill(0, 0, 100);
		ellipse(this.pos.x, this.pos.y, this.res.x / 2);
		if (this.isDraggable) {
			fill(0, 10, 10, 0.3);
			ellipse(this.pos.x, this.pos.y, this.res.x / 3);
		}
		return this;
	}

	bar() {
		push();
		fill(map(this.pos.x, 0, width, 100, 200), 100, 100, 1);
		rect(width * 0.5, height * 0.5, width * 0.9, 15, 30);
		pop();
		return this;
	}

	render() {
		return this.drag().bar().head().rollover();
	}
}