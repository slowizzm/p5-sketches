class Toggle {
	constructor(_x, _y, _t, _h, _l) {
		this.initPos = createVector(_x, _y);
		this.updatedPos = createVector(_x, _y);
		this.initVel = createVector();
		this.vel = createVector();
		this.initTarget = createVector(_t, _t);
		this.target = createVector();
		this.target.set(new p5.Vector(width * 0.5 + _l * cos(0), height * 0.5 + _l * sin(0)));
		this.size = 30;
		this.hue = color(0, 0, 75);
		this.spring = 0.3;
		this.speed = 0.1;
		this.isOff = false;
		this.animate = false;
		noStroke();
	}

	update() {
		if (this.isOff) {
			this.initTarget.set(width * 0.5, height * 0.5);
		} else {
			this.initTarget.set(this.target.x, this.target.y);
		}

		this.initVel.mult(this.spring);

		let diff = p5.Vector.sub(this.initTarget, this.initPos);
		diff.mult(this.speed);
		this.initVel.add(diff);
		this.initPos.add(this.initVel);

		this.updatedPos.x = this.initPos.x;
		this.updatedPos.y = this.initPos.y;
		return this;
	}

	button() {
		push();
		rectMode(CENTER);
		fill(0, 0, 33, 0.3);
		ellipse(this.updatedPos.x, this.updatedPos.y, this.size + 3);
		fill(0, 0, 100);
		ellipse(this.updatedPos.x, this.updatedPos.y, this.size);
		pop();
		return this;
	}

	button_bg() {
		push();
		translate(width * 0.5, height * 0.5);
		rectMode(CENTER);
		fill(this.hue);
		rect(40, 0, 120, 40, 33);
		pop();

		return this;
	}

	display() {
		return this.button_bg().button().pointer();
	}

	flip() {
		if (!this.animate) {
			this.animate = true;
			this.hue = color(81, 75, 70);
		} else {
			if (!this.isOff) {
				this.isOff = true;
				this.spring = 0.3;
				this.hue = color(0, 0, 75);
			} else if (this.isOff) {
				this.isOff = false;
				this.spring = 0.3;
				this.hue = color(81, 75, 70);
			}
		}

		return this;
	}
	
	pointer() {
		let d = dist(this.updatedPos.x, this.updatedPos.y, mouseX, mouseY);

		if (d < this.size / 2) {
			cursor('pointer');
		} else {
			cursor();
		}
		return this;
	}

	rollover() {
		let d = dist(this.updatedPos.x, this.updatedPos.y, mouseX, mouseY);

		if (d < this.size / 2) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		return this.update().display();
	}
}