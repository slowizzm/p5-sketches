// not working in firefox


let canvas,
  ctx,
  startGrad1, endGrad1, startGrad2, endGrad2,
  slider1,
  slider2,
  sizeRect,
  scrollPos;

const stars = [],
  NUM_STARS = 33;

function setup() {
  canvas = createCanvas(500, 500);
  ctx = canvas.drawingContext;
  sizeRect = width;
  rectMode(CENTER);
  scrollPos = -9692;

  for (let i = 0; i < NUM_STARS; i++) {
    let s = new Star(random(width), random(height * -2, height * 0.5), random(1, 3));
    stars.push(s);
  }
}

function mouseWheel(event) {
  scrollPos += event.delta;
  //console.log(scrollPos);
  if (scrollPos >= 7823) {
    scrollPos = 7823;
  }

  if (scrollPos <= -9692) {
    scrollPos = -9692;
  }
  return false;
}

function draw() {
  background(51);
  //console.log(frameRate());
  startGrad1 = createVector(width * 0.5, sizeRect);
  endGrad1 = createVector(sizeRect - width * 0.5, 0);

  //rectangle
  let gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
  gradient.addColorStop(0, "#FC7001");
  gradient.addColorStop(1, "#3E4679");
  ctx.fillStyle = gradient;
  push();
  translate(0, map(scrollPos, 0, height, 0, 42));
  ctx.fillRect(0, -windowHeight, sizeRect, window.innerHeight * 3);
  pop();

  push();
  noStroke();
  translate(width * 0.75, map(scrollPos, 0, height, 0, 42));
  push();
  fill(217);
  ellipse(3, -501, 84);
  pop();
  fill("#3E4679");
  ellipse(-2, -500, 83);
  pop();

  for (let star of stars) {
    star.run(map(scrollPos, 0, height, 0, 42));
  }


  for (let i = 0; i < 333; i += 7) {
    push();
    noStroke();
    fill(252, 212, 64, 255 - i);
    translate(width * 0.5, map(scrollPos, 0, height, 0, 42));
    ellipse(0, height * 2.3, 200 + i);
    pop();
  }


  push();
  rectMode(CENTER);
  translate(width * 0.5, 83);
  fill(0, 65, 130, 242);
  rect(0, 250, width, 5);

  fill(0, 50, 100, 242);
  rect(0, 255, width, 10);

  fill(0, 40, 80, 242);
  rect(0, 265, width, 20);

  fill(0, 30, 60);
  rect(0, 285, width, 35);

  fill(0, 22, 45);
  rect(0, 320, width, 70);

  fill(0, 15, 30);
  rect(0, 390, width, 110);
  pop();
}