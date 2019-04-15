//wip

let portal = [];
let c = 255;

let prevSec;
let millisRolloverTime;
let H, M, S;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	colorMode(HSB);
	// frameRate(30);
	millisRolloverTime = 0;
	for (let i = width - 30; i > 30; i -= 60) {
		c;
		let p = new Portal(i, c, noise(c) * 13, noise(i) * 13);
		c += 3
		portal.push(p);
	}
}

function draw() {
	background(255, 100, 85, 0.5);
	H = hour();
	M = minute();
	S = second();

	for (let i = 0; i < portal.length; i++) {
		portal[i].run();
	}
}

class Portal {
	constructor(_s, _col, _vx, _vy) {
		this.pos = createVector(_vx, _vy);
		this.vel = createVector();
		this.acc = createVector();
		this.size = _s;
		this.h = _col;
		this.col = createVector(this.h, 100, 85);
	}

	//Borrowed from Golan Levin's Clock template
	countMillis() {
		if (prevSec != S) {
			millisRolloverTime = millis();
		}
		prevSec = S;
		let mils = floor(millis() - millisRolloverTime);
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.vel.normalize();
	}

	display() {
		push();
		noStroke();
		fill(this.col.x, this.col.y, this.col.z);
		translate(width * 0.5, height * 0.5);
		push();
		rotate(radians(135));
		rotate(radians(S * 6));
		rect(this.pos.x, this.pos.y, 3 - this.size, 3 + this.size);
		pop();
		push();
		fill(0, 0.1);
		ellipse(this.pos.x, this.pos.y + 1, 2.3 - this.size, 2.3 + this.size);
		pop();
		ellipse(this.pos.x, this.pos.y, 3 - this.size, 3 + this.size);
		pop();
	}

	edges() {
		if (this.pos.x <= width * 0.5 - 3 || this.pos.x >= width * 0.5 + 3) {
			this.vel.x *= -1;
		}

		if (this.pos.y <= height * 0.5 - 3 || this.pos.y >= height * 0.5 + 3) {
			this.vel.y *= -1;
		}
	}

	run() {
		this.update();
		this.countMillis();
		this.display();
		this.edges();
	}
}