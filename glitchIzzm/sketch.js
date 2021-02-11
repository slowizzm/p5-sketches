let img;
let sliders = [];

function preload() {
  img = loadImage('slow.jpg');
}

function setup() {
  createCanvas(800, 500);
  background(51);
  slidersSetup();


}

function draw() {

  image(img, 0, 0, img.width / 6, img.height / 6);

  loadPixels();
  let d = pixelDensity();
  let s = width / 4 * d * height * d * 4;
  let wpixels = width * d;
  let hpixels = height * d;


  for (let i = 0; i < hpixels; i++) {
    for (let j = 0; j < wpixels; j++) {
      pixels[(i * wpixels) + j * sliders[0].value()] = pixels[(i * wpixels) + j * sliders[1].value()];
      pixels[(i * wpixels) + j + 1 * sliders[2].value()] = pixels[(i * wpixels) + j];
      pixels[(i * wpixels) + j + 2] = pixels[(i * wpixels) + j];


      pixels[(i * wpixels) + j] = pixels[(i * wpixels) + j];
      pixels[(i * wpixels) + j + 1] = pixels[(i * wpixels) + j + 132];
      pixels[(i * wpixels) + j + 2] = pixels[(i * wpixels) + j + height];
    }

    // console.log(sliders[0].value());
  }

  updatePixels();
  push();
  fill(242);
  rect(width * 0.63, 0, 300, height);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}