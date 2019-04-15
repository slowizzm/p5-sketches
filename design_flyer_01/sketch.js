//WIP

function setup() {
  createCanvas(375, 667);
  rectMode(CENTER);
}

function draw() {
  background(188,163,133);
  push();
  noStroke();
  fill(88,81,75,100);
  rect(width*0.5,height*0.26,width-10,height*0.5);
  fill(140,138,135);
  rect(width*0.5-1.5,height*0.26,width-13,height*0.489);
  pop();

  push();
  noStroke();
  fill(35,34,32);
  rect(width*0.5,height*0.74,width-10,height*0.5);
  pop();

  push();
  noStroke();
  fill(13,12,1);
  textFont('Avenir');
  textSize(220);
  //textWidth(300);
  textAlign(CENTER, CENTER);
  text('P', width*0.15,height*0.87);
  text('R', width*0.435,height*0.87);
  text('G', width*0.79,height*0.87);
  pop();

  push();
  noStroke();
  fill(13,12,1);
  textSize(20);
  textFont('Avenir');
  text('Pixel Request Gallery &', 10,30);
  text(' RGB Brewery',10,55);
  text('2018-19',width-90,30);
  pop();

  text('Meis tractatos in mei',20,300);
}