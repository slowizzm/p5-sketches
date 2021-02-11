let img, url = 'https://dl.dropboxusercontent.com/s/ai0cgblqz4z8g2b/batoween.jpg?dl=0';

function preload() {
  img = loadImage(url, _ => {
    img.resize(img.width * 0.25, img.height * 0.25);
  });
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);
}