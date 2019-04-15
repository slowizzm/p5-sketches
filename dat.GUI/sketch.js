//https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage to learn about dat.GUI

let colors, ball;

function setup() {
	createCanvas(400, 400);
	colors = new Color();
	ball = new Ball();
	let gui_col = new dat.GUI();
	gui_col.add(colors, 'r', 0, 255);
	gui_col.add(colors, 'g', 0, 255);
	gui_col.add(colors, 'b', 0, 255);
	let gui_ball = new dat.GUI();
	gui_ball.add(ball, 's', 3, 33);
}

function draw() {
	background(colors.r, colors.g, colors.b);
	ellipse(width >> 1, height >> 1, ball.s);
}

function Color() {
	this.r = 60;
	this.g = 230;
	this.b = 215;
}

function Ball() {
	this.s = 13;
}