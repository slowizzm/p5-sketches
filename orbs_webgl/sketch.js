let orbs;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
	orbs = new Orbs();
}

function draw() {
	background(217);
	orbs.render();

	let pos = createVector(mouseX - (height>>1),mouseY - (width>>1));

	ambientLight(60, 60, 60);
	pointLight(255, 255, 255, pos.x, pos.y, 100);
}

class Orbs {
	constructor() {
		this.r = (height >> 1) - (height >> 3);
		this.count = 42;
		this.max = 33;
		this.rot = createVector();

		specularMaterial(250);
	}

	update() {
		this.rot.x -= 0.1;
		this.rot.y -= 0.1;
		this.rot.z -= 0.1;
		rotateX(radians(this.rot.x));
		rotateY(radians(this.rot.y));
		rotateZ(radians(this.rot.z));

		return this;
	}

	display() {
		for (let i = 0; i < this.count; i++) {

			let seed = i;
			let prln = lerp(-1, 1, noise(seed));

			rotateY(PI * prln);
			rotateZ(PI * prln);
			translate(this.r, 0, 0);

			sphere(prln * this.max, 40);

			translate(-this.r, 0, 0);
			rotateY(-(PI * prln));
			rotateZ(-(PI * prln));
		}
		return this;
	}

	render() {
		return this.update().display();
	}
}