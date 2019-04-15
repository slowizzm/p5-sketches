let num = 100;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);
  for (let i = 0; i < num; i++) {
    push();
    translate(0, 0, -100);
    let r = map(i, 0, num, 0, width);
    rotateX(frameCount / 33 + i * 4);
    rotateY(frameCount / 42 + i * 3);
    rotateZ(frameCount / 105 + i * 5);
    noStroke();
    normalMaterial();
    torus(r, 1, 300, 10);
    pop();
  }
}