let codeTrain;
let brushes = [];

function preload() {
	codeTrain = loadImage("CodingTrain.jpg");
}


function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	background(51);
	for (let x = 0; x < width; x += 13) {
		for (let y = 0; y < height; y += 13) {
			let b = new Brush(x, y);
			brushes.push(b);
		}
	}
	codeTrain.resize(codeTrain.width * 1.5, codeTrain.height * 1.5);
}

function draw() {
	for (let brush of brushes) {
		brush.run();
	}
}

class Brush {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);
	}

	update() {
		this.pos.x = mouseX + (random(-3, 3));
		this.pos.y = mouseY + (random(-3, 3));
	}

	display() {
		noStroke();
		let px = floor(this.pos.x);
		let py = floor(this.pos.y);
		let col = codeTrain.get(px, py);
		fill(col[0], col[1], col[2], 255);
		let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

		rect(this.pos.x, this.pos.y, 3 / (sin(d)), 3 / (sin(d)));
	}

	run() {
		//this.update();
		this.display();
	}
}