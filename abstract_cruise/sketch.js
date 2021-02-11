let num = 1000;
let noiseScaleX = 500;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw() {
	let myColor = color(PI, 100, 100, 10,0.1);
  background(myColor);
  
  randomSeed(0);
  
  let n = frameCount;
  let m = (frameCount + 100);

  let nx = map(noise(n / noiseScaleX), 0, 1, -5000, 5000);
  let ny = sin(n) * 500;
  let nz = n * 50;

  let mx = map(noise(m / noiseScaleX), 0, 1, -5000, 5000);
  let my = sin(m) * 500;
  let mz = m * 50;

  camera(nx, ny - 333, nz, mx, my - 50, mz, 0, 1, 0);

  stroke(0, 0, 100);
  noFill();
  strokeWeight(15);
  beginShape();
  for (let i = frameCount; i < frameCount + num; i++) {
    let x = map(noise(i / noiseScaleX), 0, 1, -5000, 5000);
    let y = sin(i) * 500;
    let z = i * 50;
    vertex(x, y, z);
  }
  endShape();
  for (let i = frameCount; i < frameCount + num; i++) {
    let x = map(noise(i / noiseScaleX), 0, 1, -5000, 5000);
    let y = sin(i) * 500;
    let z = i * 50;
    let angle = (z) / 4;
    let x2 = x + cos(angle + frameCount) * 200;
    let y2 = y + sin(angle + frameCount) * 200;
    push();
    translate(x2, y2, z);
    noStroke();
    fill(angle % 30, 100, 100);
    //sphere(10);
		ellipse(0,0,10);
    pop();
  }
}