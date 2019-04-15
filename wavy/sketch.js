let dots = [];
let spacing = 40;
let margin = 10;
let izzm;
let mic;

function setup() {
  createCanvas(900, 600);
  noStroke();
  rectMode(CENTER);
  colorMode(HSL,360,100,100);
  
  mic = new p5.AudioIn();
  mic.start();
  
  let pos = createVector(width * 0.5, height * 0.5);
  izzm = new Izzm(pos);

  for (let i = -width; i < width*2; i += margin) {
    for (let j = -height; j < height*2; j += margin) {
      dots.push(new dot(i, j));
      j += spacing;
    }
    i += spacing;
  }
}

function draw() {
  background(33,60,10);


  izzm.render();
  for (let i = 0; i < dots.length; i++) {

    dots[i].update();
  }
  print(izzm.d);
}

class dot {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.d = 0;
    this.color1 = color(10,80,50);
    this.color2 = color(200,80,30);
    this.angle = 0;
  }

  update() {
    this.angle += 0.038;
    this.d = dist(izzm.pos.x, izzm.pos.y, this.pos.x, this.pos.y)
    let md = dist(mouseX,mouseY,this.pos.x,this.pos.y);
    fill(lerpColor(this.color1, this.color2, map(this.d, 0, 1000, 0, md/133)))
    push();
    translate(this.pos.x, this.pos.y)
    rotate(this.angle);
    rect(
      lerp(0, this.d/3, 0.3),
      lerp(0, this.d/3, 0.3),
      map(this.d, 0, 13, 0, this.d/(md*3)),
      map(25, 0, 7, 0, 3),
      33
    )
    pop();
  }
}

class Izzm {
  constructor(_pos) {
    this.pos = createVector(_pos.x, _pos.y);
    this.angle = 0;
    this.alpha = 1;
  }

  update() {
    this.angle += 0.038;
    return this;
  }

  display() {
    push();
    noStroke();
    noFill();
    translate(this.pos.x, this.pos.y)
    rotate(this.angle);
    ellipse(33, -100, 33);
    pop();

    return this;
  }

  render() {
    this.update().display();
  }
}

class Reactor {
  constructor(_pos) {
    this.pos = createVector(_pos.x, _pos.y);
    this.angle = 0;
    this.alpha = 1;
  }

  update() {
    this.angle += 0.038;
    return this;
  }

  display() {
    push();
    noStroke();
    noFill();
    translate(this.pos.x, this.pos.y)
    rotate(this.angle);
    ellipse(33, -100, 33);
    pop();

    return this;
  }

  render() {
    this.update().display();
  }
}