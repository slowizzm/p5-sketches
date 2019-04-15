// Animations
let animations = [];
let currentAnimation = 0;

// Button grid
let buttons = [];
let m, d, w;

// Interface
let selector;

function setup() {
	createCanvas(640, 480);
	// Animations
	animations = [
		new Bokehs() //,
		// new Two(),
		// new Three()
	];

	buttons = [
		new Button(width * 0.25, height * 0.85, 33),
		new Button(width >> 1, height * 0.85, 33),
		new Button(width * 0.75, height * 0.85, 33)
	];

	// Interface
	selector = createSelect();
	selector.position(10, 10);
	for (var i = 0; i < animations.length; i++) {
		animations[i].init();
		selector.option(animations[i].name);
		selector.changed(changeColor);
	}
}

function draw() {
	background(0);
	var anim = animations[currentAnimation];

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].over();
	}

	if (buttons[0].clicked) {
		anim.one();
	} else if (buttons[1].clicked) {
		anim.two();
	} else if (buttons[2].clicked) {
		anim.three();
	}

	blendMode(ADD);
	anim.display();
	blendMode(BLEND);

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].display();
	}
	// filter(DILATE);
}





function changeColor() {
	console.log("TO DO: change color");
}