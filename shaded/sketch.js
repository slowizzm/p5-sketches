//MOBILE

let x, y, z,
  pos = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(13,17,21);
  noStroke();
  rectMode(CENTER);
  frameRate(30);
  noiseDetail(2, 0.9);

  pos.x = 200;
  pos.y = 200;
  x = 0;
  y = 0;
}

function draw() {
  background('#fffafa');

  pos.x += x;
  pos.y -= y;

  for (let i = 0; i < width + 33; i += 33) {
    for (let j = 0; j < height + 33; j += 10) {
      let n = sin(noise(i * 0.005, j * 0.005, pos.x * 0.005));
      let m = cos(pos.x) + sin(pos.y) * atan(0.00005);
      push();
      translate(i, j);
      rotate(radians(10 * n));
      scale(6 * n);
      let fx = map(pos.x, 0, windowWidth, 0.5, 1);
      // let fy = map(pos.y, 0, windowHeight, 200,255);
      rect(0, 0, 3, 3);
      pop();
    }
  }
}

// accelerometer Data
window.addEventListener('devicemotion', e => {
  // get accelerometer values
  x = parseInt(e.accelerationIncludingGravity.x);
  y = parseInt(e.accelerationIncludingGravity.y);
  z = parseInt(e.accelerationIncludingGravity.z);
});

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}