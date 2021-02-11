// I did not create this sketch, author unknown

const beeProps = [{
  x: null,
  y: null
}];

let img;

function preload() {
  img = loadImage('petals.png');
}

function setup() {
  createCanvas(800, 400);

  for (let i = 0; i < 7; i++) {
    beeProps[i] = {
      x: random(width * 2),
      y: random(height),
      rnd: random(0.1, 0.5)

    }
  }
}

function draw() {
  background('#cecece');

  image(img, 0, img.height / 2 + 30)

  for (let i = 0; i < 7; i++) {
    bee(beeProps[i].x, beeProps[i].y, beeProps[i].rnd)
  }
}

function bee(x, y, rnd) {
  push();
  scale(rnd);
  translate(x, y);
  fill('#ffefff');
  stroke('#8b435c');
  strokeWeight(3);
  beginShape();
  vertex(8, 21);
  vertex(52, 15);
  vertex(58, 37);
  vertex(21, 52);
  vertex(42, 94);
  vertex(77, 71);
  vertex(65, 56);
  vertex(43, 64);
  endShape();

  line(80, 60, 130, 10);
  line(80, 60, 130, 90);
  pop();
}