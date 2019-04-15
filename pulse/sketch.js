let pulse, isPulse = false;

function setup() {
	createCanvas(400, 400);

	pulse = new Pulse(width * 0.5, height * 0.5, 0.5, 0.1, 33);
}

function draw() {
	background(51);

	pulse.render();
}

class Pulse {
	constructor(_x, _y, _sScl, _fScl, _r) {
		this.pos = createVector(_x, _y);
		this.sScl = _sScl;
		this.fScl = _fScl;
		this.r = _r;
		this.alph = 0;
	}

	update() {
		if (isPulse) {
			this.sScl += 0.9;
			this.alph += 1.5;
			this.fScl += 0.1;
		} else {
			this.sScl -= 0.9;
			this.alph = 0;
			this.fScl -= 0.1;
		}

		if (this.sScl <= 0.0) {
			this.sScl = 0.0;
			isPulse = !isPulse;
		}

		if (this.sScl >= 33) {
			this.sScl = 33;
			isPulse = !isPulse;
		}

		return this;
	}

	rollOver() {
		let d = dist(this.pos.x, this.pos.y, mouseX, mouseY);

		if (d <= this.r * 0.5) {
			return true;
		} else {
			return false;
		}
	}

	display() {
		push();
		stroke(217, this.alph / 2);
		strokeWeight(3);
		fill(217, (this.alph) / 3);
		ellipse(this.pos.x, this.pos.y, this.r + this.sScl);
		pop();

		push();
		fill(217);
		noStroke();
		ellipse(this.pos.x, this.pos.y, (this.r * 1.5) - this.fScl);
		pop();
		return this;
	}

	render() {
		return this.update().display();
	}
}