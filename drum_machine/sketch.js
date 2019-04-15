//wip
let drumMacine;

function preload() {
	soundFormats('wav');
	clap = loadSound('assets/clap.wav');
	hat = loadSound('assets/hat.wav');
	kick1 = loadSound('assets/kick1.wav');
	kick2 = loadSound('assets/kick2.wav');
	snare1 = loadSound('assets/snare1.wav');
	snare2 = loadSound('assets/snare2.wav');
	snap = loadSound('assets/snap.wav');
	shake = loadSound('assets/shake.wav');
}

function setup() {
	background(0);
	createCanvas(400, 400);
	rectMode(CENTER);
	drumMachine = new DrumMachine(kick1, kick2, snare1, snare2, hat, clap, snap, shake);
}

function draw() {
	background(0);

	if (drumMachine.kick1draw == true) {
		drumMachine.kick1_anim();
	}

	if (drumMachine.kick2draw == true) {
		drumMachine.kick2_anim();
	}

	if (drumMachine.snare1draw == true) {
		drumMachine.snare1_anim();
	}

	if (drumMachine.snare2draw == true) {
		drumMachine.snare2_anim();
	}

	if (drumMachine.snapdraw == true) {
		drumMachine.snap_anim();
	}

	if (drumMachine.clapdraw == true) {
		drumMachine.clap_anim();
	}

	if (drumMachine.hatdraw == true) {
		drumMachine.hat_anim();
	}

	if (drumMachine.shakedraw == true) {
		drumMachine.shake_anim();
	}
}

function keyTyped() {
	switch (key) {
		case 'q':
			drumMachine.kick1.play();
			drumMachine.kick1draw = true;
			drumMachine.kick1color = color(255, 10, 10);
			break;

		case 'Q':
			drumMachine.kick1.play();
			drumMachine.kick1draw = true;
			drumMachine.kick1color = color(255, 10, 10);
			break;

		case 'a':
			drumMachine.kick2.play();
			drumMachine.kick2draw = true;
			drumMachine.kick2color = color(200, 0, 0);
			break;

		case 'A':
			drumMachine.kick2.play();
			drumMachine.kick2draw = true;
			drumMachine.kick2color = color(200, 0, 0);
			break;

		case 'w':
			drumMachine.snare1.play();
			drumMachine.snare1draw = true;
			drumMachine.snare1color = color(random(100) + 155, random(88) + 50, 0, 200);
			break;

		case 'W':
			drumMachine.snare1.play();
			drumMachine.snare1draw = true;
			drumMachine.snare1color = color(random(100) + 155, random(88) + 50, 0, 200);
			break;

		case 's':
			this.snare2.play();
			drumMachine.snare2draw = true;
			drumMachine.snare2color = color(random(100) + 155, random(88) + 50, 0, 200);
			break;

		case 'S':
			drumMachine.snare2.play();
			drumMachine.snare2draw = true;
			drumMachine.snare2color = color(random(100) + 155, random(88) + 50, 0, 200);
			break;

		case 'r':
			drumMachine.hat.play();
			drumMachine.hatdraw = true;
			drumMachine.hatcolor = color(0, 255, 0, 200);
			break;

		case 'R':
			drumMachine.hat.play();
			drumMachine.hatdraw = true;
			drumMachine.hatcolor = color(0, 255, 0, 200);
			break;

		case 'e':
			drumMachine.snap.play();
			drumMachine.snapdraw = true;
			drumMachine.snapcolor = color(255, 255, 155, 200);
			break;

		case 'E':
			drumMachine.snap.play();
			drumMachine.snapdraw = true;
			drumMachine.snapcolor = color(255, 255, 155, 200);
			break;

		case 't':
			drumMachine.clap.play();
			drumMachine.clapdraw = true;
			drumMachine.clapcolor = color(155, 155, 255, 200);
			break;

		case 'T':
			drumMachine.clap.play();
			drumMachine.clapdraw = true;
			drumMachine.clapcolor = color(155, 155, 255, 200);
			break;

		case 'd':
			drumMachine.shake.play();
			drumMachine.shakedraw = true;
			drumMachine.shakecolor = color(155, 155, 255, 200);
			break;

		case 'D':
			drumMachine.shake.play();
			drumMachine.shakedraw = true;
			drumMachine.shakecolor = color(155, 155, 255, 200);
			break;

		default:
	}
}