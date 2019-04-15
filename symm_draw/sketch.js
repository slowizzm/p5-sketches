let n;
let shapeSlide;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
	blendMode(ADD);
	background(220, 20, 20);
	n = floor(random(5, 10));
	shapeSlide = createSlider(1,360,33);
}

function draw() {
	push();
	translate(width / 2, height / 2);
	for (let i = 0; i < n; i++) {
		let angle = shapeSlide.value() / n * i;
		let theta = radians(angle);
		push();
		rotate(theta);
		stroke(0,0,100);
		strokeWeight(frameCount*0.1%5+5);
		if (mouseIsPressed) {
			line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
		}
		pop();
	}
	pop();
}

function keyPressed() {
	if (key == 'd' || key == 'D') {
		blendMode(NORMAL);
		background(220, 20, 20);
		blendMode(ADD);
		n = floor(random(5, 10));
	}
}