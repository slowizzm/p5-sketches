let sqr = [];

function setup() {
	createCanvas(window.innerWidth-4,window.innerHeight-4);
	for (let i = 0; i < 1; i++) {
		let s = new Square(random(30));
		sqr.push(s);
	}
}

function draw() {
	background(51);
	for (let i = 0; i < sqr.length; i++) {
		sqr[i].grow();
		sqr[i].display();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function Square(_sw) {
	this.pos = createVector(width*0.5,height*0.5);
	this.size = 1;

	this.grow = function() {
		this.size++;
	};

	this.display = function() {
		stroke(217);
		noFill();
		strokeWeight(_sw);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, this.size, this.size);
	};
}

function mousePressed() {
	
	for (let i = 0; i < 1; i++) {
		let s = new Square(random(30));
		sqr.push(s);
	}
}