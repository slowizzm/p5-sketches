let img;

function preload() {
  img = loadImage('https://picsum.photos/200/300/?random');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  background(220);

  let pix = img.get(mouseX, mouseY);

  image(img, 0, 0);

  // using functions
  console.log(`red: ${red(pix)}, green: ${green(pix)}, blue: ${blue(pix)}, alpha: ${alpha(pix)}`);
  // array
  console.log(`red: ${pix[0]}, green: ${pix[1]}, blue: ${pix[2]}, alpha: ${pix[3]}`);
}