let system = [];
let speed = 0.4;
let r = 5;
let time_h, time_m, time_s;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 33; i++) {
		let s = new Particle(random(width * 0.5 - 33, width * 0.5 + 33), height * 0.50);
		system.push(s);
	}
}

function draw() {
	background(51);

	time_h = hour();
	time_m = minute();
	time_s = second();

	for (let i = 0; i < system.length; i++) {
		system[i].run();
	}

	let s = new Particle(random(width * 0.5 - 33, width * 0.5 + 33), height * 0.5);
	system.push(s);
}

class Particle {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(random(-3, 3), random(-3, 3));
		this.acc = createVector(random(-0.07, 0.07), random(-0.07, 0.07));
		this.lifespan = 255;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.lifespan -= 2;
	}

	display() {
		noStroke();
		fill(255 - time_h, time_h);
		ellipse(this.pos.x - width / 3, this.pos.y, 33 - (this.lifespan / 3));
		fill(255 - time_m, time_m);
		ellipse(this.pos.x, this.pos.y, 33 - (this.lifespan / 3));
		fill(255 - time_s, time_s);
		ellipse(this.pos.x + width / 3, this.pos.y, 33 - (this.lifespan / 3));
	}

	isDead() {
		if (this.lifespan <= 0) {
			system.splice(0, 1);
		}
	}

	run() {
		this.update();
		this.display();
		this.isDead();
	}
}