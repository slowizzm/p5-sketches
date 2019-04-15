var num = 600,
	frms = 60,
	z = 15,
	n = 100;
var angle = 0,
	theta = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pg = createGraphics(width, height);
	for (var i = 0; i < n; i++) {
		pg.noStroke();
		pg.fill(map(i, 0, n, 100, 255));
		var sz = map(i, 0, n, width * 1.5, 5);
		pg.ellipse(width / 2, height / 2, sz, sz);
	}
	noStroke();
	setShadow(5, 5, 10, "rgba(0,0,0,0.55)");
}

function draw() {
	//background(238);
	//image(pg,0,0);
	translate(width / 2, height / 2);

	var h = height / 2;
	for (var i = 0; i < z; i++) {
		f = (i % 2 === 0) ? 238 : 34;
		drawThing(h - (h * .95 / z * i), f, i);
	}

	theta += TWO_PI / frms;
	//if (frameCount<frms) saveFrame("img/image-###.gif");
}

function drawThing(diam, col, n) {
	fill(col);
	beginShape();
	var d = 0;
	for (var i = 0; i < num; i++) {
		var offSet = PI / z * n;
		var angle = TWO_PI / num * i;
		var s = 0.7 + .03 * sin(sq(offSet) + theta + angle * 4.0);
		d = 0.25 + 0.2 * pow(s, 0.8);
		d += 0.08 * pow(.33 + 0.5 + cos(3333 * angle), .33);
		var x = cos(angle) * d * diam;
		var y = sin(angle) * d * diam;
		vertex(x, y);
	}
	endShape(CLOSE);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setShadow(x, y, b, c) {
	drawingContext.shadowBlur = b;
	drawingContext.shadowColor = c;
	drawingContext.shadowOffsetX = x;
	drawingContext.shadowOffSetY = y;
}