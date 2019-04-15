let totalBalls = 33;
let izzms = [];
let targetX, targetY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	smooth();
	background(0);
	targetX = width / 2;
	targetY = height / 2;
	fill(color(255, 0, 0));
	for (let i = 0; i < totalBalls; i++) {
		let izz = new Izzm(random(width), random(height), 2, 2, 13);
		izzms.push(izz);
	}
};

function draw() {
	background(51);
	fill(255);
	for (let i = 0; i < izzms.length; i++) {
		izzms[i].run();
	}
	collision();
}


function collision() {
	for (let i = 0; i < izzms.length; i++) {
		for (let j = i + 1; j < izzms.length; j++) {
			let dx = izzms[j].pos.x - izzms[i].pos.x;
			let dy = izzms[j].pos.y - izzms[i].pos.y;
			let dist = sqrt(dx * dx + dy * dy);
			if (dist < (izzms[j].r + izzms[i].r)) {
				let normalX = dx / dist;
				let normalY = dy / dist;
				let midpointX = (izzms[i].pos.x + izzms[j].pos.x) / 2;
				let midpointY = (izzms[i].pos.y + izzms[j].pos.y) / 2;
				izzms[i].pos.x = midpointX - normalX * izzms[i].r;
				izzms[i].pos.y = midpointY - normalY * izzms[i].r;
				izzms[j].pos.x = midpointX + normalX * izzms[j].r;
				izzms[j].pos.y = midpointY + normalY * izzms[j].r;
				let dVector = (izzms[i].vel.x - izzms[j].vel.x) * normalX;
				dVector += (izzms[i].vel.y - izzms[j].vel.y) * normalY;
				let dvx = dVector * normalX;
				let dvy = dVector * normalY;
				izzms[i].vel.x -= dvx;
				izzms[i].vel.y -= dvy;
				izzms[j].vel.x += dvx;
				izzms[j].vel.y += dvy;
			}
		}
	}
}

class Izzm {
	constructor(_x, _y, _vx, _vy, _r) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(_vx, _vy);
		this.acc = createVector();
		this.r = _r;
		this.col = 255;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	display() {
		fill(this.col);
		ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
	}

	edges() {
		if (this.pos.x <= this.r) {
			this.pos.x = this.r;
			this.vel.x *= -1;
		}
		if (this.pos.x >= width - (this.r)) {
			this.pos.x = width - (this.r);
			this.vel.x *= -1;
		}
		if (this.pos.y <= this.r) {
			this.y = this.r;
			this.vel.y *= -1;
			this.col = 0;
			this.r-=0.9;
		}
		if (this.pos.y >= height - (this.r)) {
			this.pos.y = height - (this.r);
			this.vel.y *= -1;
		}
	}

	run() {
		this.update();
		this.display();
		this.edges();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}