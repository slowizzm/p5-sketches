class Item {
	constructor(_x, _y, _bottle, _scl, _img, _w, _h) {
		this.pos = createVector(_x, _y);
		this.bottlePos = _bottle;
		this.imgRes = createVector(_w, _h);
		this.scl = _scl;
		rectMode(CENTER);
		imageMode(CENTER);
		this.img = _img;
		this.res = createVector(233, 333);
		this.shades = 13;
	}

	rise() {
		if (this.rollOver(this.pos.x, this.pos.y, this.res.x, this.res.y)) {
			this.scl += 1.5;

		} else {
			this.scl -= 1.5;
		}

		if (this.scl <= 0.0) {
			this.scl = 0.0;
		}

		if (this.scl >= 13) {
			this.scl = 13;
		}

		return this;
	}

	rollOver(_x, _y, _w, _h) {
		if (mouseX > _x - (_w >> 1) && mouseX < _x + (_w >> 1) && mouseY > _y - (_h >> 1) && mouseY < _y + (_h >> 1)) {
			return true;
		} else {
			return false;
		}
	}

	bottle() {
		noStroke();
		fill(217);
		rect(this.pos.x, this.pos.y, this.res.x, this.res.y);
		image(this.img, this.pos.x, this.bottlePos - (this.scl * 3), this.imgRes.x, this.imgRes.y);
		return this;
	}

	shadow() {
		push();
		noStroke();
		for (let i = 0; i < this.shades; i++) {
			fill(33, 50 - this.shades - (this.scl * 2));
			ellipse(this.pos.x, this.bottlePos + 87, 113 + i, 4);
		}
		pop();
		return this;
	}

	info(_name, _x, _y) {
		push();
		noStroke();
		fill(33);
		textAlign(CENTER, CENTER);
		textFont('Avenir');
		textStyle(BOLD);
		textSize(11);
		text(_name, _x, _y);
		pop();
		return this;
	}

	cost(_price, _x, _y) {
		push();
		noStroke();
		fill(33);
		textAlign(CENTER, CENTER);
		textFont('Avenir');
		textStyle(BOLD);
		textSize(20);
		text(_price, _x, _y);
		pop();
		return this;
	}

	addToCart(_x, _y) {
		push();
		noStroke();
		fill(59, 60, 86);
		beginShape();
		vertex(this.pos.x - (this.res.x * 0.5), this.pos.y + (this.res.y * 0.5));
		vertex(this.pos.x - (this.res.x * 0.5), this.pos.y + (this.res.y * 0.5) - this.scl * 3);
		vertex(this.pos.x + (this.res.x * 0.5), this.pos.y + (this.res.y * 0.5) - this.scl * 3);
		vertex(this.pos.x + (this.res.x * 0.5), this.pos.y + (this.res.y * 0.5));
		endShape(CLOSE);
		pop();

		push();
		noStroke();
		fill(217);
		textAlign(CENTER, CENTER);
		textFont('Avenir');
		textStyle(BOLD);
		textSize(13);
		text('ADD TO CART', _x, _y);
		pop();
		return this;
	}

	render(_n, _nx, _ny, _p, _px, _py, _a2cx, _a2cy) {
		return this.bottle().shadow().rise().info(_n, _nx, _ny).cost(_p, _px, _py).addToCart(_a2cx, _a2cy);
	}
}