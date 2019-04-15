let jStick;
let player;

function setup() {
	createCanvas(windowWidth, windowHeight);
	jStick = new Joystick(width*0.85, height*0.85, height / 6);
	player = new Player(width>>1,height>>1,33);
}

function draw() {
	background(51);
	jStick.run();
	player.run(jStick.getValue());
}

function touchStarted() {
	jStick.activateJoystick(true);
	return false;
}
function touchEnded() {
	jStick.activateJoystick(false);
	return false;
}