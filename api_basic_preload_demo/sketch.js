const api_dog = 'https://dog.ceo/api/breeds/image/random';

let data_dog, img;

function preload() {
  data_dog = loadJSON(api_dog, _ => {
    console.log(data_dog.message)
    img = loadImage(data_dog.message);
  });
}

function setup() {
  createCanvas(img.width, img.height);
  if (data_dog) {
    image(img, 0, 0);
  }
}