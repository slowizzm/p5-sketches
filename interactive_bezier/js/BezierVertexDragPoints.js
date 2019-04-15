class BezierVertexDragPoint {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.size = createVector(75, 50);
		this.r = 13;
		this.offset = createVector();
		this.isDraggable = false;
		this.isRollOver = false;
	}

	rollOver() {
		this.d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
		if (this.d <= this.r) {
			this.isRollOver = true;
		} else {
			this.isRollOver = false;
		}
	}

	drag() {
		if (this.isDraggable) {
			this.pos.x = mouseX + this.offset.x;
			this.pos.y = mouseY + this.offset.y;
		}

		return this;
	}

	vPoint() {
		if (this.isDraggable) {
			fill(175, 200, 200);
		} else {
			noFill();
		}
		stroke(0, 175, 200);
		ellipse(this.pos.x, this.pos.y, this.r);

		return this;
	}

	render() {
		return this.drag().vPoint();
	}
}