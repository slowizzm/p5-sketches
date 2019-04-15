let drops = [];
let g;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	background(51);
	//ellipseMode(CENTER);
	for (let i = 0; i < 100; i++) {
		drops.push(new Drop(mouseX + random(width), random(-1000, -100)));
	}
	g = createGraphics(width, height);
}

function draw() {
	background(11, 9, 33);
	for (let i = 0; i < drops.length; i++) {
		drops[i].render();
	}
}

class Drop {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(0, random(3, 7));
		this.acc = createVector(0, 0);
		this.damping = 3;
		this.touched = false;
		this.bounce = this.damping - 1;
		this.r = random(2, 10);
		this.col = (200, 200, 10);
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

		if (this.pos.y >= height) {
			this.vel.y *= -1;
			this.acc.set(0);
		}

		return this;
	}

	display() {
		let len = 33;
		push();
		//clear();
		blendMode(ADD);
		colorMode(HSB, 255, 255, 255, 255);
		for (let i = 0; i < 10; i++) {
			stroke(this.col % 255, 200, 255, 255 / i);
			strokeWeight(i * 4);
			ellipseMode(CENTER);
			ellipse(this.pos.x, this.pos.y, this.r);
		}
		pop();

		//image(g,0,0);

		return this;
	}

	edges() {
		if (this.pos.y >= height + this.r) {
			this.pos.y = -this.r;
		}
	}

	render() {
		return this.update().display().edges();
	}
}