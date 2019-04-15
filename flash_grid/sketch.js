function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
}

function draw() {
	background(217);

	for (let y = 50; y < 500; y = y + 100) {
		for (let x = 50; x < 500; x = x + 100) {
			let r = 2;
			for (let w = 90; w > 0; w = w - r) {
				strokeWeight(r);
				rect(x, y, w, w);
				r = random(2, 30);
			}
		}
	}
}