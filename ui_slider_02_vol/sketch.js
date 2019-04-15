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

function mousePressed() {
  let d = dist(mouseX, mouseY, slider.pos.x, slider.pos.y);

  if (mouseX >= slider.pos.x - (slider.res.x / 2) &&
    mouseX <= slider.pos.x + (slider.res.x / 2) &&
    mouseY >= slider.pos.y - (slider.res.y / 2) &&
    mouseY <= slider.pos.y + (slider.res.y / 2)) {
    slider.isDraggable = true;
    slider.offset.x = slider.pos.x - mouseX;
    slider.offset.y = slider.pos.y - mouseY;
  }
}

function mouseReleased() {
  slider.isDraggable = false;
}