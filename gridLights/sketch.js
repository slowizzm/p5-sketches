const lightupSqrs = [];

function setup() {
  createCanvas(windowWidth-4, windowHeight-4);
  let i = 0;
  for (let row = 100; row < width-100; row += 100) {
    for (let col = 100; col < height-100; col += 100) {
      lightupSqrs[i] = new LightupSqr({
        x: row,
        y: col
      }, 50);
      i++;
    }
  }
}

function draw() {
  background(13, 17, 21);
  for (let i = 0; i < lightupSqrs.length; i++) {
    lightupSqrs[i].run();
  }
}

