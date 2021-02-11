let totalBalls = 33;
const balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 1, 1, 1);
  noStroke();
  smooth();

  for (let i = 0; i < totalBalls; i++) {
    balls[i] = new Ball(random(width), random(height), 2, 2, 25);
  }
}

function draw() {
  background(20, 0.1, 0.1, 1);
  // fill();
  for (let i = 0; i < balls.length; i++) {
    balls[i].run();
  }
  collision();
}


function collision() {
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      let dx = balls[j].pos.x - balls[i].pos.x;
      let dy = balls[j].pos.y - balls[i].pos.y;
      let dist = sqrt(dx * dx + dy * dy);
      if (dist < (balls[j].r + balls[i].r)) {
        let normalX = dx / dist;
        let normalY = dy / dist;
        let midpointX = (balls[i].pos.x + balls[j].pos.x) / 2;
        let midpointY = (balls[i].pos.y + balls[j].pos.y) / 2;
        balls[i].pos.x = midpointX - normalX * balls[i].r;
        balls[i].pos.y = midpointY - normalY * balls[i].r;
        balls[j].pos.x = midpointX + normalX * balls[j].r;
        balls[j].pos.y = midpointY + normalY * balls[j].r;
        let dVector = (balls[i].vel.x - balls[j].vel.x) * normalX;
        dVector += (balls[i].vel.y - balls[j].vel.y) * normalY;
        let dvx = dVector * normalX;
        let dvy = dVector * normalY;
        balls[i].vel.x -= dvx;
        balls[i].vel.y -= dvy;
        balls[j].vel.x += dvx;
        balls[j].vel.y += dvy;
      }
    }
  }
}

class Ball {
  constructor(x, y, vx, vy, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector();
    this.r = r;
    this.col = color(80, 0.4, 0.7, 1);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  display() {
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.r * 2);

    return this;
  }

  edges() {
    if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
    if (this.pos.x >= width - (this.r)) {
      this.pos.x = width - (this.r);
      this.vel.x *= -1;
    }
    if (this.pos.y <= this.r) {
      this.y = this.r;
      this.vel.y *= -1;
      this.col = color(180, 0.4, 0.7, 1);
      this.r -= 0.9;
    }
    if (this.pos.y >= height - (this.r)) {
      this.pos.y = height - (this.r);
      this.vel.y *= -1;
    }

    return this;
  }

  run() {
    this.update().display().edges();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}