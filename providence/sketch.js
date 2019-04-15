let angle = 0;
let r = 1;

let spin = 0.05;
let grow = spin * 3;

function setup() {
	createCanvas(400, 400);
	background(220);
}

function draw() {
	angle += spin;
	r = r + grow;
	let x = cos(angle) * r;
	let y = sin(angle) * r;
	let d = dist(x, y, width >> 1, height >> 1);
	stroke(3);
	translate(width >> 1, height >> 1);
	rotate(radians(d / 2));
	rect(x, y, 3, 33);
}