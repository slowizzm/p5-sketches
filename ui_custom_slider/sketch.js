let slider;
let sObj = [];
let sScale = [];

function setup() {
	createCanvas(720,640);
	rectMode(CENTER);
	ellipse(CENTER);
	slider = new Slider();
	for (let i = 0; i < 13; i++) {
		let s = new SlideScale(i * 90, height * 0.42, i);
		sScale.push(s);
	}
	
	for (let i = 0; i < 13; i++) {
		let sO = new ScaledObj(i *65, height*0.5, i);
		sObj.push(sO);
	}
	
}

function draw() {
	background(map(sScale[0].s, 0, width, 0, width / 2), 100, 100);
	slider.render();
	for (let i = 0; i < sScale.length; i++) {
		sScale[i].render();
	}
	for (let i = 0; i < sObj.length; i++) {
		sObj[i].render();
	}
}

function mousePressed() {
	let d = dist(mouseX, mouseY, slider.pos.x, slider.pos.y);

	if (mouseX >= slider.pos.x - (slider.res.x / 2) &&
		mouseX <= slider.pos.x + (slider.res.x / 2) &&
		mouseY >= slider.pos.y - (slider.res.y / 2) &&
		mouseY <= slider.pos.y + (slider.res.y / 2)) {
		slider.isDraggable = true;
		slider.offset.x = slider.pos.x - mouseX;
		slider.offset.y = slider.pos.y - mouseY;
	}
}

function mouseReleased() {
	slider.isDraggable = false;
}