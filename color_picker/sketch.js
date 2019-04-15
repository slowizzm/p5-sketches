let getColor;

function preload() {
	colorWheel = loadImage("colorwheel.png");
}

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
}

function draw() {
	background(51);
	push();
	image(colorWheel, 0, 0);
	getColor = colorWheel.get(mouseX, mouseY);

	push();
	stroke(getColor[0], getColor[1], getColor[2]);
	fill(getColor[0], getColor[1], getColor[2], 100);
	ellipse(width * 0.5, height * 0.5, 133, 133);
	pop();


	fill(getColor);
	ellipse(mouseX, mouseY, 33, 33);
	pop();

	push();
	fill(217);
	noStroke();
	textSize(33);
	textFont('Source Code Pro');
	textAlign(CENTER, CENTER);
	textStyle(BOLD);
	text(getColor, width * 0.5, height * 0.7);
	text(rgbToHex(getColor[0], getColor[1], getColor[2]), width * 0.5, height * 0.8);
	text(rgbToHsl(getColor), width * 0.5, height * 0.9);
	pop();


}