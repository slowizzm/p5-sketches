let controller = new Leap.Controller({
	enableGestures: false
});
controller.connect();
let brush = [];


function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	fill(0, 30);
	rect(0, 0, width, height);
	paint();

	//console.log(frame.fingers);
}

function paint() {
	let frame = controller.frame();
	r = random(255);
	g = random(255);
	b = random(255);
	frame.fingers.forEach(function(finger) {
		x = finger.dipPosition[0] + width / 2;
		y = height - finger.dipPosition[1];
		brush.push(new Brush(x, y, color(r, g, b), random(15)));
	});

	frame.fingers.forEach(function(finger) {
		for (let i = 0; i < brush.length; i++) {
			brush[i].render(createVector(finger.dipPosition[0] + width / 2, height - finger.dipPosition[1]));
		}
	});
}

class Brush {
	constructor(_x, _y, _col, _size) {
		this.pos = createVector();
		this.col = _col;
		this.size = _size;
	}

	display(_pos) {
		this.pos.set(_pos.x, _pos.y);
		noStroke();
		fill(this.col);
		ellipse(this.pos.x, this.pos.y, this.size, this.size);

		return this;
	}

	render(_pos) {
		return this.display(_pos);
	}
}