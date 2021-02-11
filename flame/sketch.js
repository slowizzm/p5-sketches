const flames = [],
  flameCount = 200;

let flamesFull = false,
  hueRange = 50,
  globalTick = 0,
  xoff = 0.0;


function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 100, 100, 1);
}

function draw() {
  xoff += 0.08;
  let n = noise(xoff) * width;
  background(300 / n, 30, 10, 1);

  createFlames();

  flames.forEach(flame => {
    flame.render();
  });
  globalTick++;
}