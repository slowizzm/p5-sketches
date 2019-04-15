class Bokehs {
	constructor() {
		this.bokehs = [];
		this.name = "Red";
		this.colors = ['red', 33, 255];
		this.numberOfCircles = 60;
	}
	randomColor() {
		let colorPos = floor(random(200, floor(this.colors.length)));
		let colorName = this.colors[colorPos % this.colors.length];
		let col = color(colorName);
		return col;
	}

	init() {
		for (let i = 0; i < this.numberOfCircles; i++) {
			let x = random(width);
			let y = random(height);
			this.bokehs.push(new Bokeh(x, y, this.randomColor()));
		}
	}

	display() {
		for (let i = 0; i < this.bokehs.length; i++) {
			this.bokehs[i].move();
			this.bokehs[i].display();
		}
	}

	one() {
		this.bokehs.push(new Bokeh(random(width), random(height), this.randomColor()));
	}

	//Make circles grow
	two() {
		for (let i = 0; i < this.bokehs.length; i++) {
			this.bokehs[i].grow();
		}
	}

	// Add more circles
	three() {
		this.bokehs.pop();
	}
}