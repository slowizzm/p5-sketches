let walkers = [];
const NUM_WALKERS = 36;

function setup() {
	createCanvas(640, 360);

	for (let i = 0; i < NUM_WALKERS; i++) {
		walkers.push(new Walker());
	}
}

function draw() {
	background(51);

	for (let i = 0; i < walkers.length; i++) {
		walkers[i].render();
	}
}

class Walker {
	constructor() {
		this.pos = createVector(random(width * 0.5 - 33, width * 0.5 + 33), random(height * 0.5 - 33, height * 0.5 + 33));
		this.vel = createVector();
		this.acc = createVector();
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.pos.x += random(-1.5, 1.5);
		this.pos.y += random(-1.5, 1.5);

		return this;
	}

	display() {
		push();
		noStroke();
		fill(217, 33);
		ellipse(this.pos.x, this.pos.y, 13, 13);
		pop();
		return this;
	}

	connect() {
		for (let i = 0; i < walkers.length; i++) {
			let d = dist(this.pos.x,this.pos.y, walkers[i].pos.x,walkers[i].pos.y);

			if (d <= 100) {
				line(this.pos.x, this.pos.y, walkers[i].pos.x, walkers[i].pos.y);
			}

			//print(d);

			if (d <= 30) {
				stroke(200, 100);
				strokeWeight(1);
				this.acc.set(random(-0.001, 0.001), random(-0.001, 0.001));
			} else if (d <= 31 && d >= 60) {
				stroke(180, 100);
				this.acc.mult(-1);
				strokeWeight(2);
			} else if (d >= 200) {
				stroke(100,100);
				strokeWeight(3);
				this.pos.x = width*0.5;
				this.pos.y = height*0.5;
			}

		}


		return this;
	}

	render() {
		return this.update().display().connect();
	}
}