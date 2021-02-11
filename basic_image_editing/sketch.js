let img, url = 'https://source.unsplash.com/KNUp-YBwBSE';

function preload() {
  img = loadImage(url);
}

function setup() {
  createCanvas(img.width, img.height * 2);
  pixelDensity(1);
  image(img, 0, 0);

  let a = 0;
  // background(200);
  img.loadPixels();


  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      if (img.pixels[index + 0] < 120) {
        img.pixels[index + 0] = 105;
        img.pixels[index + 1] = sin(a) * 255;
        img.pixels[index + 2] = 155;
        img.pixels[index + 3] = 255;
      }
    }

  a += 1;

  // for (let y = 0; y < height; y++) {
  //   for (let x = 0; x < width; x++) {
  //     let index = (x + y * width) * 4;
  //     if (img.pixels[index + 0] < 120) {
  //       img.pixels[index + 0] = 105;
  //       img.pixels[index + 1] = sin(a) * 255;
  //       img.pixels[index + 2] = 105;
  //       img.pixels[index + 3] = 255;
  //     }
  //   }
  //   a += 0.00075;
  }
  img.updatePixels();

  image(img, 0, img.height);
}