//wip

let tgl;
let snd_click = [];
let snd_off, snd_on;

function preload() {
	// for (let i = 0; i < 2; i++) {
	// 	snd_click[i] = loadSound('sound/click_' + i + '.mp3');
	// }

	snd_off = loadSound('sound/click_0.mp3');
	snd_on = loadSound('sound/click_1.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
	let pos = createVector(width * 0.5, height * 0.5);

	tgl = new Toggle(pos);
	//tgl.audio_init();
}

function draw() {
	tgl.render();
}

function mousePressed() {
	if (tgl.rollover(tgl.pos.x, tgl.pos.y, tgl.r)) {
		tgl.isClicked = !tgl.isClicked;
		tgl.audio_play();
	}
}