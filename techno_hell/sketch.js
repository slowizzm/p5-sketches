let num = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);

}

function draw() {
	blendMode(NORMAL);
	background(0);
	blendMode(ADD);
	for (let i = num; i > 0; i--) {
		let d = map(i, 0, num, 0, 33333);
		let h = (map(i, 0, num, 0, 3) + frameCount) % 30;
		push();
		translate(width * 0.5, height * 0.5);
		rotate(d / frameCount);
		rectMode(CENTER);
		fill(h, 80, 100, 5);
		noStroke();
		rect(0, 0, frameCount * 3, frameCount / (d / 1333));
		rotate(d * frameCount);
		fill(h, 3, 1, 10);
		//ellipse(0,0, frameCount/(d/33), frameCount*333);
		pop();
	}

	push();
	blendMode(NORMAL);
	textFont('Avenir');
	textAlign(CENTER, CENTER);
	textSize(333);
	textStyle(BOLD);
	fill(0, 30);
	text('IZZM', width * 0.5, height * 0.5);
	pop();
}