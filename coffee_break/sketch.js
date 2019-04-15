let coffee, steam;

function setup() {
	createCanvas(375, 667);

	coffee = new Coffee();
	steam = new Steam(width * 0.4, height * 0.4);
}

function draw() {
	background(51);
	coffee.display();
	steam.run();
}

class Coffee {
	constructor() {

	}

	display() {
		fill(217);
		noStroke();
		textAlign(CENTER);
		textFont('Source Code Pro');
		textSize(133);
		text('[_]', width * 0.5, height * 0.6);
		textSize(83);
		text(')', width * 0.8, height * 0.58);
	}
}

class Steam {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
		this.size = 60;
	}

	display() {
		fill(217);
		noStroke();
		textAlign(CENTER);
		textFont('Source Code Pro');
		textSize(this.size);
		text(')', this.pos.x + (this.size / 1.3), this.pos.y - this.size);
		text('(', this.pos.x + 25, this.pos.y);
	}

	run() {
		this.display();
	}
}