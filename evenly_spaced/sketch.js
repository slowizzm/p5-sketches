const shapes = {
  count: 9,
  radius: null,
  spacing: 15
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);


  let circleSpace = width / shapes.count;
  shapes.radius = circleSpace - shapes.spacing - (shapes.spacing / shapes.count);
}

function draw() {
  background('#f8f8f8');

  fill('#131721')
  for (let i = 0; i < shapes.count; i += 1) {
    rect((shapes.radius / 2) + shapes.spacing + i * (shapes.radius + shapes.spacing), 100, shapes.radius, shapes.radius);

    ellipse((shapes.radius / 2) + shapes.spacing + i * (shapes.radius + shapes.spacing), 300, shapes.radius);
  }
}