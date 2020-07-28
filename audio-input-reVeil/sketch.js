let mic,
  fft;

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(51);
  noStroke();

  let pos = {
    x : 0,
    y : 0
  };
  let spectrum = fft.analyze();
  let d = sqrt((width * height) / spectrum.length);
  let fillRow = round(width / d);

  push();
  translate(0, height / 2);
  for (let i = 0; i < spectrum.length; i++) {
    pos.x = i % fillRow;
    if (pos.x == 0) {
      pos.y += 0.1;
    }
    let x = d * pos.x + (d / 2);
    let y = d * pos.y - (d / 2);
    let size = map(spectrum[i], 0, 255, 1, d * 1.3);
    fill(sin(x) / sin(y));
    ellipse(x, y, size);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth - 4, windowHeight - 4);
}