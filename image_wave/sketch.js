let imgs = [];
let num = 15;

function preload() {

  for (let i = 0; i < num; i++) {
    imgs[i] = loadImage("https://picsum.photos/g/400/400/?image=" + i*20);
  }
}


function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);
  orbitControl();
  push();
  translate(0, 0, -500);
  let n = 0;
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 20; i++) {
      let x = map(i, 0, 20, -500, 500);
      let y = map(j, 0, 20, -500, 500);
      let z = sin(frameCount + j*33 + i * 10)*300;
      push();
      translate(x, y, z);
      texture(imgs[n]);
      plane(50, 50);
      n = (n + 1) % imgs.length;
      pop();
    }
  }
  pop();
}