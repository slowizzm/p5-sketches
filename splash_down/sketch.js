let drop = [];
let splash = [],
	NUM_SPLASH = 3;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	for (let i = 0; i < 1; i++) {
		let d = new Drop(random(33, width - 33), -33, random(1.0, 3.0), 33);
		drop.push(d);
	}
}

function draw() {
	fill(51, 150);
	rect(4, 4, width - 4, height - 4);

	for (let i = 0; i < drop.length; i++) {
		drop[i].run();
	}

	for (let i = 0; i < drop.length; i++) {
		if (drop[i].isDead) {
			for (let j = 0; j < 13; j++) {
				let s = new Splash(drop[i].pos.x, drop[i].pos.y, random(-sin(1) * 3, sin(1) * 3), random(-7, -3), 33);
				splash.push(s);
			}
			for (let k = 0; k < splash.length; k++) {
				splash[k].run(drop[i].pos.x, drop[i].pos.y);
			}
		}
	}

	if (drop.length <= 0) {
		for (let i = 0; i < 1; i++) {
			let d = new Drop(random(33, width - 33), -33, random(1.0, 3.0), 33);
			drop.push(d);
		}
	}
}

// function mousePressed() {
// 	for (let i = 0; i < NUM_SPLASH; i++) {
// 		let drop = new Splash(mouseX, mouseY, random(-sin(1), sin(1)), random(-7, -3), 33);
// 		splash.push(drop);
// 	}
// }

class Splash {
	constructor(_x, _y, _vx, _vy, _r) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(_vx, _vy);
		this.acc = createVector();
		this.r = _r;
		this.lifespan = this.r;
		this.isDead = false;
	}

	update(_x, _y) {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.lifespan -= 1;
		this.r = this.lifespan;
	}
	display() {
		noStroke();
		fill(217, this.lifespan * 2);
		ellipse(this.pos.x, this.pos.y, this.r);
	}

	splashLife() {
		if (this.lifespan <= 0) {
			this.isDead = true;
		} else {
			this.isDead = false;
		}
	}

	destroySplash() {
		if (this.isDead) {
			splash.splice(0, 1);
		}
	}

	run(_x, _y) {
		this.update();
		this.display(_x, _y);
		this.splashLife();
		this.destroySplash();
	}
}

class Drop {
	constructor(_x, _y, _vy, _r) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(0, _vy);
		this.acc = createVector();
		this.r = _r;
		this.isDead = false;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	display() {
		noStroke();
		fill(217);
		ellipse(this.pos.x, this.pos.y, this.r - (this.vel.y * 2), this.r);
	}

	splashZone() {
		if (this.pos.y >= random(height * 0.3, height * 0.4) && this.pos.y <= height * 0.7) {
			this.isDead = true;
		}
	}

	dead() {
		if (this.pos.y >= height + 333) {
			drop.splice(0, 1);
		}
	}

	run() {
		this.update();
		this.display();
		this.splashZone();
		this.dead();
	}
}