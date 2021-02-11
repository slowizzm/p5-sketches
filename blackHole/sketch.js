let particlesQuantity = 13333;

const posX = [],
  posY = [],
  velX = [],
  velY = [];
velX.length = particlesQuantity;
velY.length = particlesQuantity;
velX.fill(0);
velY.fill(0);

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);

  for (let particle = 1; particle < particlesQuantity; particle++) {
    posX[particle] = random(width);
    posY[particle] = random(height);
  }

  posX[0] = 0;
  posY[0] = 0;
}

function draw() {
  background(0, 128);

  velX[0] = velX[0] * 0.5 + (mouseX - posX[0]) * 0.1;
  velY[0] = velY[0] * 0.5 + (mouseY - posY[0]) * 0.1;

  posX[0] += velX[0];
  posY[0] += velY[0];

  for (let particle = 1; particle < particlesQuantity; particle++) {
    var whatever = 1024 / (sq(posX[0] - posX[particle]) + sq(posY[0] - posY[particle]));

    velX[particle] = velX[particle] * 0.95 + (velX[0] - velX[particle]) * whatever;
    velY[particle] = velY[particle] * 0.95 + (velY[0] - velY[particle]) * whatever;

    posX[particle] += velX[particle];
    posY[particle] += velY[particle];

    if ((posX[particle] < 0 && velX[particle] < 0) || (posX[particle] > width && velX[particle] > 0))
      velX[particle] = -velX[particle];


    if ((posY[particle] < 0 && velY[particle] < 0) || (posY[particle] > height && velY[particle] > 0))
      velY[particle] = -velY[particle];


    stroke(posX[particle], posY[particle]);

    point(posX[particle], posY[particle]);
  }
}

function mousePressed() {
  for (let particle = 1; particle < particlesQuantity; particle++) {
    posX[particle] = random(0, width);
    posY[particle] = random(0, height);
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 4, windowHeight - 4);
}