class Izzm {
	constructor(_r) {
		this.pos = createVector(random(width), random(height));
		this.vel = p5.Vector.fromAngle(random(TWO_PI));
		this.acc = createVector();
		this.r = _r;
		this.vel.setMag(5);
		this.switch = false;
		this.lineDist = 0;
		ellipseMode(CENTER);
	}

	connect(_len) {
		this.lineDist = _len;
		for (let i = 0; i < izzms.length; i++) {
			let d = dist(this.pos.x, this.pos.y, izzms[i].pos.x, izzms[i].pos.y);
			if (d < this.lineDist) {
				if (this.switch == false) {
					this.switch = true;
				}
				stroke(255);
				line(this.pos.x, this.pos.y, izzms[i].pos.x, izzms[i].pos.y);
			} else {
				if (this.switch == true)
					this.switch = false;
			}
		}
	}
	
	collision() {
		for (let i = 0; i < izzms.length; i++) {
			let d = dist(this.pos.x, this.pos.y, izzms[i].pos.x, izzms[i].pos.y);
			if (d >= this.lineDist - 0.3 && d <= this.lineDist + 0.3) {
				this.vel.mult(-0.9);
			}
		}
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	edges() {
		if (this.pos.x <= 0 || this.pos.x >= width) {
			this.vel.x *= -1;
		}

		if (this.pos.y <= 0 || this.pos.y >= height) {
			this.vel.y *= -1;
		}

	}

	display() {
		ellipse(this.pos.x, this.pos.y, this.r);
	}

	render(_len) {
		this.update();
		this.collision();
		this.edges();
		this.connect(_len);
		this.display();
	}
}