function setup() {
	createCanvas(1000, 600);
	colorMode(HSB, 360, 100, 100, 100);
	blendMode(ADD);
	angleMode(DEGREES);
	
	worm = new Worm(width*0.5,height*0.5,width,height,random(45, 300),floor(random(7, 15)));
}

function draw() {
	blendMode(NORMAL);
	background(140, 70, 100, 100);
	blendMode(ADD);
	
	worm.render();
}

class Worm {
	constructor(_x,_y,_w,_h,_a,_l) {
		this.pos = createVector();
		this.vel = createVector(1, 1);
		this.acc = createVector();
		this.res = createVector(_w,_h);
		this.len = _l;
		this.static = createVector();
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		return this;
	}

	bg() {
		for (let i = 0; i < 10000; i++) {
			this.static.x = random(this.res.x);
			this.static.y = random(this.res.y);
			stroke(0, 0, 100);
			point(this.static.x, this.static.y);
		}
		
		return this;
	}

	body() {
		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.angle);
		beginShape();

		for (let i = 0; i < this.len; i++) {
			let nx = map(i, 0, this.len - 1, 0, 133);
			let ny = sin(i * 33 + frameCount * 3) * 33;
			vertex(nx, ny);

			noStroke();
			fill(50, 20, 100, 40);
			ellipse(nx, ny, 13,23);
		}
		noFill();
		strokeWeight(5);
		stroke(0, 0, 100);
		endShape();
		pop();
		
		return this;
	}

	bounds() {
		if (this.pos.x <= 0 || this.pos.x >= width) {
			this.vel.x *= -0.9;
			this.acc.mult(2);
		}
		
		if (this.pos.y <= 0 || this.pos.y >= height) {
			this.vel.y *= -0.9;
			this.acc.mult(2);
		}
		return this;
	}

	render() {
		return this.update().bg().body().bounds();
	}
}