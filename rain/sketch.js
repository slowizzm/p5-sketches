var drop = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 200; i++) {
		drop[i] = new Drop();
	}
}

function draw() {
	clear();

	for (var i = 0; i < 200; i++) {
		drop[i].show();
		drop[i].update();
	}
}

function Drop() {
	this.x = random(0, width);
	this.y = random(0, -height);

	this.show = function() {
		noStroke();
		fill(112, 182, 234);
		ellipse(this.x, this.y, 2, 10);
	}

	this.update = function() {
		this.speed = random(5, 15);
		this.gravity = 0.85;
		this.y = this.y + this.speed * this.gravity;

		if (this.y > height) {
			this.y = random(0, -height);
		}
	}
}