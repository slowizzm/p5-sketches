let n;
let c = 3;
let imageScale = 4;
let px = 400;
let py = 400;
let dots = [];

function preload() {
	img = loadImage("https://picsum.photos/g/100/100/?image=1014");
}

function setup() {
	createCanvas(400, 440);
	angleMode(DEGREES);
	noStroke();

	generateDots(2);
}

function sliderUpdate() {
	getValue = int(sizeSlider.value());
	generateDots(getValue);
}

function draw() {
	background(255);
	for (let i = 0; i < dots.length; i++) {
		let d = dots[i];
		d.update();
		d.display();
		d.behaviors();
	}
}

function generateDots(dotThreshold) {
	n = 0;
	dots.length = 0;

	for (let PLYF = 0; PLYF < 2000; PLYF++) {
		let a = n * 333;
		let r = c * sqrt(n);
		let x = r * cos(a) + width / 2;
		let y = r * sin(a) + height / 2;
		let px = floor(x / imageScale);
		let py = floor(y / imageScale);
		let col = img.get(px, py);
		fill(0);
		n++;

		let greyimageScaleefs = [
			[1, 1, 1],
			[0.133, 0.333, 0.067]
		];
		let currentGreyscale = 0;
		let cR = 255 - (red(col) * greyimageScaleefs[currentGreyscale][0]);
		let cG = 255 - (green(col) * greyimageScaleefs[currentGreyscale][1]);
		let cB = 255 - (blue(col) * greyimageScaleefs[currentGreyscale][2]);
		let greyscale = round(cR + cG + cB);
		let radius = greyscale / 100;
		if (radius > dotThreshold) {
			dots.push(new Dot(x, y, radius));
		}
	}
}

class Dot {
	constructor(x, y, m) {
		this.pos = createVector(x, y);
		this.target = createVector(x, y);
		this.vel = p5.Vector.random2D();
		this.mass = m;
		this.acc = createVector(0, 0);
		this.r = 8;
		this.maxspeed = 10;
		this.maxforce = 1;
	}

	applyForce(force) {
		this.acc.add(force);
	}

	update() {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
	}

	display() {
		noStroke();
		fill("black");
		ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
	}

	behaviors() {
		let arrive = this.arrive(this.target);
		let mouse = createVector(mouseX, mouseY);
		let flee = this.flee(mouse);

		arrive.mult(1);
		flee.mult(5);

		this.applyForce(arrive);
		this.applyForce(flee);
	}

	arrive(target) {
		let desired = p5.Vector.sub(target, this.pos);
		let d = desired.mag();
		let speed = this.maxspeed;
		if (d < 100) {
			speed = map(d, 0, 100, 0, this.maxspeed);
		}
		desired.setMag(speed);
		let steer = p5.Vector.sub(desired, this.vel);
		steer.limit(this.maxforce);
		return steer;
	}

	flee(target) {
		let desired = p5.Vector.sub(target, this.pos);
		let d = desired.mag();
		if (d < 50) {
			desired.setMag(this.maxspeed);
			desired.mult(-1);
			let steer = p5.Vector.sub(desired, this.vel);
			steer.limit(this.maxforce);
			return steer;
		} else {
			return createVector(0, 0);
		}
	}
}