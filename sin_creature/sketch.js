//wip

let step = 17;
let margin = 100;

function setup() {
  createCanvas(640, 640);
  colorMode(HSL, 300, 100, 100, 1);
  strokeWeight(sqrt(2));
  stroke(255);
  noFill();
}

function draw() {
  background(0, 20, 5, 0.8);
  let mx = mouseX;
  let my = mouseY;
  let cx = cos(radians(frameCount)) * width / 33 + width / 2;
  let cy = sin(radians(frameCount)) * height / 33 + height / 2;

  for (let x = step / 2 - margin; x < width + margin; x += step) {
    beginShape();
    for (let y = step / 2 - margin; y < height + margin; y += 30) {
      let dism = dist(mx, my, x, y);
      let disc = dist(cx, cy, x, y);
      let x1 = x - ((x - cx) / disc + (x - width * 0.5) / 230) * 200;
      let y1 = y - ((y - cy) / disc + (y - height * 0.5) / 230) * 200;
      ellipse(x1, y1, 1);
    }
    endShape();
  }

  for (let x = step / 2 - margin; x < width + margin; x += step) {
    beginShape();
    for (let y = step / 2 - margin; y < height + margin; y += 30) {
      let dism = dist(mx, my, x, y);
      let disc = dist(cx, cy, x, y);
      let x1 = x - ((x - cx) / disc + (x - width * 0.5) / 230) / x;
      let y1 = y - ((y - cy) / disc + (y - height * 0.5) / 230) * 200;
      push();
      stroke(0, 100, 100, map(x1, width / 2 - 133, width / 2 + 133, 0, 0.2));
      noFill();
      point(x1, y1);
      pop();
    }
    endShape();
  }
}