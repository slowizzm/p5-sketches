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
        for (let i = 0; i < 200; i+=10) {
          if (i %2) {
          ellipse(width/2,height/2,this.circleX - i, this.circleX - random(i));
          } else {
            ellipse(width/2,height/2,this.circleX - random(i), this.circleX - i);
          }
        }

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