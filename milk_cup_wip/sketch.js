let cup;

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background('#0087AA');
  cup = new Cup(createVector(width*0.5, height*0.5), 150);
  cup.display();
}

class Cup {
  constructor(pos, y) {
    this.pos = createVector(pos.x,map(mouseX,0,width,width*0.75,width*0.25));
    this.res = createVector(50,50/3);
    this.cupPos = y;
    this.empty = this.cupPos + 80;
    this.yc = constrain(this.pos.y, this.cupPos + 30, this.empty);
    this.yr = 0.4375 * ((this.empty - this.yc) / 100); // times .4375 to cap at .35
    this.wc = this.res.x + this.res.x * this.yr;
    this.hc = this.res.y + this.res.y * this.yr;
  }
  
  move (){
    this.pos.x += 2.5;
  }
  
  display() {
    
    //liquid fill
    noStroke();
    fill('GhostWhite');
    ellipse(this.pos.x, this.empty, this.res.x, this.res.y); //bottom
    beginShape();
    vertex(this.pos.x - this.wc / 2, this.yc);
    vertex(this.pos.x + this.wc / 2, this.yc);
    vertex(this.pos.x + this.res.x / 2, this.empty);
    vertex(this.pos.x - this.res.x / 2, this.empty);
    endShape(CLOSE);
    fill('white');
    ellipse(this.pos.x, this.yc, this.wc, this.hc); //changing
    
    //cup outline
    strokeWeight(4);
    stroke('#B2DFE9');
    fill(255, 255, 255, 80);
    beginShape();
    vertex(this.pos.x - this.res.x / 2, this.empty); //bottom left
    vertex(this.pos.x - this.res.x * 1.35 / 2 + 1, this.cupPos) //top left
    vertex(this.pos.x + this.res.x * 1.35 / 2 - 1, this.cupPos) // top right
    vertex(this.pos.x + this.res.x / 2, this.empty); //bottom right
    endShape();
    arc(this.pos.x, this.empty, this.res.x, this.res.y, 0, PI, OPEN); //bottom arc
    fill('#4FADC5');
    ellipse(this.pos.x, this.cupPos, this.res.x * 1.35, this.res.y * 1.35); //top
  }
}