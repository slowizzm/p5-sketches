class Fish {
	constructor(x, y, varience) {
		this.varience = varience;
		this.pos = createVector(x, y);
		this.vel = createVector();
		this.acc = createVector();
		this.h = 40 * this.varience;
		this.w = 16 * this.varience;
		this.xoff = 0;
		this.maxspeed = 0.5 / varience;
		this.dis = 0;
	}

	update(x, y) {
		let mouse = createVector(mouseX, mouseY);
		let dir = createVector();
		this.dis = dist(this.pos.x, this.pos.y, light.pos.x, light.pos.y);
		if (this.dis < 130) {
			dir = p5.Vector.sub(this.pos, mouse);
		} else {
			dir = createVector(x, y);
		}
		this.acc = dir;
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.vel.limit(this.maxspeed);

	}

	tail() {
		noStroke();
		push();
		angleMode(DEGREES);
		translate(this.pos.x, this.pos.y);
		rotate(this.vel.heading() + 90);
		angleMode(RADIANS);
		for (let i = 0; i < 17; i++) {
			fill(150 - i * 7, 150 - i * 7, 200, map(this.dis, 0, 255, 255, 0));

			ellipse(sin(this.xoff) * (i * this.varience), i * (4 * this.varience),
				this.w - sin(i / 6) * (15 * this.varience),
				this.h - sin(i / 6) * (20 * this.varience));

			push();
			translate(this.h * 0.25, this.h * 0);
			rotate(TWO_PI / 360 * 135);
			ellipse(0, 0 - i / 3, this.w / (3 + i / 2), this.h / (3 + i / 2));
			pop();

			push();
			translate(this.h * -0.25, this.h * 0);
			rotate(TWO_PI / 360 * 225);
			ellipse(0, 0 - i / 5, this.w / (4 + i / 2), this.h / (4 + i / 2));
			pop();
		}
		pop();

		let tailSpeed = (this.vel.x + this.vel.y) / 13;
		tailSpeed = constrain(tailSpeed, -0.3, 0.3);
		this.xoff += tailSpeed;
	}

	eyes() {
		push();
		angleMode(DEGREES);
		translate(this.pos.x, this.pos.y);
		rotate(this.vel.heading() + 90);
		fill(100, 0, 200, map(this.dis, 0, 255, 255, 0));
		ellipse(this.h * 0.15, this.h * -0.25, this.w * 0.375, this.h * 0.175);
		ellipse(this.h * -0.15, this.h * -0.25, this.w * 0.375, this.h * 0.175);
		fill(0, 100, 200, map(this.dis, 0, 255, 255, 0));
		stroke(0, 100, 200, map(this.dis, 0, 255, 255, 0));
		ellipse(this.h * 0.175, this.h * -0.25, this.w * 0.1875, this.h * 0.1);
		ellipse(this.h * -0.175, this.h * -0.25, this.w * 0.1875, this.h * 0.1);
		noStroke();
		fill(250, map(this.dis, 0, 255, 255, 0));
		ellipse(this.h * 0.175, this.h * -0.275, this.w * 0.0625, this.h * 0.025);
		ellipse(this.h * -0.175, this.h * -0.275, this.w * 0.0625, this.h * 0.025);
		pop();
	}

	checkEdges() {
		if (this.pos.x < -40) {
			this.pos.x = width + 40;
		}
		if (this.pos.x > width + 40) {
			this.pos.x = -40;
		}
		if (this.pos.y < -40) {
			this.pos.y = height + 40;
		}
		if (this.pos.y > height + 40) {
			this.pos.y = -40;
		}
	}

	render(x, y) {
		this.update(x, y);
		this.checkEdges();
		this.tail();
		this.eyes()
	}
}