let projectiles = [];

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	background(51);
	ellipseMode(CENTER);
}

function draw() {
	background(11, 9, 33);
	for (let i = 0; i < projectiles.length; i++) {
		projectiles[i].render();
	}
	if (mouseIsPressed) {
		projectiles.push(new Ball(mouseX + random(-1, 1), mouseY + random(-1, 1)));
	}
}

class Ball {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(7, -7);
		this.acc = createVector(0, 0);
		this.damping = 3;
		this.touched = false;
		this.bounce = this.damping - 1;
		this.r = random(2, 10);
		this.col = 0;
	}

	applyForce(f) {
		this.acc.add(f);
	}

	spring(t) {
		this.diff = createVector(this.pos.x, this.pos.y);
		this.diff.sub(t);
		this.diff.limit(this.damping);
		return (this.diff);
	}

	update() {
		this.vel.add(this.acc);
		this.vel.mult(0.985);
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.acc.y += 0.3;
		this.col += dist(mouseX, mouseY, pmouseX, pmouseY) / 33;

		return this;
	}

	display() {
		let len = 33;
		push();
		blendMode(ADD);
		colorMode(HSB, 255, 255, 255, 255);
		for (let i = 0; i < 10; i++) {
			stroke(this.col % 255, 200, 255, 255 / i);
			strokeWeight(i * 4);
			ellipse(this.pos.x, this.pos.y, this.r);
		}
		pop();

		return this;
	}

	boundries() {
		if (this.pos.x <= 0 || this.pos.x >= width) {
			this.vel.x *= -1;
		}

		if (this.pos.y >= height - (this.r * 0.5)) {
			this.isBounce = true;
			this.vel.y *= -0.67;
			this.pos.y = height - (this.r * 0.5);
		}
		return this;
	}

	isDead() {
		if (projectiles.length >= 33) {
			projectiles.splice(0, 1);
		}
		return this;
	}

	render() {
		return this.update().display().boundries().isDead();
	}
}