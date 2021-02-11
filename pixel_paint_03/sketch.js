let y;
let count = 0;

let now_img;
let img0;
let img1;
let img2;

function preload() {
  img0 = loadImage("https://picsum.photos/640/480/?image=1049");
  img1 = loadImage("https://picsum.photos/640/480/?image=233");
  img2 = loadImage("https://picsum.photos/640/480/?image=542");
}


function setup() {
  createCanvas(640, 480);
  y = 0;
  count = 0;
  now_img = img0;
}

function draw() {
  RndImage(now_img);
  for (let i = 0; i < 100; i = i + 1) {
    let x = random(width);
    let c = now_img.get(x, y);

    let d = random(2, 5);
    let r = random(2, 5);

    if (random(100) < 50) {

      noFill();
      stroke(c);
      rect(x, y, d, d);
    } else {
      //色つき
      fill(c);
      noStroke();
      let e = random(2, 5);
      ellipse(x, y, e, e);
    }
  }

  y = y + 1;
  if (y > height) {
    y = y - height;
    count = count + 1;
    count = count % 3;

    if (count == 0) {
      now_img = img0;
    }
    if (count == 1) {
      now_img = img1;
    }
    if (count == 2) {
      now_img = img2;
    }
  }
}

function RndImage(img) {
	
_img= loadImage("https://picsum.photos/640/480/?random");
	
	return this;
}