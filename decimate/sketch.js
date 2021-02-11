let codeTrain;
const brushes = [];

function preload() {
  codeTrain = loadImage('CodingTrain.jpg');
}


function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  background(51);
  for (let cols = 0; cols < width; cols += 13) {
    for (let rows = 0; rows < height; rows += 13) {
      brushes.push(new Brush({
        x: cols,
        y: rows
      }));
    }
  }
  codeTrain.resize(codeTrain.width * 1.5, codeTrain.height * 1.5);
}

function draw() {
  for (let brush of brushes) {
    brush.display();
  }
  
  noLoop();
}

class Brush {
  constructor(pos) {
    this.pos = {
      x: pos.x,
      y: pos.y
    };
  }

  display() {
    noStroke();
    let px = floor(this.pos.x);
    let py = floor(this.pos.y);
    let col = codeTrain.get(px, py);
    fill(col[0], col[1], col[2], 255);

    rect(this.pos.x, this.pos.y, (sin(random())*10), (cos(random()))*random(100,500));
  }
}