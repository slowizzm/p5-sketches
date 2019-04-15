function setup() {
	createCanvas(window.innerWidth-4,window.innerHeight-4);
	background(255);
}

function draw() {
	for (let i = 0; i < 363; i ++) {
		push();
		translate(width*0.5, height*0.5);
		rotate(radians(i));
		if (random(0, 3) < i) {
			stroke(51);
			point(0, random(33, 142));
		}
		pop();
	}
}