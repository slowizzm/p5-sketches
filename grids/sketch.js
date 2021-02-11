

let cols, rows;
let w = 50;
let grid = [];

function setup() {
  createCanvas(400, 400);

// set cols/rows to be dynamic with canvas size
  cols = floor(width/w);
  rows = floor(height/w);

// load array with grid
    for (let j = 0; j < rows; j++){
      for (let i = 0; i < cols; i++){

       let shape = new Shape(i,j);
        grid.push(shape);
      }
    }
}

function draw() {
  background(51);

// outer squares
  for (let i = 0; i < grid.length; i++) {
    grid[i].outerGrid();
  }

// inner squares
  for (let i = 0; i < grid.length; i++) {
    grid[i].innerSquare();
  }
}

class Shape {
  constructor(i, j) {
  this.i = i;
  this.j = j;
  this.x = this.i*w;
  this.y = this.j*w;
  }
  
  outerGrid() {
    push();
      stroke(200, 0, 255);
      noFill();
      rect(this.x, this.y, w, w);
      translate(this.x, this.y);
    pop();
   }

    innerSquare() {
        noFill();
        stroke(150, 0, 255);
        let ts = millis()/600.0;
        let angle = radians(ts*2.0*Math.PI*5.0);
        let rect_w = (w-20);
        let tx = this.x+3 + rect_w / 2;
        let ty = this.y+3 + rect_w / 2;
      for (let x = 0; x < tx; x+=30) {
        for (let y = 0; y < ty; y+=30) {
          fill(100,50,250,255-x);
      }
        ellipse(this.x,this.y,x/10);
      }
        push();
            translate(tx, ty);
            rotate(angle + random(angle));
            //rect(-rect_w/2, -rect_w/2, rect_w, rect_w);
        pop();
    }
}
