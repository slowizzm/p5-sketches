class Horizon {
	constructor() {
		
	}
	mountains() {

		noStroke();
		fill("#FFFCD6");
		ellipse(90, 100, 80, 80);
		fill(115, 124, 255, 80);
		triangle(200, 400, 400, 400, 300, 100);
		fill(36, 147, 140, 100);
		triangle(250, 400, 450, 400, 350, 180);
		fill(18, 121, 175, 120);
		triangle(150, 400, 350, 400, 250, 160);
		strokeWeight(2);
		stroke(37, 72, 170);
		line(150, 420, 450, 420);
		stroke(37, 72, 170, 200);
		line(200, 440, 400, 440);
		stroke(37, 72, 170, 100);
		line(250, 460, 350, 460);
		stroke(37, 72, 170, 80);
		line(280, 480, 320, 480);
	}

	stars() {
		stroke(255);
		strokeWeight(2 + random(2));
		point(50, 270);
		push();
		stroke(255, 100);
		point(390, 260);
		pop();
		push();
		stroke(255, 133);
		point(210, 170);
		pop();
		push();
		stroke(255, 200);
		point(510, 230);

		point(460, 30);

		push();
		stroke(255, 83);
		point(310, 120);
		pop();
	}
}