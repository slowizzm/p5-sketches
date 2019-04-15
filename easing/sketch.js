let seeker;

function setup() {
	createCanvas(window.innerWidth,window.innerHeight);

	seeker = new Seeker();
}

function draw() {
	clear();
	seeker.run();
}