let particles = [];
let radius = 500;


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	colorMode(HSB, 360, 100, 100, 100);
	for (let i = 0; i < 333; i++) {
		particles[i] = new Particles(0, 0, 0, random(360), random(360), random(0.01, 0.2), random(5, 20));
	}

}

function draw() {
	background(200, 50, 20);
	push();
	translate(0, 0, -500);

	rotateY(frameCount * 0.005);
	rotateZ(frameCount * 0.0125);

	ambientLight(20, 90, 82);
	directionalLight(350, 90, 95, 0, 0, -1);
	directionalLight(350, 90, 25, 1, 0, 0);
	directionalLight(50, 95, 100, 0, 1, 0);
	directionalLight(280, 100, 95, 0, -1, 0);




	push();
	pointLight(200, 100, 10, 0, 0, 0);
	pop();

	for (let i = 0; i < particles.length; i++) {
		particles[i].render();
	}
	pop();

	orbitControl();
}

class Particles {
	constructor(_x, _y, _z, _angleY, _angleZ, _spd, _s) {
		this.pos = createVector(_x, _y, _z);
		this.angle = createVector(_angleY, _angleZ);
		this.s = radians(this.angle.x);
		this.t = radians(this.angle.y);
		this.spd = createVector(_spd, _spd + _spd / 2);
		this.dir = random(50);
		this.size = _s;
	}

	update() {
		this.pos.x = radius * cos(this.s) * sin(this.t);
		this.pos.y = radius * sin(this.s) * sin(this.t);
		this.pos.z = radius * cos(this.t);
		this.s += this.spd.x / 10 * this.dir;
		this.t += this.spd.y / 10 * this.dir;

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
		specularMaterial(355, 10, 100);
		sphere(this.size, 3, 3);
		pop();

		return this;
	}

	render() {
		return this.update().display();
	}
}