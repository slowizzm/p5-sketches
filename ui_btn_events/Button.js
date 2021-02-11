class Button {
	constructor(_x, _y, _d) {
		this.pos = createVector(_x, _y);
		this.d = _d;
		this.col = color(217, 200);
		this.hovering = false;
		this.clicked = false;
		this.hoveringStarted = 0;
		this.hoverThreshold = 300;
	}

	display() {
		noFill();
		var diam = this.d;
		if (this.hovering) {
			fill(this.col);
		} else {
			this.clicked = false;
		}
		if (this.clicked) {
			diam = this.d * 1.2;
		}
		strokeWeight(4);
		stroke(this.col)
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, diam * 2, diam, 3);
	}

	over() {
		var d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
		if (d < this.d) {
			if (this.hovering) {
				this.hoveringDuration = millis() - this.hoveringStarted;
				if (this.hoveringDuration > this.hoverThreshold) {
					this.clicked = true;
				}
			} else {
				this.hovering = true;
				this.hoveringStarted = millis();
			}
		} else {
			this.hovering = false;
			this.hoveringStarted = 0;
		}
		return this.hovering;
	}
}