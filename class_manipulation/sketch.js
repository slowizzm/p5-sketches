let isWorld = true;
let p = [];

function setup() {
	noCanvas(window.innerWidth-4,window.innerHeight-4);
	for (let i = 0; i < 15; i++) {
		let c = createP('hello world');
		c.position(random(width * 3,width*4), random(height * 3));
		p.push(c);
	}
}

function draw() {
	for (let i = 0; i < p.length; i++) {
		if (isWorld) {
			p[i].html('hello world');
			p[i].class('world');
		} else {
			p[i].html('hello nature');
			p[i].class('nature');
		}
	}
}

function mousePressed() {
	isWorld = !isWorld;
}