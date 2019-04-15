particles = [];

function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
	background(0);

	let n = noise(frameCount / 100);
	n = map(n, 0, 1, 5, 50);
	for (let i = 0; i < n; i++) {
		let p = new Particle();
		particles.push(p);
	}
	for (let i = particles.length - 1; i >= 0; i--) {
		particles[i].render();
		if (particles[i].lifespan()) {
			particles.splice(i, 1);
		}
	}
}

class Particle {

	constructor() {
		this.pos = createVector(width * 0.5, height - 20);
		this.vel = createVector(random(-1, 1), random(-0.1, -3));
		this.acc = createVector();
		this.h = random(340, 380) % 360;
		this.b = random(50, 80);
		this.max = random(12, 24);
		this.d = random(this.max / 2, this.max * 2);
		this.alpha = map(this.d, 0, this.max * 2, 0, 100);
		this.freq = 0;
	}

	lifespan() {
		return this.alpha < 0;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.vel.limit(map(noise(frameCount / 100), 0, 1, 0, 33));
		this.alpha -= 1;
		this.d = map(this.alpha, 0, 100, 0, this.max);

		return this;
	}

	display() {
		noStroke();
		fill(this.h, 100, this.b, this.alpha);
		ellipse(this.pos.x, this.pos.y, this.d);

		return this;
	}

	render() {
		return this.update().display();
	}

}