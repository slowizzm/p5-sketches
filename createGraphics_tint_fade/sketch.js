const pg = [],
  num_imgs = 255; //graphics buffer

let img, url = 'https://dl.dropboxusercontent.com/s/j3ejvpzyodawc78/tri-force.png?dl=0',
  idx = 0;


function preload() {
  img = loadImage(url, _=> {
  });
}

function setup() {
  createCanvas(img.width, img.height);
  

  //create buffer and store in array - apply tint once
  for (let i = 0; i < num_imgs; i++) {
    pg[i] = createGraphics(width, height);
    //decrement alpha each frame
    pg[i].tint(255, (255 - i));
    pg[i].image(img, 0, 0);
  }
}

function draw() {
  clear();
  //loop through graphics buffer array
  image(pg[idx], 0, 0);
  idx = (idx + 1) % pg.length;
}