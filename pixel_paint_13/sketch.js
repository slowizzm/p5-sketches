let img;
let num = 20;
let btn_1, isShow = false;
let btn_2, isRand = false;

function preload() {
	img = loadImage("https://picsum.photos/640/480/?random");
}

function setup() {
	createCanvas(640, 480);
	angleMode(DEGREES);
	btn_1 = createButton('hide bg');
	btn_1.mouseClicked(showOriginal);
	btn_1.position(30, 500);

	btn_2 = createButton('random');
	btn_2.mouseClicked(randomImage);
	btn_2.position(130, 500);
}

function draw() {
	if (isShow) {
		image(img, 0, 0);
	}

	for (let i = 0; i < 10; i++) {
		let x = random(img.width);
		let y = random(img.height);
		let c = img.get(x, y);
		let angle = hue(c);
		push();
		translate(x, y);
		rotate(angle / noise(33) * frameCount / 33);
		stroke(c);
		fill(c);
		rect(0, 10, angle / 33, angle / 33);
		pop();
	}
}

function showOriginal() {
	isShow = !isShow;
	if (isShow) {
		btn_1.html('hide bg');
	} else {
		btn_1.html('show bg');
	}
	clear();
}

function randomImage() {
	clear();
	let rnd = floor(random(1000));
	img = loadImage("https://picsum.photos/640/480/?image=" + rnd);
}