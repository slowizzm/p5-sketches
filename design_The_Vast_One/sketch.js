let posX;
let dust = [], dust2 = [];

function setup() {
  createCanvas(375, 667);
  noStroke();
  posX = width*0.5;

  for (let i = 0; i < 333; i++) {
    let d = new Dust(random(width), random(height*0.3));
    dust.push(d);
  }
  for (let i = 0; i < 133; i++) {
    let d = new Dust(random(width*0.5-33,width*0.5+33), random(height*0.5+20,height*0.5+67));
    dust2.push(d);
  }
}

function draw() {
  background(217);

  fill(9,13,1);
  //translate(width*0.5,height*0.5);
  ellipseMode(CENTER);
  rectMode(CENTER);
  ellipse(posX,height*-0.4,800);

  ellipse(posX,height*0.32, 13);
  
  ellipse(posX,height*0.37, 23);
  
  push();
  fill(143,184,190);
  ellipse(posX,height*0.43, 21);
  
  fill(9,13,1);
  textSize(13);
  textFont('Avenir');
  textAlign(CENTER);
  text('The Vast One', posX +67, height*0.438);
  pop();

  ellipse(posX,height*0.48,11);

  ellipse(posX,height*0.515,6);

  ellipse(posX,height*0.57,42);

  ellipse(posX,height*0.65, 33);
  rect(posX,height*0.65,52,4,3);

  push();
  noFill();
  stroke(9,13,1);
  strokeWeight(3);
  ellipse(posX,height*0.72,33);
  noStroke();
  fill(9,13,1);
  ellipse(posX,height*0.72,19);
  pop();

  ellipse(posX,height*0.78,15);
  
  ellipse(posX,height*0.82,5);
  ellipse(posX,height*0.84,5);  
  ellipse(posX,height*0.86,5);

  for ( let i = 0; i < dust.length; i++) {
    dust[i].display();
  }
  for ( let i = 0; i < dust2.length; i++) {
    dust2[i].display();
  }

  //frame
  push();
  noFill();
  stroke(227);
  strokeWeight(80);
  rect(posX,height*0.5,width,height);
  pop();
}

function Dust(_x,_y) {
  this.pos = createVector(_x,_y);
  this.size = random(1.3);

  this.display = function() {
    push();
    fill(227);
    ellipse(this.pos.x,this.pos.y,this.size);
    pop();
  }
}
