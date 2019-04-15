let flames = [],
  flameCount = 200,
  flamesFull = false,
  hueRange = 50,
  globalTick = 0,
  rand = function(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  };

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 100, 100, 1);
}

function draw() {
  background(300, 30, 10, 1);

  createFlames();
  for (let f of flames) {
    f.update();
    f.render();
  }
  globalTick++;
}