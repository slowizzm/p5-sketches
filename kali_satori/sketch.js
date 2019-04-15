let chakras = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 3; i++) {
		let p = new Chakra();
		chakras.push(p);
	}
	noCursor();
}

function draw() {
	background(51, 133);
	for (let i = 0; i < chakras.length; i++) {
		chakras[i].display();
	}
}

class Chakra {
	constructor() {
		this.circleX = 0;
		this.len = 0;
		this.mit = 0;
		this.mut = 0;
		this.pat = 0;
		this.offset = 0;
		this.rots = 0;
		this.res = 67;
		this.spd = 33;
		this.scl = 0;
	}
	display() {
		this.circleX = map(mouseX, 0, width, 33, 480);
		ellipseMode(CENTER);
		stroke(233, 133, 233);
		noFill();

		ellipse(width / 2, height / 2, this.circleX, this.circleX);
		ellipse(width / 2, height / 2, this.circleX - 10, this.circleX - 10);
		ellipse(width / 2, height / 2, this.circleX - 20, this.circleX - random(20));
		ellipse(width / 2, height / 2, this.circleX - 30, this.circleX - 30);
		ellipse(width / 2, height / 2, this.circleX - random(40), this.circleX - 40);
		ellipse(width / 2, height / 2, this.circleX - 50, this.circleX - 50);
		ellipse(width / 2, height / 2, this.circleX - 60, this.circleX - random(60));
		ellipse(width / 2, height / 2, this.circleX - 70, this.circleX - 70);
		ellipse(width / 2, height / 2, this.circleX - random(80), this.circleX - 80);
		ellipse(width / 2, height / 2, this.circleX - 90, this.circleX - 90);
		ellipse(width / 2, height / 2, this.circleX - 100, this.circleX - random(100));
		ellipse(width / 2, height / 2, this.circleX - 110, this.circleX - 110);
		ellipse(width / 2, height / 2, this.circleX - random(120), this.circleX - 120);
		ellipse(width / 2, height / 2, this.circleX - 130, this.circleX - 130);
		ellipse(width / 2, height / 2, this.circleX - 140, this.circleX - random(140));
		ellipse(width / 2, height / 2, this.circleX - 150, this.circleX - 150);
		ellipse(width / 2, height / 2, this.circleX - random(160), this.circleX - 160);
		ellipse(width / 2, height / 2, this.circleX - 170, this.circleX - 170);
		ellipse(width / 2, height / 2, this.circleX - 180, this.circleX - random(180));
		ellipse(width / 2, height / 2, this.circleX - 190, this.circleX - 190);
		ellipse(width / 2, height / 2, this.circleX - random(200), this.circleX - 200);
		ellipse(width / 2, height / 2, this.circleX - 210, this.circleX - 210);
		ellipse(width / 2, height / 2, this.circleX - 220, this.circleX - random(220));
		ellipse(width / 2, height / 2, this.circleX - 230, this.circleX - 230);
		ellipse(width / 2, height / 2, this.circleX - random(240), this.circleX - 240);
		ellipse(width / 2, height / 2, this.circleX - 250, this.circleX - 250);
		ellipse(width / 2, height / 2, this.circleX - 260, this.circleX - random(260));
		ellipse(width / 2, height / 2, this.circleX - 270, this.circleX - 270);
		ellipse(width / 2, height / 2, this.circleX - random(280), this.circleX - 280);
		ellipse(width / 2, height / 2, this.circleX - 290, this.circleX - 290);
		ellipse(width / 2, height / 2, this.circleX - 300, this.circleX - random(300));

		this.len = map(mouseX, 0, width, 13, 33);
		this.mit = map(mouseX, 0, width, -77, 77);
		this.mut = map(mouseY, 0, height, 2, 22);

		push();
		translate(width / 2, height / 2);
		this.rots = 0;
		for (let i = 0; i < this.res + 1; i++) {
			push();
			this.offset = (TWO_PI / this.res) * i;
			this.pat = map(cos(this.scl - this.offset * this.mit), 0.001, 1, 3, this.len);

			stroke(133, 133, 223);
			strokeWeight(1);
			fill(100, 255, 210);
			rotate(this.rots);
			for (let j = 0; j < this.pat; j++) {
				ellipse(0.03 + j * 7, this.mut, 3 + j, 0.3 * j);
				point(0.03 + j * random(77), this.mut, 3 + j, 0.3 * j);
				point(0.03 + j * 7, this.mut, 3 + j, 0.3 * j);
			}
			pop();
			this.rots = (TWO_PI / this.res) * i;
		}
		pop();

		this.scl += (TWO_PI / this.spd);
	}
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}