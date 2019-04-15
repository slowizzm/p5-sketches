//wip

let light;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSL, 360, 100, 100, 1);

  light = new Light();
}

function draw() {
  clear();

  light.render();
}

function mousePressed() {
  if (light.rollover()) {
    light.isGlow = !light.isGlow;
  }
}