let izzm;

function setup() {
  createCanvas(400, 400);
	
	izzm = new Izzm();
}

function draw() {
  clear();
	
	izzm.render();
}

class Izzm {
	constructor() {
		this.pos = createVector(0,height*0.5);
		this.vel = createVector(1,0);
		this.acc = createVector();
	}
	
	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		
		return this;
	}
	
	display() {
		push();
		noStroke();
		fill(217);
		rect(this.pos.x,this.pos.y,133,33);
		pop();
		
		
		push();
		translate(this.pos.x,this.pos.y);
		noStroke();
		fill(33);
		rect(0,0,33,133);
		pop();
		
		return this;
	}
	
	render() {
		return this.update().display();
	}
}