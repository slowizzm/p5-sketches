class Anim {
	constructor(_arr1d, _x, _y, _w, _h) {
		this.pos = createVector(_x, _y);
		this.res = createVector(_w, _h);
		this.index = 0;
		this.isHover = false;

		this.panel = _arr1d;
	}

	update() {
		if (this.isHover) {
			this.index = (this.index + 1) % this.panel.length;
		} else {
			this.index = 0;
		}
		return this;
	}

	display() {
		image(this.panel[this.index], this.pos.x, this.pos.y);
		return this;
	}

	onHover() {
		if (mouseX >= this.pos.x - (this.res.x * 0.5) &&
			mouseX <= this.pos.x + (this.res.x * 0.5) &&
			mouseY >= this.pos.y - (this.res.y * 0.5) &&
			mouseY <= this.pos.y + (this.res.y * 0.5)) {
			this.isHover = true;
		} else {
			this.isHover = false;
		}
		return this;
	}

	run() {
		return this.update().display().onHover();
	}
}