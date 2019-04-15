
let img;
let num = 0;
let isPlaying;

function preload() {
  img = loadImage('https://picsum.photos/640/480/?random');
}

function setup() {
  createCanvas(640 * 2, 480);
  isPlaying = true;
}

function draw() {
  background(255);
  image(img, 0, 0);

  let y = num % img.height;

  stroke(255);
  line(0, y, width, y);

  push();
  translate(img.width, 0);
  for (let x = 0; x < img.width; x = x + 1) {
    let c = img.get(x, y);
    stroke(c);
    line(x, 0, x, height);
  }
  pop();

  if (isPlaying) {
    num = num + 1;
  }
}

function mousePressed() {
  
  if (isPlaying == false) {
    isPlaying = true;
  } else if (isPlaying == true) {
    isPlaying = false;
  }
}