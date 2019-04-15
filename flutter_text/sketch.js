let srcText = "f l u t t e r";
let x, y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height;

}

function draw() {
  background(255, 100);
  for (let i = 0; i < srcText.length; i++) {
    text(srcText.charAt(i), x + 10, y);
    x = x + random(-10, 10);
  }
  y = y - 10;
  if (y < 0) {
    y = height;
  }
}