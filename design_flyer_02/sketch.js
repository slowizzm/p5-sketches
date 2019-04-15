//WIP

let words = [], shapes = [];
let type = ['FORM','FEELING','FUNCTION'];

function setup() {
  createCanvas(375, 667);
  for (let i = 0; i < 3; i++) {
    let w = new Word(width*0.5,(i*120)+40,type[i]);
    words.push(w);
  }

  for (let i = 0; i < 3; i++) {
    let w = new Word(width*0.5,i+390+(i*120)+30,type[i]);
    words.push(w);
  }

  for (let i = 0; i < 6; i++) {
    let s = new Shape();
    shapes.push(s);
  }
}

function draw() {
  background(217);
  for (let i = 0; i < words.length; i++) {
    words[i].display();
  }

  shapes[0].display(33,112,192);
  shapes[0].circ(width*0.27,height*0.15,170);
  
  shapes[1].display(94,173,242);
  shapes[1].sqr(width*0.75,height*0.15,170,170);
  
  shapes[0].display(242,218,94);
  shapes[0].tri(width*0.15,height*0.55,
                width*0.3,height*0.4,
                width*0.45,height*0.55);
  
  shapes[1].display(242,80,65);
  shapes[1].circ(width*0.75,height*0.5,175);
  
  shapes[0].display(1,204,169);
  shapes[0].sqr(width*0.3,height*0.85,175,175);
  
  shapes[1].display(20,148,133);
  shapes[0].tri(width*0.15,height*0.45,
                width*0.25,height*0.35,
                width*0.35,height*0.45);
}

class Word {
  constructor(_x,_y,_word) {
    this.pos = createVector(_x,_y);
    this.word = _word;
  }

  display() {
    noStroke();
    fill(33);
    textFont('Avenir');
    textAlign(CENTER, CENTER);
    textSize(133);
    textStyle(BOLD);
    text(this.word,this.pos.x,this.pos.y);
  }
}

class Shape {
  constructor() {
    rectMode(CENTER);
  }
  
  display(_r,_g,_b) { 
    noStroke();
    fill(_r,_g,_b);
  }

  circ(_x,_y,_r) {
   ellipse(_x,_y,_r,_r);
  }
  
  sqr(_x,_y,_w,_h) {
    rect(_x,_y,_w,_h);
  }

  tri(_x1,_y1,_x2,_y2,_x3,_y3) {
    triangle(_x1,_y1,_x2,_y2,_x3,_y3);
  }
}