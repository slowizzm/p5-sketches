let theta = 0.0,
  offset = 200,
  speed = 0,
  freq = 0,
  h, hScaleSlider,
  isGlitch = false,
  btn_glitch;

const btns = [];

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight * 0.5);
  smooth(8);
  h = height * 0.5;
  strokeWeight(2);

  for (let i = 0; i < 4; i++) {
    btns[i] = createButton(`${i}`);
    btns[i].mouseClicked(_ => {
      freq = i
    });
  }

  btn_glitch = createButton('glitch is OFF');
  btn_glitch.mouseClicked(_ => {
    isGlitch = !isGlitch;
  });

  hScaleSlider = createSlider(13, 66, 33);
  hScaleSlider.position(0, height * 1.15);
}

function draw() {
  background(13, 17, 21);
  if (isGlitch) {
    btn_glitch.html('glitch is ON');
    blendMode(DIFFERENCE);
  } else {
    btn_glitch.html('glitch is OFF');
    blendMode(BLEND);
  }

  let hScale = hScaleSlider.value();

  push();
  translate(0, -50);
  for (let i = 0; i < 1000; i += 6) {
    let x = map(i, 0, 1000, 0, 1);
    let y = offset + sin(theta + 15 * x) * hScale;
    let y2 = offset + cos(theta + 12 * x) * hScale;
    let z = map(i, 0, h, 2, 1000);

    stroke(133);
    line(z, y + 100, z, y);
    stroke(157);
    line(z, y2, z, y2 + 30);

    switch (freq) {
      case 0:
        h = 1000;
        speed = sin(33);
        break;
      case 1:
        h = 1000;
        speed = sin(3333);
        break;
      case 2:
        h = height * 0.5;
        speed = sin(111);
        break;
      case 3:
        h = height * 0.6;
        speed = sin(666);
        break;
    }
    theta += speed;
  }

  pop();
}

function windowResized() {
  resizeCanvas(window.innerWidth - 4, window.innerHeight * 0.5);
}