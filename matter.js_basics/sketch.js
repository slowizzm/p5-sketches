const {
  Engine,
  World,
  Bodies
} = Matter;

let engine, world;
let izzm = [],
  obs = [];

let cols = 33,
  rows = 42;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 1.7;
  for (let x = 0; x < 10; x++) {
    for (let y = 2; y < 13; y++) {
      if (y % 2 === 0) {
        obs.push(new Obs(x * 40, y * 30 + 10, 7, 7, 7));
      } else {
        obs.push(new Obs((x * 40) + 20, y * 30 + 10, 7, 7, 7));
      }
    }
  }
}

function draw() {
  background(217);
  Engine.update(engine);
  for (let i = izzm.length - 1; i >= 0; i--) {
    izzm[i].display();
    if (izzm[i].destroy()) {
      izzm[i].remove();
      izzm.splice(i, 1);
    }
  }
  for (let o of obs) {
    o.render();
  }
}

function mousePressed() {
  izzm.push(new Izzm(mouseX, mouseY, 20, 20));
}