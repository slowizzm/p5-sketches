const imgs = [],
  NUM_IMAGES = 3;
let myRandom = 1;

function preload() {
  for (let i = 0; i < NUM_IMAGES; i++) {
    // imgs.push(loadImage(`assets/imgs/img${i}.jpg`)); //file path to image
    imgs.push(loadImage(`assets/imgs/img${nf(i,2)}.jpg`)); // use when sequence name begins with 00 or more
  }
}

function setup() {
  createCanvas(800, 200);
  background(0);
}

function draw() {
  //draws all images 
  for (let i = 0; i < NUM_IMAGES; i++) {
    image(imgs[i], i * 200, 0);
  }

  //draw a specific image by calling its index - uncomment line 23 and comment out lines 18,19, 20, and 26 to see difference
  //image(imgs[0],0,0); //replace [0] with [1] to see another image.

  //draw a random image - uncomment line 26 and comment out lines 18,19, 20, and 23 to see difference
  //image(imgs[myRandom], width*0.5, 0);
}