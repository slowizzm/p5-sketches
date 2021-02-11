class Button {
	constructor(pos, fade, col) {
		this.pos = createVector(pos.x, pos.y);
		this.res = createVector(150, 30);
		this.a = 0;
		this.fade = fade;
		this.col = col;
	}

	display() {
		if (this.hover(this.pos.x, this.pos.y, this.res.x, this.res.y)) {
			fill(this.col);
			if (this.col._getAlpha() < 255) {
				this.col.setAlpha(this.fade += 11);
			}
		} else {
			noFill();
			this.col.setAlpha(0);
			this.fade = 0;
		}
		rectMode(CENTER);
		strokeWeight(3);
		stroke(this.col._getRed(), this.col._getGreen(), this.col._getBlue());
		rect(this.pos.x, this.pos.y, this.res.x, this.res.y, 33);
		//print(this.col._getAlpha());
		return this;
	}

	hover(x,y,w, h) {
		if (mouseX > x - (w*0.5) && mouseX < x + (w*0.5) && mouseY > y - (h*0.5) && mouseY < y + (h*0.5)) {
			return true;
		} else {
			return false;
		}
	}

	run() {
		return this.display().hover();
	}
}