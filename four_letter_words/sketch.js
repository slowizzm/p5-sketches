let alph;
let letters = [];
let btn_rndLetter;

function setup() {
	createCanvas(600, 400);
	loadJSON('alphabet.json', getLetters);
	for (let i = 1; i < 5; i++) {
		let l = new Letter(i * 100, height * 0.5, 24);
		letters.push(l);
	}
	btn_rndLetter = createButton('New Letters');
	btn_rndLetter.position(0,0);
	btn_rndLetter.mouseClicked(getNewLetters);
}

function draw() {
	background(51);

	letters.forEach(letter => {
		letter.display();
	})

}

function getLetters(data) {
	alph = data;
}

function getNewLetters() {
	letters.splice(0, alph.letter.length);
	if (alph) {
		for (let i = 1; i < 5; i++) {
			let l = new Letter(i * 100, height * 0.5,alph.letter.length);
			letters.push(l);
		}
	}
}

class Letter {
	constructor(_x, _y, _l) {
		this.pos = createVector(_x, _y);
		this.l = int(random(_l));
	}

	display() {
		if (alph) {
			noStroke();
			fill(217);
			if (letters) {
				textFont('Avenir');
				textSize(64);
				text(alph.letter[this.l], this.pos.x, this.pos.y);
			}
		}
	}
}