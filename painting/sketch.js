let graylien, graylienDrip;
let brush = [];

function preload() {
	graylien = loadImage("images/graylien.jpg");
	graylienDrip = loadImage("images/graylienDrip.jpg");
}


function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	background(51);
	//image(graylien,0,0,graylien.width/2,graylien.height/2);
	for (let i = 0; i < 33; i++) {
		let b = new Brush();
		brush.push(b);
	}
	graylien.resize(graylien.width / 2, graylien.height / 2);
}

function draw() {
	if (mouseIsPressed) {
		for (let i = 0; i < brush.length; i++) {
			brush[i].run();
		}
	}
}

function Brush() {
	this.pos = createVector();

	this.update = function() {
		this.pos.x = mouseX + (random(-13, 13));
		this.pos.y = mouseY + (random(-13, 13));
	}

	this.display = function() {
		noStroke();
		let px = floor(this.pos.x);
		let py = floor(this.pos.y);
		let col = graylien.get(px, py);
		fill(col[0], col[1], col[2], 100);
		ellipse(this.pos.x, this.pos.y, 3, 3);
	}

	this.run = function() {
		this.update();
		this.display();
	}
}