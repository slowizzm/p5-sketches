let origin;
let diameter = 333;
let radius = diameter*0.5;
let p = [];
const NUM_PARTICLES = 42;

function setup() {
	createCanvas(640,360);
	colorMode(HSB, 360, 100, 100);
	noStroke();
	for (let i = 0; i <= NUM_PARTICLES; i++) {
		p.push(new Particle());
		p[i].randomDirection();
	}
}

function draw() {
	clear();
	translate(width*0.5, height*0.5);
	fill(33, 0, 0, 5);
	ellipse(0, 0, diameter);

	for (let i = 0; i < p.length; i++) {
		p[i].render();
	}
}

class Particle {
	constructor() {
		this.pos = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2));
		this.vel = createVector(1,1);
		this.acc = createVector();
		this.size = 0;
		this.pos.limit(radius - 50);
		this.origin = createVector();
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		if (dist(this.pos.x, this.pos.y, this.origin.x,this.origin.y) > radius - this.size) {
			var n = createVector(this.pos.x, this.pos.y);
			n.normalize();
			n.mult(2 * n.dot(this.vel));
			this.vel.sub(n);
		}

		return this;
	}

	display() {
		fill(frameCount % 360, 100, dist(this.pos.x,this.pos.y,width*0.5,height*0.5)/7);
		this.size = 3 + atan(frameCount * 0.05);
		ellipse(this.pos.x, this.pos.y, this.size);

		return this;
	}

	randomDirection() {
		this.vel.set(random(-1, 1), random(-1, 1));
		this.vel.normalize();
		this.vel.mult(1 + random(4));
	}

	render() {
		return this.update().display();
	}
}