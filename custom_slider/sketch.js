// 
const sliderOrientaton = 'vertical'; // set to 'horizontal' for horizontal slider
let slider;

function setup() {
  createCanvas(720, 640);
  colorMode(HSB, 360, 100, 100, 1);
  rectMode(CENTER);
  slider = new Slider(createVector(width * 0.5, height * 0.5), height * 0.35, height * 0.65, sliderOrientaton);
}

function draw() {
  background(300, 10, 10, 0.8);
  slider.render();
}