const rainDrops = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 7; i++) {
    let pos = {
      x: random(width * 0.1, width * 0.9),
      y: random(height * 0.1, height * 0.9)
    };
    let scl = random(1, 7);
    
    rainDrops[i] = new RainDrop(pos.x, pos.y, scl);
  }
}

function draw() {
  background(28);

  for (let i = 0; i < rainDrops.length; i++) {
    rainDrops[i].render();
  }
}