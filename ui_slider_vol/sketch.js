let slider;
let sndVolSym;

function setup() {
  createCanvas(720, 640);
  colorMode(HSB, 360, 100, 100, 1);
  rectMode(CENTER);
  slider = new Slider();
  sndVolSym = new SoundVolumeSymbol();
}

function draw() {
  background(300, 10, 10, 0.8);
  slider.render();
  push();
  translate(-20, 0);
  sndVolSym.render();
  pop();
}