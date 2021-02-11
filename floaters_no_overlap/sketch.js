const floaters = [];

function setup() {
  createCanvas(800, 600);
  colorMode(HSL, 360, 1, 1, 1)
  noStroke();

  for (let i = 0; i < 1000; i++) {
    floaters[i] = new Floater(33 * random() + 3, {
      x: random(width),
      y: random(height)
    }, color(random(100, 200), 0.7, 0.5, random(0.2, 0.8)));
  }
}

function draw() {
  background(200, 0.1, 0.125, 1);

  for (let i = 0; i < floaters.length; i++) {
    floaters[i].render();

    if (floaters[i].pos.y >= height + 13) floaters.splice(i, 1);
  }

  collision();
}

function collision() {
  for (let i = 0; i < floaters.length; i++) {
    for (let j = i + 1; j < floaters.length; j++) {
      let dx = floaters[j].pos.x - floaters[i].pos.x;
      let dy = floaters[j].pos.y - floaters[i].pos.y;
      let dist = sqrt(dx * dx + dy * dy);
      if (dist < (floaters[j].size + floaters[i].size)) {
        let normalX = dx / dist;
        let normalY = dy / dist;
        let midpointX = (floaters[i].pos.x + floaters[j].pos.x) / 2;
        let midpointY = (floaters[i].pos.y + floaters[j].pos.y) / 2;
        floaters[i].pos.x = midpointX - normalX * floaters[i].size;
        floaters[i].pos.y = midpointY - normalY * floaters[i].size;
        floaters[j].pos.x = midpointX + normalX * floaters[j].size;
        floaters[j].pos.y = midpointY + normalY * floaters[j].size;
        let dVector = (floaters[i].vel.x - floaters[j].vel.x) * normalX;
        dVector += (floaters[i].vel.y - floaters[j].vel.y) * normalY;
        let dvx = dVector * normalX;
        let dvy = dVector * normalY;
        floaters[i].vel.x -= dvx;
        floaters[i].vel.y -= dvy;
        floaters[j].vel.x += dvx;
        floaters[j].vel.y += dvy;
      }
    }
  }
}

function mouseDragged() {
  floaters.push(new Floater(33 * random() + 3, {
    x: mouseX,
    y: mouseY
  }));
}