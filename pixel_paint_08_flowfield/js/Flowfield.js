class FlowField {
	constructor(r) {
		this.field = [];

		this.res = r;
		this.cols = width / this.res;
		this.rows = height / this.res;
	}

	init() {
		noiseSeed(int(random(10000)));
		let xoff = 0;
		for (let i = 0; i < this.cols; i++) {
			let yoff = 0;
			this.field[i] = [];
			for (let j = 0; j < this.rows; j++) {
				let theta = map(noise(xoff, yoff), 0, 1, -TWO_PI, TWO_PI);
				this.field[i][j] = createVector(cos(theta), sin(theta));
				yoff += 0.1;
			}
			xoff += 0.1;
		}

	}

	render() {
		for (let i = 0; i < this.cols; i++) {
			for (let j = 0; j < this.rows; j++) {
				this.draw_vector(this.field[i][j], i * this.res, j * this.res, this.res);
			}
		}
	}

	draw_vector(v, x, y, sc) {
		stroke(100, 50);
		let len = v.mag() * sc;

		push();
		translate(x, y);
		rotate(v.heading());
		line(0, 0, len, 0);
		pop();
	}

	lookup(look_v) {
		let col2 = int(constrain(look_v.x / this.res, 0, this.cols - 1));
		let row2 = int(constrain(look_v.y / this.res, 0, this.rows - 1));
		return (this.field[col2][row2].copy());
	}
}