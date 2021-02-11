let img;

function preload() {
  img = loadImage('glass.png', _ => {
    img.resize(img.width * 0.5, img.height * 0.5);
  });
}

function setup() {
  createCanvas(200, 800);
  background('#f8f8f8');

  backgroundGradient(color(242, 110, 80), color(80, 110, 242));
}
let ang = 0;

function draw() {
  backgroundGradient(color(122, 210, 180, 10), color(80, 110, 242, 80));

  blade(width * 0.95, height * 0.5, sin(ang) * 32, 32, 1.7);
  blade(width * 0.75, height * 0.5, sin(ang) * 32, 64, 1.8);

  ang += 0.01;

  image(img, width, height / 2, -img.width, -height / 2);
}

function blade(x, y, y_offset, scalr_inc, angle) {
  let a = 0.0;
  let inc = TWO_PI / scalr_inc;
  for (let i = 0; i < 64; i++) {
    push();
    strokeWeight(a * 2);
    stroke('#3366ff');
    translate(x, y);
    rotate(PI / angle);
    point(i * 7, 50 + sin(a) * y_offset);
    a += inc;
    pop();
  }
}

const backgroundGradient = (c1, c2, alph) => {
  for (let y = 0; y < height + 5; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, height, y);
  }
}