let izzms = [];
let mic, miclvl;

function setup() {
	createCanvas(windowWidth, windowHeight, P2D);

	let p = new Izzm();

	for (let i = 0; i < 200; i++) {
		izzms[i] = new Izzm();
	}

	mic = new p5.AudioIn()
	mic.start();
	miclvl = 0;
}

function draw() {

	background(0);

	miclvl = constrain(lerp(miclvl, mic.getLevel() * 1.5, .6), 0, 1);

	for (let i = 0; i < izzms.length; i++) {
		izzms[i].display();
		izzms[i].update();
		izzms[i].setBearing(miclvl * 50);
		izzms[i].reappear(width / 2, height / 2);
	}
}

function Izzm() {

	this.pos = createVector(width / 2, height / 2);
	this.vel = createVector(random(-3, 3), random(-3, 3));
	this.acc = createVector(1, 1);

	this.shape = int(random(3));

	this.rot = random(0, 45);
	this.rotInc = random(-1, 1);

	this.diam = random(10, 30);
	this.rd = random(33);

	this.alpha = random(33, 42);
	this.color = color(this.pos.x, random(3), 255, this.alpha);

	this.display = function() {
		noStroke();
		fill(this.color);

		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.rot);

		if (this.shape > 50) {
			rectMode(CENTER);
			rect(mouseX, mouseY, this.diam, this.diam + this.pos.x);
		} else {
			ellipseMode(CENTER);
			ellipse(0, 0, this.diam, this.diam + this.rd);
		}

		pop();

		this.rot += this.rotInc;
	}

	this.update = function() {
		this.acc.set(random(-2, 2), random(-2, 2));
		this.vel.add(this.acc.x, this.acc.y);
		this.pos.add(this.vel.x, this.vel.y);

		this.diam -= this.rd;
		this.diam = constrain(this.diam, 0, 5);
	}

	this.reappear = function(_x, _y) {

		//check if off canvas or too small)
		let outside = boolean((this.pos.x > width + this.diam || this.pos.x < 0 - this.diam &&
				this.pos.y > height + this.diam || this.pos.y < 0 - this.diam) ||
			this.diam < 1)

		//reconstruct izzm
		if (outside) {
			this.pos.set(_x, _y);
			this.vel.set(random(-2, 2), random(-2, 2));
			this.acc.set(1, 1);

			this.rot = random(0, 45);
			this.rotInc = random(-1, 1);

			this.diam = random(10, 30);
			this.rd = random(20);

			this.shape = int(random(51));
		}
	}

	this.setBearing = function(_explode) {
		this.diam += _explode;
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}