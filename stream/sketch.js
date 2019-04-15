let stream;

function setup() {
	createCanvas(800, 800);
	strokeWeight(0.5);
	frameRate(60);
	stream = new Stream();
}

function draw() {
	stream.render();
}

class Stream {
	constructor() {
		this.pos = createVector(width, random(height));
		this.vel = createVector();
		this.acc = createVector(-1, 0);
		this.offset = 0.0;
		this.theta = noise(this.offset) * TWO_PI;
		this.pushV = createVector();
		this.offset = 0;
	}

	update() {
		this.acc.mult(noise(millis()) / PI);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.offset += random(0.001, 0.003);
		this.theta = (noise(this.offset) * TWO_PI);
		this.pushV.x = map(this.pos.x, 0, width + 60, -111, 1);
		this.pushV.y = map(this.pos.y, 0, height + 60, -1, 11);
		this.vel.add(this.pushV);
		this.vel.normalize();

		return this;
	}

	display() {
		push();
		stroke(map(this.theta, 0, TWO_PI, 200, 255), map(this.pos.x, 0, width, 100, 1));
		strokeWeight(map(this.theta, 0, TWO_PI, 1, 3));
		noFill();
		translate(this.pos.x, this.pos.y);
		rotate(radians(PI * this.theta) * 42);
		ellipse(0, 0, 13, map(this.pos.x, 0, width, 133, 1));
		pop();

		return this;
	}

	edges() {
		if (this.pos.x <= -33) {
			this.pos.x = width;
			this.pos.y = random(height);
		}

		if (this.pos.y <= -33 || this.pos.y >= height + 33) {
			this.pos.x = width - 10;
			this.pos.y = random(height);
		}
		return this;
	}

	render() {
		return this.update().display().edges();
	}
}