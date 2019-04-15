let rainDrops = [];

function setup() {
  createCanvas(400, 400);
	
	for (let i = 0; i < 7; i++) {
			let r = new RainDrop(random(width*0.1,width*0.9), random(height*0.1,height*0.9),random(1,7));
		rainDrops.push(r);
	}
}

function draw() {
  background(51);
	
	for (let i = 0; i < rainDrops.length; i++) {
		rainDrops[i].update();
		rainDrops[i].display();
	}
}

class RainDrop {
	constructor(_x,_y,_r) {
		this.x = _x;
		this.y = _y;
		this.r = _r;
		this.finalSize = random(33,42);
	}
	
	update() {
		this.r += 3;
		
		if (this.r >= this.finalSize) {
				this.r = this.finalSize;
		}
	}
	
	display() {
		stroke(100,200,200);
		noFill();
		ellipse(this.x,this.y,this.r,this.r);
	}
}