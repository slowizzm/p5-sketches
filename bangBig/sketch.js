let izzm = [],
	x = 0,
	y = 1,
	NUM_IZZM = 333;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < NUM_IZZM; i++) {
		izzm[i] = new Izzm();
	}
	background(51);
}

function draw() {
	//background(51);
	for (let i = 0; i < NUM_IZZM; i++) {
		izzm[i].update();
		izzm[i].display();
	}
}

function Izzm() {
	this.pos = createVector(width / 2, height / 2);
	this.vel = createVector(0, 0);

	this.update = function() {
		this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	this.display = function() {
		if (y < 333) {
			fill(255, 133, 0, 0);
		} else {
			fill(x, 0, 0, 1);
		}
		stroke(151, 51, 255, 1);
		noFill();
// 		push();
		
// 		//translate(width * 0.8, height * 0.5);
// 		rotate(frameCount / 100.0);
// 		this.polygon(this.pos.x, this.pos.y, y, 6);
// 		pop();
		
		// push();
		// stroke(13, 13, 255, 1)
		// noFill();
		// translate(width * 0.8, height * 0.6);
		// rotate(frameCount / -100.0);
		// this.polygon(this.pos.x, this.pos.y, 13, 6);
		// pop();
		
		rect(this.pos.x, this.pos.y, y, y);
		x++;
		y -= 0.003;

		if (y = -100) {
			y = 33;
		}
	}

	this.polygon = function(x, y, radius, npoints) {
		let angle = TWO_PI / npoints;
		beginShape();
		for (let a = 0; a < TWO_PI; a += angle) {
			let sx = x + cos(a) * radius;
			let sy = y + sin(a) * radius;
			vertex(sx, sy);
		}
		endShape(CLOSE);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}