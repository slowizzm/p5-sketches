let gg;

function setup() {
  createCanvas(400, 400);
  
  gg = new gr();
}

function draw() {
  background(220);
  
  // for (let x =0; x < width; x+=300) {
  //   for (let y =0; y < height; y+=300) {
  // g(createVector(x,y),300,300);
  //   }
  // }
  
  gg.outter();
  noLoop()
}

function g(pos, w,h) {
  rect(pos.x,pos.y,100,100);
  for (let x =0; x < w; x+=10) {
    for (let y =0; y < h; y+=10) {
      ellipse(x+pos.x,y+pos.y,w/50,h/50);
    }
  }
}

class gr {
  constructor() {
    
  }
  
  inner(pos, w,h) {
    push()
    fill(random(255), random(150), random(183), 70)
    translate(pos.x,pos.y)
    rotate(45)
    rect(pos.x,pos.y,50,50);
    pop();
  for (let x =0; x < w; x+=10) {
    for (let y =0; y < h; y+=10) {
      push()
      
      ellipse(x+pos.x,y+pos.y,w/50,h/50);
      pop()
    }
  }
  }
  
  outter() {
    for (let x =0; x < width; x+=30) {
    for (let y =0; y < height; y+=30) {
    // translate(x,y)
    // rotate(45)
  this.inner(createVector(x,y),300,300);
    }
  }
  }
  
}