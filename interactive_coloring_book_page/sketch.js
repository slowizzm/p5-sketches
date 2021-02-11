// needs rollover alpha check

let scls = [100, 100, 100, 100],
  spds = [30, 40, 30, 40];
let bg, trees, mntn, character;

let imgs_white = [],
  imgs_col = [],
  img_shadow;

function preload() {
  for (let i = 0; i < 4; i++) {
    imgs_white[i] = loadImage(`assets/pages/turtle/white/white${i}.png`);
    imgs_col[i] = loadImage(`assets/pages/turtle/color/col${i}.png`);
  }
  img_shadow = loadImage('assets/pages/turtle/turtle-shadow.png');
}

function setup() {
  createCanvas(405, 512);
  imageMode(CENTER);

  bg = new ColorBackground(createVector(width * 0.5, height * 0.5),
    createVector(imgs_white[0].width, imgs_white[0].height),
    scls[0],
    spds[0],
    imgs_col[0],
    imgs_white[0],
    createVector(1, 1.025));

  trees = new ColorTrees(createVector(width * 0.5, height * 0.45),
    createVector(imgs_white[1].width, imgs_white[1].height),
    scls[1],
    spds[1],
    imgs_col[1],
    imgs_white[1],
    createVector(1, 1.025));

  mntn = new ColorMntns(createVector(width * 0.5, height * 0.3),
    createVector(imgs_white[2].width, imgs_white[2].height),
    scls[2],
    spds[2],
    imgs_col[2],
    imgs_white[2],
    createVector(1, 1.4));

  character = new Character(createVector(width * 0.5, height * 0.65),
    createVector(imgs_col[3].width, imgs_col[3].height),
    scls[3],
    spds[3],
    imgs_col[3],
    imgs_white[3],
    createVector(1, 1.025),
    img_shadow);

}

function draw() {
  image(imgs_white[0], width / 2, height / 2)
  image(imgs_white[2], width / 2, height * 0.3)
  image(imgs_white[1], width / 2, height * 0.4)
  // characters.forEach(c => {
  // c.render();
  // });

  bg.render();
  mntn.render();
  trees.render();
  character.render();
}

function mousePressed() {
  character.isRollover() ? (character.canFill = !character.canFill) : null;

  if (!character.isRollover() && !mntn.isRollover() && !trees.isRollover()) {
    bg.isRollover() ? (bg.canFill = !bg.canFill) : null;
  }

  if (!character.isRollover()) {
    trees.isRollover() ? (trees.canFill = !trees.canFill) : null;
  }

  if (!trees.isRollover()) {
    mntn.isRollover() ? (mntn.canFill = !mntn.canFill) : null;
  }
}