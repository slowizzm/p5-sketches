let mic;
let fft;

function setup() {
	createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT();
	fft.setInput(mic);
}

function draw() {
	background(51);
	noStroke();

	let xpos = 0;
	let ypos = 0;
	let spectrum = fft.analyze();
	let dist = sqrt((width * height) / spectrum.length);
	let fillRow = round(width / dist);

	push();
	translate(0, height / 2);
	for (let i = 0; i < spectrum.length; i++) {
		xpos = i % fillRow;
		if (xpos == 0) {
			ypos += .1;
		}
		let x = dist * xpos + (dist / 2);
		let y = dist * ypos - (dist / 2);
		let size = map(spectrum[i], 0, 255, 1, dist * 1.3);
		fill(sin(x) / sin(y));
		ellipse(x, y, size);
	}
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}