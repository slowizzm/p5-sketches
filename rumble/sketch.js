let x;
let tallBuild, rSign;

let mic, fft;

let beatLow;



function preload() {
	tallBuild = loadImage("images/tallBuild.png");
	rSign = loadImage("images/rumbles-sign.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = width * 0.5;
	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT();
	fft.setInput(mic);
	//background(255);

	beatLow = new Beats(20,100,"bass",0.7);
}

function draw() {
	let spectrum = fft.analyze();
	//energy = fft.smooth();
	background(255);

	beatLow.display(width*0.1, height*0.1);
	beatLow.update(fft);


	if (mouseIsPressed) {
		x = random(width * 0.5 - 3, width * 0.5 + 3);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function Beats(f1, f2, str, thresh) {
	this.isDetected = false;
	this.f1 = f1;
	this.f2 = f2;
	this.str = str;
	this.treshold = thresh;
	this.energy = 0;

	this.siz = 10;
	this.sensitivity = 500;

	this.update = function(fftObject) {
		this.energy = fftObject.getEnergy(this.f1, this.f2) / 255;

		if (this.isDetected == false) {
			if (this.energy > this.treshold) {
				this.isDetected = true;
				var self = this;
				setTimeout(function() {
					self.isDetected = false;
				}, this.sensitivity);
			}
		}
	}

	this.display = function(_x, _y) {
		if (this.isDetected == true) {
			this.siz = lerp(this.siz, 40, 0.99);
		} else if (this.isDetected == false) {
			this.siz = lerp(this.siz, 15, 0.99);
		}
		fill(33);
		ellipse(_x-33, _y, this.siz, this.siz);
		fill(0);
		text(this.str, _x, _y);
		text("( " + this.f1 + " - " + this.f2 + "Hz )", _x+33, _y);
		imageMode(CENTER);
		image(tallBuild, width * 0.5, height * 0.5, (tallBuild.width / 2)+this.siz, (tallBuild.height / 2)+this.siz);
		image(rSign, width * 0.5, (height * 0.3)-this.siz, (rSign.width / 2)+this.siz, (rSign.height / 2)+this.siz);
	}
}