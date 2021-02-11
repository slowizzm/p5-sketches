let sprite_wingsR,
  sprite_wingsL,
  json_wings,
  img_body,
  butterfly;


function preload() {
  img_body = loadImage('assets/sprites/body.png');
  sprite_wingsR = loadImage('assets/sprites/wings-right-sprite.png');
  sprite_wingsL = loadImage('assets/sprites/wings-left-sprite.png');
  json_wings = loadJSON('assets/json/wings.json');
}

function setup() {
  createCanvas(800, 800);

  background('#0a141b');
  imageMode(CENTER);

  butterfly = new Butterfly(createVector(width * 0.5, height * 0.5), img_body);
}

function draw() {
  background('#0a141b7f');
  butterfly.render();

  fill('#0a141b12');
  rect(0, 0, width, height);
}
let s;

function mousePressed() {

  let wingL = Math.floor(Math.random() * 9);
  let wingR = Math.floor(Math.random() * 9);
  //butterfly.idx >= 8 ? butterfly.idx = 0 : butterfly.idx++;
  butterfly.idx.l = wingL;
  butterfly.idx.r = wingR;
  butterfly.wingL_state(wingL.toString());
  butterfly.wingR_state(wingR.toString());
  // console.log(butterfly.idx)
}