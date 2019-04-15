let img;

function preload() {
  img = loadImage("https://picsum.photos/640/480/?random");
}

function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
}

function draw() {
  for (let i = 0; i < 500; i++) {
    let x = random(img.width);
    let y = random(img.height);
    let c = img.get(x, y);
    let angle = hue(c);
    let d = random(1, 10);
    stroke(c);
    noFill();

    push();
    translate(x, y);
    rotate(angle);
    line(0, -d, 0, d);
    pop();
  }
}