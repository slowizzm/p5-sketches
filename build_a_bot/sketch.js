//wip

let head, torso, left_arm, right_arm, left_leg, right_leg;

let bot_part = [],
	NUM_PARTS = 6;



function preload() {
	head = loadImage('bot/head.png');
	torso = loadImage('bot/torso.png');
	left_arm = loadImage('bot/left-arm.png');
	right_arm = loadImage('bot/right-arm.png');
	left_leg = loadImage('bot/left-leg.png');
	right_leg = loadImage('bot/right-leg.png');

}

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	imageMode(CENTER);

	bot_part[0] = new Bot(random(width * 0.3, width * 0.9), random(height * 0.3, height * 0.9), head.width, head.height);
	bot_part[1] = new Bot(random(width * 0.3, width * 0.9), random(height * 0.3, height * 0.9), torso.width, torso.height);
	bot_part[2] = new Bot(random(width * 0.3, width * 0.9), random(height * 0.3, height * 0.9), left_arm.width, left_arm.height);
	bot_part[3] = new Bot(random(width * 0.3, width * 0.9), random(height * 0.3, height * 0.9), right_arm.width, right_arm.height);
	bot_part[4] = new Bot(random(width * 0.3, width * 0.9), random(height * 0.3, height * 0.9), left_leg.width, left_leg.height);
	bot_part[5] = new Bot(random(width * 0.3, width * 0.9), random(height * 0.3, height * 0.9), right_leg.width, right_leg.height);
}

function draw() {
	background(217);

	for (let i = 0; i < bot_part.length; i++) {
		bot_part[i].drag();
		bot_part[i].rollOver();
	}

	//head
	bot_part[0].display(head);
	bot_part[0].snap(width * 0.5, height * 0.36);
	//torso
	bot_part[1].display(torso);
	bot_part[1].snap(width * 0.5, height * 0.52);
	//left arm
	bot_part[2].display(left_arm);
	bot_part[2].snap(width * 0.66, height * 0.545);
	//right arm
	bot_part[3].display(right_arm);
	bot_part[3].snap(width * 0.33, height * 0.55);
	//left leg
	bot_part[4].display(left_leg);
	bot_part[4].snap(width * 0.57, height * 0.7);
	//right leg
	bot_part[5].display(right_leg);
	bot_part[5].snap(width * 0.43, height * 0.7);
}

function mousePressed() {
	for (let i = 0; i < bot_part.length; i++) {
		if (mouseX > bot_part[i].pos.x - (bot_part[i].size.x / 2) &&
			mouseX < bot_part[i].pos.x + (bot_part[i].size.x / 2) &&
			mouseY > bot_part[i].pos.y - (bot_part[i].size.y / 2) &&
			mouseY < bot_part[i].pos.y + (bot_part[i].size.y / 2)) {
			bot_part[i].isDraggable = true;
			bot_part[i].offsetX = bot_part[i].pos.x - mouseX;
			bot_part[i].offsetY = bot_part[i].pos.y - mouseY;
		}
	}
}

function mouseReleased() {
	for (let i = 0; i < bot_part.length; i++) {
		bot_part[i].isDraggable = false;
	}
}


class Bot {
	constructor(_x, _y, _w, _h) {
		this.pos = createVector(_x, _y);
		this.size = createVector(_w / 3, _h / 3);
		this.r = 75;
		this.offsetX = 0;
		this.offsetY = 0;
		this.isDraggable = false;
		this.isRollOver = false;
		this.isSnapped = false;
	}

	rollOver() {
		if (mouseX > this.pos.x - (this.size.x / 2) &&
			mouseX < this.pos.x + (this.size.x / 2) &&
			mouseY > this.pos.y - (this.size.y / 2) &&
			mouseY < this.pos.y + (this.size.y / 2)) {
			this.isRollOver = true;
		} else {
			this.isRollOver = false;
		}
	}

	drag() {
		if (this.isDraggable && !this.isSnapped) {
			this.pos.x = mouseX + this.offsetX;
			this.pos.y = mouseY + this.offsetY;
		}
	}

	snap(_sx, _sy) {
		this.snapPos = createVector(_sx, _sy);
		this.d = dist(mouseX, mouseY, this.snapPos.x, this.snapPos.y);

		if (this.d <= 33 && this.isDraggable) {
			this.pos.x = this.snapPos.x;
			this.pos.y = this.snapPos.y;
			this.isSnapped = true;
		}
	}

	display(_img) {
		stroke(0);
		image(_img, this.pos.x, this.pos.y, _img.width / 3, _img.height / 3);
	}
}