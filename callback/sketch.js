function setup() {
	createCanvas(windowWidth, windowHeight);
	getPass(toPass);
	funct('b', function(_x) {
		print(_x);
		return _x;
	});
}

function getPass(_pass) {
	_pass();
}

function toPass() {
	print('a');
}

function funct(_a, _foo) {
	_foo(_a);
}