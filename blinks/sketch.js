let p;

function setup() {
	createCanvas(windowWidth, windowHeight);

	p = new Particles();
}

function draw() {
	background(32);

	p.display();
	fill(11, 9, 133, 90);
	rect(-4, -4, width + 4, height + 4);
	
}

function mouseClicked() {
	p.addNewParticle();
}

function mouseDragged() {
	p.addNewParticle();
}

class Particles {
	constructor() {
		this.mass = [];
		this.pos = createVector([], []);
		this.vel = createVector([], []);
		this.acc = createVector();
		this.distance = createVector();
		this.force = 0;
	}

	display() {
		for (let particleA = 0; particleA < this.mass.length; particleA++) {
			this.acc.mult(0);

			for (let particleB = 0; particleB < this.mass.length; particleB++) {
				if (particleA != particleB) {
					this.distance.x = this.pos.x[particleB] - this.pos.x[particleA];
					this.distance.y = this.pos.y[particleB] - this.pos.y[particleA];

					let d = sqrt(this.distance.x * this.distance.x + this.distance.y * this.distance.y);
					if (d < 1) d = 1;

					this.force = (d - 320) * this.mass[particleB] / d;
					this.acc.x += this.force * this.distance.x;
					this.acc.y += this.force * this.distance.y;
				}
			}
			this.vel.x[particleA] = this.vel.x[particleA] * 0.99 + this.acc.x * this.mass[particleA];
			this.vel.y[particleA] = this.vel.y[particleA] * 0.99 + this.acc.y * this.mass[particleA];
		}
		for (let particle = 0; particle < this.mass.length; particle++) {
			this.pos.x[particle] += this.vel.x[particle];
			this.pos.y[particle] += this.vel.y[particle];

			for (let i = 0; i < 133; i += 13) {
				if (frameCount % int(random(10, 90))) {
					strokeWeight(6);
					stroke(111, 9, 133, 90 - i);
					fill(164 + i, 55, 255, 133 - i);
					ellipse(this.pos.x[particle], this.pos.y[particle], (this.mass[particle] * 900) + i);
				} else {
					strokeWeight(3);
					stroke(33, 220, 33, 33 + i);
					fill(233, i, 233, 42 + i);
					ellipse(this.pos.x[particle], this.pos.y[particle], this.mass[particle] * 1000 + i / 33);
				}
			}
		}
	}

	addNewParticle() {
		this.mass.push(random(0.003, 0.03));
		this.pos.x.push(mouseX);
		this.pos.y.push(mouseY);
		this.vel.x.push(0);
		this.vel.y.push(0);
	}
}