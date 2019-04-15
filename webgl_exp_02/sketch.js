let eMesh = [];
let count;
let offset;
let spacing;
let pushRadius;


function setup() {
	createCanvas(windowWidth*0.95, windowHeight*0.95,WEBGL);
	frameRate(60);
	ellipseMode(CENTER);
	count = createVector(20,20);
	offset = createVector();
	spacing = createVector(width / count.x,height / count.y);
	for (let y = 0; y < count.y; y++) {
		for (let x = 0; x < count.x; x++) {
			let pos = createVector(x * spacing.x, y * spacing.y);
			eMesh.push(new ElasticMesh(pos));
		}
	}
	pushRadius = windowWidth / 6;
	offset.x = spacing.x / 2;
	offset.y = spacing.y / 2;
}

function draw() {
	background(51);
	push();
	translate(-width>>1,-height>>1);
	connectMesh();
	pop();
}