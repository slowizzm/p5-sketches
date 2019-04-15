class Seeked {
	constructor(_x, _y, _z, _angleY, _angleZ, _spd, _s) {
		this.pos = createVector(_x, _y, _z);
		this.angle = createVector(0, _angleY, _angleZ);
		this.s = radians(this.angle.y);
		this.t = radians(this.angle.z);
		this.spd = createVector(0, _spd, _spd + _spd / 2);
		this.dir = random(50);
		this.size = _s;
	}

	update() {
		this.pos.x = radius * cos(this.s) * sin(this.t);
		this.pos.y = radius * sin(this.s) * sin(this.t);
		this.pos.z = radius * cos(this.t);
		this.s += this.spd.y / 5 * this.dir;
		this.t += this.spd.z / 5 * this.dir;

		if (this.dir > 80) {
			this.dir = -1;
		} else {
			this.dir = 1;
		}

		return this;
	}

	display() {
		push();
		translate(this.pos.x, this.pos.y, this.pos.z);
		noStroke();
		specularMaterial(300, 100, 100);
		sphere(this.size, 30);

		pop();

		if (frameCount % 200 == 0) {
			this.changeSpeed();
		}

		return this;
	}
	changeSpeed() {
		this.spd.y = random(0.04, 0.1);
		this.spd.z = random(0.04, 0.1);

		return this;
	}

	render() {
		return this.update().display();
	}
}