let shading;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	shading = 0;
}

function draw() {
	background(0, 5);
	translate(width / 2, height / 2);
	for (var i = 0; i < 2000; i += 2) {
		stroke(255, 255 - i);
		push();
		rotate(random(360));
		strokeWeight(map(i, 0, 200, 5, 0.01));
		ellipse(i, i, (i + 10) / 333, (i + noise(33)) / shading);
		pop();
	}
	shading += 1;

	if (shading >= width * 0.9) {
		shading = width;
	}
}