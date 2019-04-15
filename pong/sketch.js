let balls = [],
	paddles = [];
let score = [0, 0];
let scoreBoards = [];

let btn_1, btn_2;
let spd = 4,
	dir;

let isDead = false;

function setup() {
	createCanvas(800, 600);
	smooth();
	btn_2 = createButton('New Game');
	btn_2.mousePressed(newGame);
	btn_2.position(width * 0.01, 15);
	rectMode(CENTER);
	ellipseMode(CENTER);

}

function draw() {
	background(51);
	push();
	noFill();
	stroke(33);
	strokeWeight(3);
	rect(width >> 1, height >> 1, width + 30, height - 4);
	pop();
	for (const ball of balls) ball.run();
	for (const paddle of paddles) paddle.run();
	for (let i = 0; i < scoreBoards.length; i++) {
		scoreBoards[i].display(score[i]);
	}
}

function createBall() {
	dir = floor(random(4));
	let theta = 0;

	switch (dir) {
		case 0:
			spd *= 1;
			theta = 4;
			break;
		case 1:
			spd *= -1;
			theta = 4
			break;
		case 2:
			spd *= -1;
			theta = -4;
			break;
		case 3:
			spd *= 1;
			theta = -4;
			break;

		default:
			break;

	}
	if (!isDead) {
		for (let i = 0; i < 1; i++) {
			balls[i] = new Ball(width >> 1, height >> 1, spd, theta, 3);
		}
	}
	isDead = true;
}

function newGame() {
	btn_1 = createButton('New Ball');
	btn_1.mousePressed(createBall);
	btn_1.position(width * 0.13, 15);
	for (let i = 0; i < 2; i++) {
		if (i < 1) {
			paddles[i] = new Paddle(width * 0.1, height >> 1, 50, 100, 65, 83, 'blue');
		} else {
			paddles[i] = new Paddle(width * 0.9, height >> 1, 50, 100, 75, 76, 'red');
		}
	}

	for (let i = 0; i < 2; i++) {
		if (i < 1) {
			scoreBoards[i] = new ScoreBoard(width * 0.2, height * 0.2);
		} else {
			scoreBoards[i] = new ScoreBoard(width * 0.8, height * 0.2);
		}
		score[i] = 0;
	}

	for (const ball of balls) {
		isDead = false;
		balls.splice(0, balls.length);
	}
}

class Ball {
	constructor(_x, _y, _vx, _vy, _r) {
		this.pos = createVector(_x, _y);
		this.vel = createVector(_vx, _vy);
		this.acc = createVector();
		this.r = _r;
		this.history = [];
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		let v = createVector(this.pos.x, this.pos.y);
		this.history.push(v);

		if (this.history.length >= 13) {
			this.history.splice(0, 1);
		}

		return this;
	}

	display() {
		for (let i = 0; i < this.history.length; i++) {
			let pos = this.history[i];
			push();
			noStroke();
			fill(217, i * 20);
			ellipse(pos.x, pos.y, i + this.r);
		}

		return this;
	}

	bounds() {
		if (
			(this.pos.x >= paddles[0].pos.x - ((paddles[0].res.x * 0.5)) - 1) &&
			(this.pos.x <= paddles[0].pos.x + (paddles[0].res.x * 0.5)) &&
			(this.pos.y >= paddles[0].pos.y - (paddles[0].res.y * 0.5)) &&
			(this.pos.y <= paddles[0].pos.y + (paddles[0].res.y * 0.5)) ||
			(this.pos.x >= paddles[1].pos.x - (paddles[1].res.x * 0.5)) &&
			(this.pos.x <= paddles[1].pos.x + ((paddles[1].res.x * 0.5)) + 1) &&
			(this.pos.y >= paddles[1].pos.y - (paddles[1].res.y * 0.5)) &&
			(this.pos.y <= paddles[1].pos.y + (paddles[1].res.y * 0.5))
		) {
			this.vel.x *= -1;
		}

		if (this.pos.y <= 0 || this.pos.y >= height) {
			this.vel.y *= -1;
		}

		return this;
	}

	score() {
		if (this.pos.x < 0) {
			balls.splice(0, 1);
			score[0]++;
			isDead = false;
		}

		if (this.pos.x > width) {
			balls.splice(0, 1);
			score[1]++;
			isDead = false;
		}
		return this;
	}

	run() {
		return this.update().display().bounds().score();
	}
}

class Paddle {
	constructor(_x, _y, _w, _h, _u, _d, _col) {
		this.pos = createVector(_x, _y);
		this.vel = createVector();
		this.acc = createVector();
		this.res = createVector(_w, _h);
		this.k = createVector(_u, _d);
		this.col = _col;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		if (keyIsDown(this.k.x)) {
			this.vel.y = -13;
		} else if (keyIsDown(this.k.y)) {
			this.vel.y = 13;
		}

		if (!keyIsDown(this.k.x) && this.vel.y < 0) {
			this.vel.y *= -0.3;
		} else if (!keyIsDown(this.k.y) && this.vel.y > 0) {
			this.vel.y *= -0.3;
		}

		return this;
	}

	display() {
		push();
		noStroke();
		fill(this.col);
		rect(this.pos.x, this.pos.y, this.res.x, this.res.y);
		pop();

		return this;
	}

	bounds() {
		if (this.pos.y <= this.res.y * 0.5) {
			this.pos.y = this.res.y * 0.5;
		}

		if (this.pos.y >= height - (this.res.y * 0.5)) {
			this.pos.y = height - (this.res.y * 0.5);
		}

		return this;
	}

	run() {
		return this.update().display().bounds();
	}
}

class ScoreBoard {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
	}

	display(_score) {
		this.score = _score;
		push();
		noStroke();
		fill(217);
		textFont('Avenir');
		textSize(42);
		textAlign(CENTER, CENTER);
		textStyle(BOLD);
		text(this.score, this.pos.x, this.pos.y);
	}
}