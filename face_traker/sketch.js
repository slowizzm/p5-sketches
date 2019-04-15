let capture;
let video;
let tracker
let w = 427,
	h = 320;


function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95, 640);
	capture = createCapture(VIDEO);
	capture.size(w, h);
	capture.hide();

	colorMode(HSB);

	tracker = new clm.tracker();
	tracker.init();
	tracker.start(capture.elt);
}



function draw() {
	clear();



	image(capture, 0, 0, w, h);
	let positions = tracker.getCurrentPosition();

	noFill();
	stroke(255, 20);
	beginShape();
	for (let i = 0; i < positions.length; i++) {
		vertex(positions[i][0], positions[i][1]);
	}
	endShape();

	noStroke();
	for (let i = 0; i < positions.length; i++) {
		fill(map(i, 0, positions.length, 0, 360), 50, 100);
		ellipse(positions[i][0], positions[i][1], 4, 4);
		text(i, positions[i][0], positions[i][1]);
	}

	if (positions.length > 0) {
		let mouthLeft = createVector(positions[44][0], positions[44][1]);
		let mouthRight = createVector(positions[50][0], positions[50][1]);
		let eyeLtop = createVector(positions[21][0], positions[21][1]);
		let eyeLbottom = createVector(positions[26][0], positions[26][1]);
		let eyeRtop = createVector(positions[17][0], positions[17][1]);
		let eyeRbottom = createVector(positions[31][0], positions[31][1]);
		let nose = createVector(positions[37][0], positions[37][1]);
		let upperLip = createVector(positions[47][0], positions[47][1]);
		let upperScream = createVector(positions[60][0], positions[60][1]);
		let lowerScream = createVector(positions[57][0], positions[57][1]);
		let eyebrowL1 = createVector(positions[20][0], positions[20][1]);
		let eyebrowL2 = createVector(positions[21][0], positions[21][1]);
		let eyebrowR1 = createVector(positions[17][0], positions[17][1]);
		let eyebrowR2 = createVector(positions[16][0], positions[16][1]);
		let pupilL = createVector(positions[27][0], positions[27][1]);
		let cornerL = createVector(positions[25][0], positions[25][1]);
		let pupilR = createVector(positions[32][0], positions[32][1]);
		let cornerR = createVector(positions[30][0], positions[30][1]);


		//distance between left and right corners of mouth   
		let smile = mouthLeft.dist(mouthRight);
		//distance between eyebrown and bottom eyelid
		let blink = eyeLtop.dist(eyeLbottom);
		let blink2 = eyeRtop.dist(eyeRbottom);
		//distance between top of lip and bottom of nose
		let duckFace = nose.dist(upperLip);
		//distance between lower point on top lip and upper point on bottom lip
		let scream = upperScream.dist(lowerScream);
		//distance between pupil and inner corners of eyes
		let crosseyed = pupilL.dist(cornerL);
		let crosseyed2 = pupilR.dist(cornerR);


		//cue images if variables are certain sizes
		// if(smile>70){
		// 
		// }
		// if(blink<35 || blink2<35){
		// 
		// }
		// if(blink>40 || blink2>40){
		// 
		// }
		// 
		// }
		// if(scream>20){
		// 
		// }
		// if(crosseyed<15 || crosseyed2<15){
		// 
		// }
	}
}