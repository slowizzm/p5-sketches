let stars = [];

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

	for (let i = 0; i < 300; i++) {
		let x = randomNormal(-width / 2, width / 2);
		let y = randomNormal(-height / 2, height / 2);
		let z = randomNormal(-8000, 8000);
		stars[i] = new Star(x, y, z);
	}
}

function randomNormal(_min, _max) {
	let n = random(_min, _max) + random(_min, _max) + random(_min, _max) + random(_min, _max) + random(_min, _max);
	return n / 5;
}

function draw() {
	background(0, 0, 0);
	for (let i = 0; i < stars.length; i++) {
		stars[i].render();
	}
}

class Star {
	constructor(_x, _y, _z) {
		this.pos = createVector(_x, _y, _z);
		this.vel = createVector(0,0,7);
		this.acc = createVector();
	}
	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		return this;
	}

	bounds() {
		if (this.pos.z > 1000) {
			this.pos.z -=4000;
		}

		return this;
	}

	display() {
		let offset = 1;

		push();
		translate(this.pos.x - offset, this.pos.y - offset, this.pos.z);
		rotateX((this.pos.x + frameCount) / 90);
		rotateY((this.pos.y + frameCount) / 80);
		rotateZ((this.pos.z + frameCount) / 1000);
		noFill();
		stroke(0, 255, 0);
		strokeWeight(0.5);
		box(10);
		pop();

		push();
		translate(this.pos.x + offset, this.pos.y + offset, this.pos.z);
		rotateX((this.pos.x + frameCount) / 90);
		rotateY((this.pos.y + frameCount) / 80);
		rotateZ((this.pos.z + frameCount) / 1000);
		noFill();
		stroke(255, 0, 200);
		strokeWeight(0.5);
		box(10);
		pop();

		return this;
	}

	render() {
		return this.update().bounds().display();
	}
}