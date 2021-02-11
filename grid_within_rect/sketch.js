let x = 0;
let y = 0;
let spacing = 100;
let gridPatts = [];

function setup() {
  createCanvas(542, 445);

  for (let x = 0; x < width; x += 119) {
    for (let y = 0; y < width; y += 119) {
      gridPatts.push(new GridPatt(x, y));
    }
  }

  background(0);
}

function draw() {

  gridPatts.forEach(p => {
    p.display();
  });

  sketchyGrid();
}

function sketchyGrid() {
  stroke(239, 193, 6);
  strokeWeight(2);

  if (random(1) < 0.5) {
    noFill()
    beginShape();
    vertex(x + random(0, 5), y - 5);
    vertex(x + random(0, 5), y + random(-5, 0) + spacing);
    vertex(x + random(0, 5) + spacing, y + random(-5, 0) + spacing);
    vertex(x + random(0, 5) + spacing, y - 5);
    endShape(CLOSE);
  } else {
    fill(100, 100)
    beginShape();
    vertex(x + random(-5, 0), y + random(0, 5));
    vertex(x + random(-5, 0) + spacing, y + random(0, 5));
    vertex(x + random(-5, 0) + spacing, y + random(0, 5) + spacing);
    endShape();
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}



class GridPatt {
  constructor(_x, _y) {
    this.pos = {
      x: _x,
      y: _y
    }
    this.w = 100;
  }

  display() {
    push()
    translate(this.pos.x, this.pos.y)
    rotate(45);
    stroke(33, 10)
    if (floor(random(2)) === 1) {
      strokeWeight(2)
    } else {
      strokeWeight(1)
    }
    for (let i = 0; i < this.w; i += 20) {
      for (let j = 0; j < this.w; j += 20) {
        push();
        if (j % 40) {
          noStroke()
          fill(222 - j / 10);
          ellipse(i - 40, j - 40, 3);
        } else {
          stroke(222 - i / 10)
          strokeWeight(i / 30)
          noFill()
          ellipse(i - 40, j - 40, 7);
        }
        pop();
      }
    }
    pop()
  }
}