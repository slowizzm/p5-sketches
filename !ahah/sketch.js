const hahaha = [],
  img_ha = [];

let img_bg,
  img_joker, img_jokerFace,
  snd_jokerLaugh;


function preload() {
  img_bg = loadImage('assets/images/bg.png')
  img_joker = loadImage('assets/images/joker/joker-body.png');
  img_jokerFace = loadImage('assets/images/joker/joker-face.png');
  snd_jokerLaugh = loadSound('assets/audio/joker-laugh.mp3');

  for (let i = 0; i < 16; i++) img_ha[i] = loadImage(`assets/images/ha/ha${i}.png`);
}

function setup() {
  createCanvas(1920 * 0.5, 1080 * 0.5);
  colorMode(HSL, 360, 1, 1, 1);
}

function draw() {
  background(img_bg);
  let jBody_x = map(mouseX, 0, width, -11, 9);
  let jFace_x = map(mouseX, 0, width, -9, 6);
  image(img_joker, jBody_x - 13, 0, 1920 / 2 + 33, 1080 / 2 + 33);
  image(img_jokerFace, jFace_x - 13, -33, 1920 / 2 + 33, 1080 / 2 + 33);


  for (let i = 0; i < hahaha.length; i++) hahaha[i].render();

  if (hahaha.length >= 13) hahaha.splice(0, 1);

  drawOverlay();
}

const drawOverlay = _ => {
  //overlay 
  push();
  noStroke();
  fill(330, 0.9, 0.6, 0.125);
  rect(0, 0, width, height);
  pop();
}

function mousePressed() {
  let i = int(random(img_ha.length));
  let p = new Hahaha(random(width / 2 - 33, width / 2 + 33), height * 0.7, random(6, 33), img_ha[i]);
  hahaha.push(p);

  if (!snd_jokerLaugh.isPlaying()) snd_jokerLaugh.play();
}