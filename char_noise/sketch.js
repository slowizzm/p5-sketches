function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textFont('Avenir');

  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  colorMode(HSL, 300, 100, 100, 1);
  angleMode(DEGREES);
  background(0);
  
  rectMode(CENTER);
}

function draw() {
  background(0, 10, 10, 0.8);
  char_noise();
}

let chars = ['|', '-', '`', '_', '.', '-'];
let scl = 0.02;


function char_noise() {
  for (let x = -20; x <= 60; x++) {
    for (let y = -20; y <= 60; y++) {
      translate(x * 20, y * 20)
      let val = noise(x * scl, y * scl, frameCount * 0.007);

      let c = map(val, 0, 1, 33, 47);
      let ch = String.fromCharCode(round(c));
      let ch2 = map(val, 0, 1, 0, chars.length);
      let h = map(val, 0, 1, -10, 13);

      let xo = map(val, 0, 1, -100, 100);

      fill(h, 20, 90);
      textSize(60);
      text(chars[round(ch2)], 0 + xo, 0 - sin(frameCount) * 100);
      resetMatrix();
    }
  }
}