function setup() {
  createCanvas(500, 500);

  background('#f8f8f8');
}

function draw() {

  //load all the pixels into array
  loadPixels();


  //change first pixel to red
  pixels[0] = 255;
  pixels[1] = 0;
  pixels[2] = 0;
  pixels[3] = 255;


  //loop through all pixels
  // for (let y = 0; y < height; y++) {
  //   for (let x = 0; x < width; x++) {
  // formula to get each pixels rgba
  //     let index = (x + y * width) * 4;
  //     pixels[index + 0] = random(255);
  //     pixels[index + 1] = 255;
  //     pixels[index + 2] = 255;
  //     pixels[index + 3] = 255;
  //   }
  // }

  //apply updates to the pixels
  updatePixels();
}