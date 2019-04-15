//wip

function setup() {
  createCanvas(600, 600);

  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(0);
  rippleCircle();
}

function rippleCircle() {
  push();
  translate(width * 0.5, height / 2);
  noFill();
  strokeWeight(3);
  let radius = 150;
  let step = 3;
  for (let i = -radius + step / 2; i <= radius - step; i += step) {
    let wave = abs(pow(sin(i * 0.003 + frameCount * 0.05), 10));
    let wy = i - map(wave, 0, 0.4, -step, step);
    let X = sqrt(sq(radius) - sq(i)) * map(wave, 0, 2, 1, 1.1);
    let other = map(i, -radius + step / 2, radius + step / 2, 0, 1);
    stroke(lerpColor(color(255, 40), color(0), other));
    beginShape();
    for (let j = -X; j <= X; j++) {
      vertex(j, wy);
    }
    endShape();
  }
  pop();
}