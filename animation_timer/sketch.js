let frames = [];
let currentFrame = 0;
let delay = 500; // milliseconds to delay
let nextTimer = 0;
let spdSlider;

const NUM_FRAMES = 19;

function preload() {
	for (let i = 0; i < NUM_FRAMES; i++) {
		frames[i] = loadImage('zombie/zombie' + i + '.png');
	}
}

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95);
	nextTimer = millis() + delay;

	spdSlider = createSlider(100, 1500, 1000);
	spdSlider.position(0, 30);
}

function draw() {
	clear();
	let spd = floor(spdSlider.value());
	delay = map(spd, 100, 1000, 1000, 100);
	image(frames[currentFrame], width >> 1, height >> 1);

	if (millis() > nextTimer) {
		currentFrame++;
		if (currentFrame >= frames.length) {
			currentFrame = 0;
		}
		nextTimer = millis() + delay;
	}
	
	console.log(spd);

	push();
	fill(217);
	text(floor(spdSlider.value()/100) + ' fps', 50, 15);
	text('-', 0, 30);
	text('+', 120, 30);
	pop();
}