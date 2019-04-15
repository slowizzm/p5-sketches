//prototype for a student

let hitPoints = [];

function setup() {
	createCanvas(window.innerWidth-4,window.innerHeight-4);
	
	for (let i = 0; i < 333; i++) {
		let hp = new HitPoint(random(width),random(height),33);
		hitPoints.push(hp);
	}
}

function draw() {
	background(51);
	
	for (let i = 0; i < hitPoints.length; i++) {
		hitPoints[i].run();
	}
}

function HitPoint(_x,_y,_r) {
	this.pos = createVector(_x, _y);
	this.r = _r;

	this.update = function() {
		this.d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
		if (this.d <= this.r) {
			if (mouseIsPressed) {
			fill('#C9BC0F');
			}
		} else {
			fill('#28726E');
		}
	}

	this.display = function() {
		noStroke();
		ellipse(this.pos.x,this.pos.y,this.r);
	}

	this.run = function() {
		this.update();
		this.display();
	}
}