const IMGS = [],
  NUM_IMGS = 19;

function preload() {
  for (let i = 0; i < NUM_IMGS; i++) {
    IMGS[i] = loadImage(`images/zombie${i}.png`);
  }
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background('#3a333a');
  image(IMGS[constrain(int(map(mouseX, 0, width, 0, NUM_IMGS)), 0, NUM_IMGS - 1)], width * 0.5, height * 0.5);
}