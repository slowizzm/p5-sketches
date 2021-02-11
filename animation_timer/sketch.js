const frames = [],
  NUM_FRAMES = 19;

let currentFrame = 0,
  delay = 500,
  nextTimer = 0,
  spdSlider;



function preload() {
  for (let i = 0; i < NUM_FRAMES; i++) {
    frames[i] = loadImage('zombie/zombie' + i + '.png');
  }
}

function setup() {
  createCanvas(400, 400);
  nextTimer = millis() + delay;

  spdSlider = createSlider(100, 1500, 1000,100);
  spdSlider.position(0, 30);
}

function draw() {
  clear();
  let spd = floor(spdSlider.value());
  delay = map(spd, 100, 1000, 1000, 100);
  image(frames[currentFrame], width * 0.5, height * 0.5);

  if (millis() > nextTimer) {
    currentFrame++;
    if (currentFrame >= frames.length) {
      currentFrame = 0;
    }
    nextTimer = millis() + delay;
  }

  //console.log(spd);

  push();
  fill(217);
  text(floor(spdSlider.value() / 100) + ' fps', 50, 15);
  text('-', 0, 30);
  text('+', 120, 30);
  pop();
}