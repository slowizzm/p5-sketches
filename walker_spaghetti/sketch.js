const NUM_WALKERS = 1000;
let walkers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	for (let i = 0; i < NUM_WALKERS; i++) {
		walkers[i] = new Walker();
	}
	background(20, 50, 20);
}

function draw() {
	for (let i = 0; i < walkers.length; i++) {
		walkers[i].render();
		if (frameCount % 100 === 0) {
			walkers[i].changeColor(createVector(random(300, 360), 100, 20));
		}
	}

	background(20, 50, 20, 1.5);

}

class Walker {
	constructor() {
		this.pos = createVector(random(width / 2 - 100, width / 2 + 100), random(height / 2 - 100, height / 2 + 100));
		this.vel = createVector(0, 0);
		this.xoff = random(0, 666);
		this.hsb = createVector(20, 100, 70);
	}
	display() {
		let brushSize = map(noise(this.xoff), 0, 1, 1, 3);
		this.hsb.z = noise(this.xoff) * 100;
		strokeWeight(brushSize);
		stroke(this.hsb.x, this.hsb.y, this.hsb.z);
		point(this.pos.x, this.pos.y);
		return this;
	}

	update() {
		this.xoff += 0.01;
		this.acc = p5.Vector.fromAngle(map(noise(this.xoff), 0, 1, -TWO_PI, TWO_PI));
		this.acc.mult(0.5);

		this.vel.add(this.acc);
		this.vel.limit(2);
		this.vel.normalize();
		this.pos.add(this.vel);
		return this;
	}

	changeColor(_h, _s, _b) {
		this.hsb.set(_h, _s, _b);
		return this;
	}

	bounds() {
		let d = dist(this.pos.x, this.pos.y, width * 0.5, height * 0.5);

		if (d >= 142) {
			this.vel.mult(-1);
		}

		if (d >= 333) {
			this.pos.set(width * 0.5, height * 0.5);
		}
		return this;
	}

	render() {
		return this.update().display().bounds();
	}
}