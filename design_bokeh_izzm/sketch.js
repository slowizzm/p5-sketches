let bokeh = [], NUM_IZZM = 13;

function setup() {
  createCanvas(375, 667);
  background(3,13,33);
  noStroke();
  for (let i = 0; i < NUM_IZZM; i++) {
    let b = new Bokeh(random(-33,width+33),random(-33,height+33), random(33,333), random(33,113));
    bokeh.push(b);
  }
}

function draw() {
  background(3,13,33);
  for (let i = 0; i < NUM_IZZM; i++) {
    bokeh[i].display();
  }

  background(33,33);

  izzm();
}

function Bokeh(_x,_y,_s,_o) {
  this.pos = createVector(_x,_y);
  this.col = ceil(random(3));
  this.g = random(133,233);
  this.b = random(133,233);
  this.s = _s;
  this.o = _o;

  this.display = function() {
    fill(233,this.g,this.b,this.o);
    ellipseMode(CENTER);
    ellipse(this.pos.x,this.pos.y,this.s);
    filter(BLUR,2);
  }
}

function izzm() {
  
  fill(250);
  push();
  textAlign(CENTER);
  textSize(83);
  //textFont('Avenir');
  text("I",width*0.66,height*0.55);
  text("Z",width*0.676,height*0.55);
  text("Z",width*0.775,height*0.55);
  text("M",width*0.894,height*0.55);
  pop();
  push();
  textSize(33);
  text("1",width*0.61,height*0.6);
  text("9",width*0.715,height*0.6);
  text("8",width*0.819,height*0.6);
  text("3",width*0.927,height*0.6);
  pop();
}

function mousePressed() {
  for (let i = 0; i < NUM_IZZM; i++) {
    bokeh[i].pos.x = random(-33,width+33);
    bokeh[i].pos.y = random(-33,height+33);
  }
}