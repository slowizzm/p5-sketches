class Bokeh {
	constructor(_f) {
		this.fade = _f;
	}

	init() {
		this.life = random(333, 666);
		this.size = random(3, 13);
		this.pos = createVector(random(windowWidth), random(windowHeight));
		this.vel = createVector(random(-(1), 1), random(-(1), 1));
		this.lifespan = 0;


		this.col_r = random(100);
		this.col_g = random(10);
		this.col_b = random(255);
		this.alpha = random(100);
		this.viewAlpha = this.alpha;
		this.fadeAlpha = this.alpha / (this.fade * this.life);
		this.fadeThresh = this.life * this.fade;
		this.fadeIn = this.fade * this.life;
		this.fadeOut = (1 - this.fade) * this.life;
	}

	dead() {
		if (this.lifespan < this.fadeOut) {
			this.lifespan = this.fadeOut;
		}
		if (this.lifespan <= 0) {
			this.init();
		}
	}

	display() {
		this.alphaAdjust = 1;
		if (this.lifespan < this.fadeIn) {
			this.alphaAdjust = 1 - (this.fadeIn - this.lifespan) / this.fadeThresh;
		} else if (this.lifespan > this.fadeOut) {
			this.alphaAdjust = 1 - (this.lifespan - this.fadeOut) / this.fadeThresh;
		}
		this.alpha = this.viewAlpha * this.alphaAdjust;

		noStroke();
		fill(this.col_r, this.col_g, this.col_b, this.alpha);
		for (let i = 0; i < 13; i++) {
			ellipse(this.pos.x, this.pos.y, this.size * i, this.size * i);
		}
		return this;
	}

	update() {
		this.lifespan += 1;
		if (this.lifespan > this.life) {
			this.init();
			return this;
		}
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.bounds();

		return this;
	}

	bounds() {
		if (this.pos.x > width || this.pos.x < 0 ||
			this.pos.y > height || this.pos.y < 0) {
			this.dead();
			return this;
		}
	}

	render() {
		return this.display().update();
	}
}