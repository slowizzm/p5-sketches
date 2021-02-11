let colorUnits = [],
  NUM_IZZMS = 3;

function setup() {
  createCanvas(400, 400);
  stroke(13, 17, 21);

  for (let i = 0; i < NUM_IZZMS; i++) {
    colorUnits[i] = new ColorUnit({
        x: (i + 1) * 33,
        y: height * 0.2
      },
      33, {
        x: random(100, 255),
        y: random(100, 255),
        z: random(200, 255)
      });
  }
}

function draw() {
  background('#fffafa');
  translate(width * 0.3, 0);

  drawForLoop();
  drawForOfLoop();
  drawForEachLoop();
}

const drawForLoop = _ => {
  for (let i = 0; i < colorUnits.length; i++) {
    colorUnits[i].display();
  }
};

const drawForOfLoop = _ => {
  for (let colorUnit of colorUnits) {
    push();
    translate(0, 100);
    colorUnit.display();
    pop();
  }
};

const drawForEachLoop = _ => {
  colorUnits.forEach(colorUnit => {
    push();
    translate(0, 200);
    colorUnit.display();
    pop();
  });
};