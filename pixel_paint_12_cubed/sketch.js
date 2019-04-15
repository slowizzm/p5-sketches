let img;
let num = 20;
let btn_1, isShow = true;
let btn_2, isRand = false;

function preload() {
	img = loadImage('https://picsum.photos/640/480/?random');

}

function setup() {
	createCanvas(640, 480);
	btn_1 = createButton('hide bg');
	btn_1.mouseClicked(showOriginal);
	btn_1.position(30, 500);

	btn_2 = createButton('random');
	btn_2.mouseClicked(randomImage);
	btn_2.position(130, 500);
}

function draw() {
	clear();
	if (isShow) {
		image(img, 0, 0);
	}

	gridX = img.width / num;
	gridY = img.height / num;

	for (let y = 0; y < img.height; y = y + gridY) {
		for (let x = 0; x < img.width; x = x + gridX) {
			let c = img.get(x, y);
			fill(c);
			rect(x, y, gridX / map(mouseX,width,0,0.1,2), gridY / map(mouseY,height,0,0.1,2));
		}
	}
}

function showOriginal() {
	isShow = !isShow;
	if (isShow) {
		btn_1.html('hide bg');
	} else {
		btn_1.html('show bg');
	}
}

function randomImage() {
	let rnd = floor(random(1000));
	img = loadImage("https://picsum.photos/640/480/?image=" + rnd);
}