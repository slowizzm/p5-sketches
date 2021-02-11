let brush = [];

let controller = new Leap.Controller({
	enableGestures: false
});
controller.connect();


function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	fill(0, 30);
	rect(0, 0, width, height);
	paint();
}

function paint() {
	let frame = controller.frame();
	r = random(255);
	g = random(255);
	b = random(255);
	frame.fingers.forEach(finger => {
		x = finger.dipPosition[0] + width / 2;
		y = height - finger.dipPosition[1];
		brush.push(new Brush(x, y, color(r, g, b), random(15)));
	});

	frame.fingers.forEach(finger => {
		for (let i = 0; i < brush.length; i++) {
			brush[i].render(createVector(finger.dipPosition[0] + width / 2, height - finger.dipPosition[1]));
		}
	});
}

class Brush {
	constructor(x, y, col, size) {
		this.pos = createVector();
		this.col = col;
		this.size = size;
	}

	display(pos) {
		this.pos.set(pos.x, pos.y);
		noStroke();
		fill(this.col);
		ellipse(this.pos.x, this.pos.y, this.size, this.size);

		return this;
	}

	render(pos) {
		return this.display(pos);
	}
}