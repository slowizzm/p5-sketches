const NUM_PARTICLES = 33;
let bokeh = [];
let fade = 1; //adjust this - higher number = slower fade time
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	frameRate(100);

	for (var i = 0; i < NUM_PARTICLES; ++i) {
		bokeh.push(new Bokeh(fade));
		bokeh[i].init();
	}
}

function draw() {
	background(0, 0, 0, 200);
	for (var i = 0; i < NUM_PARTICLES; ++i) {
		bokeh[i].render();
	}

	fill(11, 9, 133, 90);
	rect(0, 0, width, height);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}