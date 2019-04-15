let izzm;

function setup() {
	createCanvas(700, 500);
	angleMode(DEGREES);

	izzm = createSlider(10,40,10);
}

function draw() {
	background(0);
	let count = 5;
	let spacing = 20;
	let r = 140;

	for (let i = 0; i < count; i++) {
		ring(r + spacing * i, izzm.value() * i, i);
	}
}

function ring(_r, _count, _seed) {
	randomSeed(_seed);
	let randomNumbers = [];
	for (let i = 0; i <= _count; i++) {
		randomNumbers.push('>');
	}
	let spacing = 360 / _count;

	push();
	translate(width / 2, height / 2);
	for (let i = 0; i < _count; i++) {
		push();
		rotate(i * spacing);
		let num = new Sym(randomNumbers[i], _r, 0, 90, 217);
		num.render();
		pop();
	}
	pop();
}


class Sym {
	constructor(_num, _x, _y, _rot,_col) {
		this.pos = createVector(_x, _y);
		this.rot = _rot;
		this.num = _num;
		this.col = _col;
	}
	render() {
		push();
		fill(this.col);
		translate(this.pos.x, this.pos.y);
		rotate(this.rot);
		text(this.num, 0, 0);
		pop();
	}
}