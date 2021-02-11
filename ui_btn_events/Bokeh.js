class Bokeh {
	constructor(_x, _y, _col) {
		this.pos = createVector(_x, _y);
		this.size = random(40, 70);
		this.increment = 1;
		this.col = color(red(_col), green(_col), blue(_col), 180);
	}
	display() {
		noStroke();
		fill(this.col);
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}

	move() {
		this.pos.x += random(-1, 1);
		this.pos.y += random(-1, 1);
	}

	up() {
		this.pos.y += random(0, 2);
		if (this.pos.y > height) this.pos.y = -this.size;
	}

	grow() {
		if (this.size > 200 || this.size < 40) {
			this.increment = -this.increment;
		}
		this.size += this.increment;
	}
}