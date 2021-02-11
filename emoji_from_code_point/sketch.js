// emojis fromCodePoint - https://emojipedia.org/emoji/
// replace U+ with 0x

const cows = [],
    cowsNum = 50;

function setup() {
	createCanvas(1024, 576);

	for (let i = 0; i < cowsNum; i++) {
		cows.push(new Cow());
	}

	textAlign(CENTER, CENTER);
	noCursor();
}

function draw() {
	background(90, 24, 35);

	cows.forEach(cow => cow.render());

	textSize(130);
	text(String.fromCodePoint(0x1F6F8), mouseX, mouseY);
}

class Cow {
  constructor() {
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(random(-3,-11),0);
    this.acc = createVector();
	this.s = random(30, 100);
	this.emoji = String.fromCodePoint(0x1F404);
  }
  
	display() {
		stroke(0);
		if (dist(mouseX, mouseY, this.pos.x, this.pos.y) < 100) {
			this.emoji = String.fromCodePoint(0x1F47D);
		}

		textSize(this.s);
		text(this.emoji, this.pos.x, this.pos.y);
      
      return this;
	}

	update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      
      return this;
    }
  
  bounds() {
		if (this.pos.x < -this.s * 1.1) {
			this.pos.x = width + this.s * 1.1;
			this.emoji = String.fromCodePoint(0x1F404);
		}
      
      return this;
	}
  
  render() {
    return this.update().display().bounds();
  }
}