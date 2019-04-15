let theta = 0.0;
let offset = 200;
let speed = 0;
let freq = 0;
let h, hScaleSlider;

let isGlitch = false;

let btn0, btn1, btn2, btn3;
let btn_glitch;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight * 0.5);
	smooth();
	h = height * 0.5;
	btn0 = createButton('0');
	btn1 = createButton('1');
	btn2 = createButton('2');
	btn3 = createButton('3');

	btn_glitch = createButton('glitch is OFF');

	hScaleSlider = createSlider(13, 66, 33);
	hScaleSlider.position(0, height * 1.15);
}

function draw() {
	background(13);
	strokeWeight(2);
	if (isGlitch) {
		btn_glitch.html('glitch is ON');
		blendMode(DIFFERENCE);
	} else {
		btn_glitch.html('glitch is OFF');
		blendMode(BLEND);
	}
	btn0.mouseClicked(update0);
	btn1.mouseClicked(update1);
	btn2.mouseClicked(update2);
	btn3.mouseClicked(update3);

	btn_glitch.mouseClicked(glitchMode);

	let hScale = hScaleSlider.value();

	push();
	translate(0, -50);
	for (let i = 0; i < 1000; i += 6) {
		let x = map(i, 0, 1000, 0, 1);
		let y = offset + sin(theta + 15 * x) * hScale;
		let y2 = offset + cos(theta + 12 * x) * hScale;
		let z = map(i, 0, h, 2, 1000);

		stroke(133);
		line(z, y + 100, z, y);
		stroke(157);
		line(z, y2, z, y2 + 30);

		switch (freq) {
			case 0:
				h = 1000;
				speed = sin(33);
				theta += speed;
				break;
			case 1:
				h = 1000;
				speed = sin(3333);
				theta += speed;
				break;
			case 2:
				h = height * 0.5;
				speed = sin(111);
				theta += speed;
				break;
			case 3:
				h = height * 0.6;
				speed = sin(666);
				theta += speed;
				break;
		}
	}

	pop();
}

function update0() {
	freq = 0;
}

function update1() {
	freq = 1;
}

function update2() {
	freq = 2;
}

function update3() {
	freq = 3;
}

function glitchMode() {
	isGlitch = !isGlitch;
}

function windowResized() {
	resizeCanvas(window.innerWidth - 4, window.innerHeight * 0.5);
}