const circles = [];
let circle;

function setup() {
  createCanvas(640, 360);
  ellipseMode(CENTER);
  let protection = 0;

  while (circles.length < 100) {
    circle = new Circ(random(width), random(height), random(6, 36));



    let overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.pos.x, circle.pos.y, other.pos.x, other.pos.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }

    protection++;
    if (protection > 10000) {
      break;
    }
  }
}

function draw() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].render();
  }
}