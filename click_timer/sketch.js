let delay = 3000; // 1000 = 1 sec
let currentClickTime = 0;
let showObj = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(51);
	showHide();
}

function mousePressed() {
	currentCickTime = int(millis());
	showObj = currentCickTime + delay;
	//console.log(currentCickTime);
}

function showHide() {
	fill(217);
	if (showObj > millis()) {
		ellipse(200, 200, 100, 100);
	} else {
	textFont('Avenir');
	textAlign(CENTER,CENTER);
	textSize(42);
	text('click canvas', width >> 1, height>>1);
	}
}