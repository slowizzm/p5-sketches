const hitPoints = [];

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);

  for (let i = 0; i < 333; i++) {
    hitPoints[i] = new HitPoint({
      x: random(width),
      y: random(height)
    }, 100, 300);
  }
}

function draw() {
  background('#590a30');

  for (let i = 0; i < hitPoints.length; i++) {
    hitPoints[i].render();
  }
}