const eballs = [],
  eyes = [];

function setup() {
  createCanvas(600, 400);

  eyes[0] = {
    x: width * 0.5 - 42,
    y: height * 0.5,
    diam: 64
  };

  eyes[1] = {
    x: width * 0.5 + 42,
    y: height * 0.5,
    diam: 64
  };

  for (let i = 0; i < 2; i++) {
    eballs[i] = new Eyeball({
      x: eyes[i].x,
      y: eyes[i].y
    }, eyes[i].diam);
  }
}

function draw() {
  background(13, 17, 21);

  eballs.forEach(eball => {
    eball.render();
  });
}