let video;

let new_tech, rnd_tech, words;

function preload() {
  new_tech = loadJSON("new-tech.json");
}

function setup() {
  createCanvas(640, 480);

  textFont('Avenir');
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  background(255);

  rnd_tech = random(new_tech.tech);
  words = new Word(rnd_tech, color(random(255), random(255), random(255)));
}

function draw() {
  background(51);


  video.loadPixels();

  push();
  blendMode(ADD);
  scale(-1, 1);
  translate(-width, 0);
  image(video, 0, 0, width, height);
  pop();

  words.update();
  words.show();

  // for (let i = 0; i < words.length; i++) {
  // 	if (words[i].isOffScreen()) {
  // 		if (i != -1) {
  // 			word.splice(i, 1);
  // 		}
  // 	}
  // }
}

class Word {
  constructor(word, col) {
    this.pos = createVector(random(width), 315);
    this.speed = 1;
    this.word = word;
    this.col = col;
    this.firstdrop = 0;
  }

  update() {
    let col = video.get(abs(this.pos.x - width), this.pos.y);

    let bright = (col[0] + col[1] + col[2]) / 3;
    //console.log(bright);

    let threshold = 20;

    if (bright > threshold) {
      this.pos.y += 1;
    } else {
      this.pos.y -= 2;
    }
  }

  show() {
    fill(217);
    text(this.word, this.pos.x, this.pos.y);
  }

  isOffScreen() {

    if (this.pos.y >= height || this.pos.y <= 0) {
      return true;
    }
    return false;
  }
}