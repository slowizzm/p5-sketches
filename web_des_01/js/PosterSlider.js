class PosterSlider {
	constructor(_x, _y, _s) {
		this.pos = createVector(_x, _y);
		this.vel = createVector();
		this.acc = createVector();
		this.s = _s;
		this.panePos = createVector(this.pos.x + (this.s * 0.5), height * 0.5);
		this.col = 33;
		this.isLeft = false;
		this.isRight = false;
		this.arrowLeftPos = createVector();
		this.arrowRightPos = createVector();
		this.isSlide = true;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	panelBG() {
		push();
		translate(0, height * 0.01);
		push();
		rectMode(CENTER);
		noStroke();
		fill(237, 196, 68);
		rect(width * 0.5, height * 0.5, width, 100);
		for (let x = 0; x < width; x += 10) {
			for (let y = 300; y < height - 300; y += 10) {
				fill(157, 50);
				rect(x, y, 3, 3);
			}
		}
		pop();
		pop();
	}

	panelOne(_x) {
		push();
		translate(this.pos.x + _x, this.pos.y);
		imageMode(CENTER);
		image(posters[0], -(this.s + this.s / 2) - 10, 0, this.s, this.s + (this.s * 0.5));
		image(posters[1], -this.s / 2 - 2.5, 0, this.s, this.s + (this.s * 0.5));
		image(posters[2], this.s / 2 + 2.5, 0, this.s, this.s + (this.s * 0.5));
		image(posters[3], (this.s + this.s / 2) + 10, 0, this.s, this.s + (this.s * 0.5));
		pop();
	}

	panelTwo(_x) {
		push();
		translate(this.pos.x + _x, this.pos.y);
		imageMode(CENTER);
		image(posters[4], -(this.s + this.s / 2) - 10, 0, this.s, this.s + (this.s * 0.5));
		image(posters[5], -this.s / 2 - 2.5, 0, this.s, this.s + (this.s * 0.5));
		image(posters[6], this.s / 2 + 2.5, 0, this.s, this.s + (this.s * 0.5));
		image(posters[7], (this.s + this.s / 2) + 10, 0, this.s, this.s + (this.s * 0.5));
		pop();
	}

	arrowRight() {
		this.arrowRightPos = createVector(width * 0.9, height * 0.5);
		push();
		translate(this.arrowRightPos.x, this.arrowRightPos.y);
		rotate(radians(0));
		strokeWeight(3);
		noStroke();
		push();
		translate(3, 0);
		fill(33, 50);
		triangle(18, 0, 0, -24, 0, 24);
		pop();
		fill(250);
		triangle(18, 0, 0, -24, 0, 24);
		pop();
	}

	arrowLeft() {
		this.arrowLeftPos = createVector(width * 0.1, height * 0.5);
		push();
		translate(this.arrowLeftPos.x, this.arrowLeftPos.y);
		rotate(radians(180));
		strokeWeight(3);
		noStroke();
		push();
		translate(3, 0);
		fill(33, 50);
		triangle(18, 0, 0, -24, 0, 24);
		pop();
		fill(250);
		triangle(18, 0, 0, -24, 0, 24);
		pop();
	}

	stopSlide() {
		if (this.pos.x <= 0 - width / 2) {
			this.vel.x = 0;
			this.pos.x = (0 - width / 2) + 1;
			this.isSlide = true;
			this.isLeft = true;
			this.isRight = false;
		}

		if (this.pos.x >= width / 2) {
			this.vel.x = 0;
			this.pos.x = (width / 2);
			this.isSlide = true;
			this.isRight = true;
			this.isLeft = false;
		}
	}

	run(_p1, _p2) {
		this.update();
		this.panelBG();
		this.panelOne(_p1);
		this.panelTwo(_p2);
		this.stopSlide();
		this.arrowRight();
		this.arrowLeft();
	}
}