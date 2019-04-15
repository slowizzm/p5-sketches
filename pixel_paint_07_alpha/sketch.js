let img_paint;
let brush = [];
let pg;

function preload() {
	img_paint = loadImage("burner.png");
}

function setup() {
	createCanvas(window.innerWidth * 0.95, window.innerHeight * 0.95);
	background(51);
	for (let i = 0; i < 33; i++) {
		let b = new Brush();
		brush.push(b);
	}
	img_paint.resize(img_paint.width >> 1, img_paint.height >> 1);
	pg = createGraphics(img_paint.width, img_paint.height); //minus 26 pixels from width and height to avoid edges wanting to draw alpha opacity on image border that doesn't exist
}

function draw() {
	//clear();
	if (mouseIsPressed) {
		for (let i = 0; i < brush.length; i++) {
			brush[i].render();
		}
	}
	//image(img_paint,0,0);
}

class Brush {
	constructor() {
		this.pos = createVector();
	}

	update() {
		let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
		this.pos.x = mouseX + (random(-13, 13));
		this.pos.y = mouseY + (random(-13, 13));

		return this;
	}

	display() {
		pg.clear();
		pg.noStroke();
		pg.imageMode(CENTER);
		let px = floor(this.pos.x);
		let py = floor(this.pos.y);
		let col = img_paint.get(px, py);
		let brush_radius = 13;
		let img_margin = brush_radius / 2 + 1;
		if (px > 0 + img_margin &&
			px < img_paint.width - img_margin &&
			py > 0 + img_margin &&
			py < img_paint.height - img_margin) {
			pg.fill(col[0], col[1], col[2], col[3]);
			pg.ellipse(this.pos.x, this.pos.y, brush_radius, brush_radius); //minus 13 pixels to up and to the left to avoid edges wanting to draw alpha opacity on image border that doesn't exist
		}
		image(pg, 0, 0);

		return this;
	}

	render() {
		return this.update().display();
	}
}