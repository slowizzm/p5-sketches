function setup() {
  createCanvas(400, 400);
}
let len = 100,
  min = 100,
  max = 300,
  spd = 3;


function draw() {
  background(220);

  if (len <= min) {
    len = min;
    noStroke();
  } else if (len >= max) {
    len = max;
  }

  if (mouseX > width * 0.5) {
    stroke(0);
    len += spd;
  } else if (mouseX < width * 0.5) {
    len -= spd;
  }

  line(min, 100, len, 100);
}