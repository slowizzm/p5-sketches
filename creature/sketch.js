let creature, tenticles = [];

function setup() {
  createCanvas(600, 600);
  creature = new Creature(createVector(width * 0.5, height * 0.5), 42);
  tenticles[0] = new Tenticle(width * 0.525, height * 0.45);
  tenticles[1] = new Tenticle(width * 0.475, height * 0.45);
  tenticles[2] = new Tenticle(width * 0.475, height * 0.5);
  tenticles[3] = new Tenticle(width * 0.475, height * 0.5);
  tenticles[4] = new Tenticle(width * 0.475, height * 0.45);
  tenticles[5] = new Tenticle(width * 0.475, height * 0.45);
}

function draw() {
  background(255);
  tenticles[0].render(map(mouseX, 0, width, -0.3, 0.03), createVector(8, 12));
  tenticles[1].render(map(mouseX, 0, width, 0.03, -0.3), createVector(-8, -12));
  tenticles[2].render(map(mouseX, 0, width, 0.03, -0.3), createVector(-12, 8));
  tenticles[3].render(map(mouseX, 0, width, 0.03, -0.3), createVector(12, 8));
  tenticles[4].render(map(mouseX, 0, width, 0.03, -0.3), createVector(-22, 12));
  tenticles[5].render(map(mouseX, 0, width, 0.03, -0.3), createVector(22, -12));
  creature.render();
}

class Creature {
  constructor(pos, rad) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
    this.rad = rad;
  }

  drawNoiseLoop() {
    push();
    fill(33);
    noStroke();
    let cnt = 50;
    beginShape();
    let time = frameCount / 100;
    for (let i = 0; i <= cnt; i++) {
      let theta = map(i, 0, cnt, 0, TWO_PI);
      let r = this.rad * (1 + noise(sin(theta) + 1, cos(theta) + 1, time) * 0.7);
      let x = this.pos.x + r * cos(theta);
      let y = this.pos.y + r * sin(theta);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();

    return this;
  }

  eyes() {
    push();
    noStroke();
    fill('#eee');
    ellipse(this.pos.x - 20, this.pos.y - 5, 30);
    ellipse(this.pos.x + 20, this.pos.y - 5, 30);
    fill(33);
    ellipse(this.pos.x - 20, this.pos.y - 5, 10);
    ellipse(this.pos.x + 20, this.pos.y - 5, 10);
    pop();

    return this;
  }

  render() {
    return this.drawNoiseLoop().eyes();
  }
}

class Tenticle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.w = 40;

  }
  trunk(tVal, rot) {
    push();
    translate(this.pos.x, this.pos.y);
    for (let i = 0; i < 30; i++) {
      stroke(33 - i);
      fill(33 - i);
      push();
      let cnt = 33;
      beginShape();
      let time = frameCount / 100;
      for (let i = 0; i <= cnt; i++) {
        let theta = map(i, 0, cnt, 0, TWO_PI);
        let r = 13 * (1 + noise(sin(theta) + 1, cos(theta) + 1, time) * 0.7);
        let x = 0 + r * cos(theta);
        let y = 0 + r * sin(theta);
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
      rotate(tVal);
      scale(0.9);
      translate(rot.x, rot.y);
    }
    pop();
  }

  render(tVal, rot) {
    this.trunk(tVal, rot);
  }
}