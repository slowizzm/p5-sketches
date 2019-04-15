/*
minimal web design in p5.js just because.
snagged these minimal horror movie 
posters from: http://tcat.tc/1trNKbk
*/

let dropDown, bg, logo;

let nav = [],
	header = [],
	pSlider = [];

const enum_nav = {
	nav_zero: 0,
	nav_one: 1,
	nav_two: 2
}

let posters = [],
	NUM_POSTERS = 10;

function preload() {
	for (let i = 0; i < NUM_POSTERS; i++) {
		posters[i] = loadImage('posters/minPoster' + i + '.jpg');
	}
}

function setup() {
	createCanvas(800, 800);

	dropDown = new DropDown(width * 0.5, height * 0.3, 0);
	bg = new Body(0, 0);
	logo = new Logo();

	for (let i = 0; i < 2; i++) {
		let h = new Header();
		header.push(h);
	}

	for (let i = 0; i < 4; i++) {
		let n = new Nav();
		nav.push(n);
	}

	for (let i = 0; i < 1; i++) {
		let p = new PosterSlider(width * 0.5, height * 0.5, 150);
		pSlider.push(p);
	}
}

function draw() {
	background(217);
	push();
	translate(0, -height * 0.3);
	dropDown.run();
	pop();

	bg.display();
	logo.display();
	nav[0].run(width * 0.6, height * 0.175, 'nav-1', 27);
	nav[1].run(width * 0.75, height * 0.175, 'nav-2', 27);
	nav[2].run(width * 0.9, height * 0.175, 'nav-3', 27);

	header[0].run(width * 0.7, height * 0.03, 'Contact', 13);
	header[1].run(width * 0.85, height * 0.03, 'Your Account', 13);

	for (let i = 0; i < pSlider.length; i++) {
		pSlider[i].run(0, width);
	}
}

function mousePressed() {
	for (let i = 0; i < nav.length; i++) {
		if (nav[i].isHover) {
			if (dropDown.isDropped) {
				dropDown.vel.y = -13;
			} else if (!dropDown.isDropped) {
				dropDown.vel.y = 13;
			}
			dropDown.isDropped = !dropDown.isDropped;

			if (bg.isRaised) {
				bg.vel.y = -13;
			} else if (!bg.isRaised) {
				bg.vel.y = 13;
			}
		}
	}
	bg.isRaised = !bg.isRaised;

	for (let i = 0; i < pSlider.length; i++) {
		let dLeft = dist(mouseX, mouseY, pSlider[i].arrowLeftPos.x, pSlider[i].arrowLeftPos.y);
		let dRight = dist(mouseX, mouseY, pSlider[i].arrowRightPos.x, pSlider[i].arrowRightPos.y);
		if (dLeft <= 33) {
			if (pSlider[i].isSlide && !pSlider[i].isLeft) {
				pSlider[i].vel.x = -33
			}
		} else if (dRight <= 33 && !pSlider[i].isRight) {
			if (pSlider[i].isSlide) {
				pSlider[i].vel.x = 33
			}
		}
	}
}

// function windowResized() {
// 	resizeCanvas(windowWidth, windowHeight);
// }