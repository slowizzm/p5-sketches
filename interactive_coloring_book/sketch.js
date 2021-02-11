let scl = 100,
  spd = 30;
let character;

let img_bg;

function preload() {
  img_shadow = loadImage('assets/turtle/turtle-shadow.png');
  img_back = loadImage('assets/turtle/turtle-white.png');
  msk = loadImage('assets/turtle/turtle-fill.png');
}

function setup() {
  createCanvas(505, 300);
  imageMode(CENTER);


  let pos = createVector(width * 0.5, height * 0.5);
  let res = createVector(msk.width, msk.height);

  character = new Character(pos, res, scl, spd, msk, img_back, img_shadow);
}

function draw() {
  background('#eee');

  character.render();
}

function mousePressed() {
  character.isRollover() ? (character.canFill = !character.canFill) : null;
}