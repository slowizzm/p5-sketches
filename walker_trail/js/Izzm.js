class Izzm {
	constructor(_x, _y, _sx, _sy, _len, _s) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(noise(_sx), noise(_sy));
		this.acc = createVector(random(-1, 1), random(-1, 1));

		this.history = [];
		this.col = random(360);
		this.tailLength = _len;
		this.size = _s;
	}

	update() {
		let r = noise(frameCount);
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.vel.x += random(-r, r);
		this.vel.y += random(-r, r);
		this.vel.setMag(3);
		let v = createVector(this.pos.x, this.pos.y);
		this.history.push(v);
		if (this.history.length > this.tailLength) {
			this.history.splice(0, 1);
		}

		this.acc.mult(0);

		return this;
	}

	display() {
		for (let i = 0; i < this.history.length; i++) {
			let sz = map(i, 0, this.tailLength - 1, 0, 25);
			let t = this.history[i];
			noStroke();
			fill(this.col + random(-50, 50), 0.9, 0.9);
			ellipse(t.x, t.y, sz - this.size);
		}
		return this;
	}

	bounds() {
		let d = dist(this.pos.x, this.pos.y, width * 0.5, height * 0.5);

		if (d >= 333) {
			this.vel.mult(-1);
		}
		return this;
	}

	render() {
		return this.update().display().bounds();
	}
}