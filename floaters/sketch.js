let izzms = [];

function setup() {
	createCanvas(window.innerWidth-4,window.innerHeight-4);
	noStroke();
}

function draw() {
	background(51);

	for (let i = 0; i < izzms.length; i++) {
		izzms[i].update();
		izzms[i].display();

		if (izzms[i].pos.y <= -13 || izzms[i].pos.y >= height + 13) {
			izzms.splice(i, 1);
		}
	}
}

function mousePressed() {
	izzms.push(new Izzm(33 * random() + 3, mouseX, mouseY));
}

function Izzm(_size, _x, _y) {
	this.size = _size;
	this.pos = createVector(_x, _y);
	this.vel = createVector(0,-1);
	this.acc = createVector();
	

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.pos.x += random(-0.2, 0.2) * this.size / 20;
		this.vel.y += random(-1 * this.size / 1333, 0.03);
	}

	this.display = function() {
		push();
		fill('#397628DD');
		ellipse(this.pos.x, this.pos.y, this.size);
		pop();
	}
}