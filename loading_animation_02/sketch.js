let delta = 0;

function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(51);
  for(let i = 0; i < 361; i+=7){
    let x = cos(radians(i)) * 100 + width*0.5;
    let y = sin(radians(i)) * 1 + height*0.5;
    let r = sin(radians(delta+i)) * 133;
    r = abs(r);

    let col=map(i,0,360,120,255);

    noStroke();
		fill(3,11,19,100);
		ellipse(x+2, y+2, r);
    fill(col,r,42);
    ellipse(x, y, r);
  }
  delta++;
}