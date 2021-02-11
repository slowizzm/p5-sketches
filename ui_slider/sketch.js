let slider;

function setup() {
  createCanvas(720, 640);
  colorMode(HSB, 360, 100, 100, 1);
  rectMode(CENTER);
  slider = new Slider();
}

function draw() {
  background(300, 10, 10, 0.8);
  slider.render();
}

function mousePressed() {

  if (slider.hover()) {
    slider.isDraggable = true;
    slider.offset.x = slider.pos.x - mouseX;
    slider.offset.y = slider.pos.y - mouseY;
  }
}

function mouseReleased() {
  slider.isDraggable = false;
}