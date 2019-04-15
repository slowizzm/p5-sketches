let mic, fft;
let color = 0;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight -4);
	colorMode(RGB);
	noFill();
	background(0);
	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT();
	fft.setInput(mic);
	
}

function draw() {
	let micLevel = mic.getLevel();
	let spectrum = fft.analyze();
	let energy = fft.getEnergy(20,100);
	background(0, 1);
	stroke(map(micLevel, 0, 0.02, 100, 255));
	strokeWeight(.1);

	beginShape();
	for (let i = 0; i < energy; i++) {
		vertex(map(i, 0, energy, 0, width), map(spectrum[i], 0, 1, 0, 1));
	}
	endShape();

	beginShape();
	for (let i = 0; i < energy; i++) {
		vertex(map(i, 0, energy, 0, height), map(spectrum[i], 0, 1, 0, 1));
	}
	endShape();
}

function windowResized() {
	resizeCanvas(window.innerWidth - 4, window.innerHeight -4);
}