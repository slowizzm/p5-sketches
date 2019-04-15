let angle,
	gen = 333;

function setup() {
	createCanvas(480, 480);
	stroke(200, 0, 255, 80);
	fill(0, 0, 55, 30);
}

function draw() {
	background(3);

	angle = sin(gen * 33) * 33;



	push();
	translate(width / 2, height / 2);
	rotate(gen * 2);
	for (let i = 0; i < 133; i++) {
		rotate(3 / gen * 33);
		curve(i, i, 0, angle + i, 133, angle - i, i + 133, i);
		bezier(i, i, 0, angle + i, 333, angle + i, i + 333, i);

	}
	pop();



	push();
	translate(width / 2, height / 2);
	rotate(gen * 2);
	for (let i = 0; i < 133; i++) {
		rotate(3 * gen / 33);
		stroke(0, 0, 33);
		strokeWeight(0.3);
		bezier(i, i * 9, 0, cos(angle - i), 9, angle + i * 9, i * 9, i);
		point(i, i);

	}
	pop();

	push();
	translate(width / 2, height / 2);
	rotate(gen * 2);
	for (let i = 0; i < 333; i++) {
		rotate(-3 * gen / 0.1);
		stroke(255, 33);
		strokeWeight(0.1);
		point(i, i);

	}
	pop();

	gen += 0.00009;
}