let lyrics = ['If', 'I', 'told', 'you', 'this', 'was', 'only', 'gonna', 'hurt',
  'If', 'I', 'warned', 'you', 'that', 'the', 'fire\'s', 'gonna', 'burn',
  'Would', 'you', 'walk', 'in?',
  'Would', 'you', 'let', 'me', 'do', 'it', 'first?',
  'Do', 'it', 'all', 'in', 'the', 'name', 'of', 'love',
  'Would', 'you', 'let', 'me', 'lead', 'you', 'even', 'when', 'you\'re', 'blind?',
  'In', 'the', 'darknes,', 'in', 'the', 'middle', 'of', 'the', 'night',
  'In', 'the', 'silence', 'when', 'there\'s', 'no', 'one', 'by', 'your', 'side',
  'Would', 'you', 'call', 'in', 'the', 'name', 'of', 'love?'
];

let lyricDrops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < lyrics.length; i++) {
    lyricDrops[i] = new LyricDrop(lyrics, i);
  }
}

function draw() {
  background('#333');

  for (let i = 0; i < lyricDrops.length; i++) {
    lyricDrops[i].rain();
  }
}

class LyricDrop {
  constructor(lyric, idx) {
    this.pos = createVector(random(30, width - 30), random(height));
    this.vel = createVector(0, random(1, 5));
    this.acc = createVector();
    this.lyric = lyric;
    this.idx = idx;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    if (this.pos.y > height) {
      this.pos.y = random(0, -height);
    }
  }
  display() {
    noStroke();
    fill(242, map(this.pos.y, 0, height, height * 0.25, 0));
    textFont('AVENIR');
    textSize(22);
    textAlign(CENTER, CENTER);
    text(this.lyric[this.idx], this.pos.x, this.pos.y);
  }

  rain() {
    this.update();
    this.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < lyricDrops.length; i++) {
    lyricDrops[i].pos = createVector(random(30, width - 30), random(height));
  }
}