const FILENAMES = ['images/carDefault/carDefault_', 'images/carSedan/carSedan_', 'images/carYellow/carYellow_'],
	EXT = '.png',
	FPS = 12,
	BG = 51,
	ANIMS = FILENAMES.length,
	IMAGES = 12,
	anims = [],
	panels = [];


function preload() {
	for (let row = 0; row < ANIMS; ++row) {
		const p1 = panels[row] = Array(IMAGES),
			filename = FILENAMES[row];
		for (let col = 0; col < IMAGES; ++col) p1[col] = loadImage(filename + col + EXT);
	}
}

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95);
	frameRate(FPS);
	imageMode(CENTER);

	for (let i = 0; i < ANIMS; i++) {
		anims[i] = new Anim(panels[i], (i + 1) * 200, 270, 315, 250);
	}
}

function draw() {
	background(BG);

	for (const anim of anims) anim.run();
}

function windowResized() {
	resizeCanvas(window.innerWidth - 4, window.innerHeight * 0.7);
}