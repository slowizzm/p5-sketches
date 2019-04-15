class Button {
	constructor(_pos, _fade, _col) {
		this.pos = createVector(_pos.x, _pos.y);
		this.res = createVector(150, 30);
		this.a = 0;
		this.fade = _fade;
		this.col = _col;
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

	hover(_x, _y, _w, _h) {
		if (mouseX > _x - (_w >> 1) && mouseX < _x + (_w >> 1) && mouseY > _y - (_h >> 1) && mouseY < _y + (_h >> 1)) {
			return true;
		} else {
			return false;
		}
	}

	run() {
		return this.display().hover();
	}
}