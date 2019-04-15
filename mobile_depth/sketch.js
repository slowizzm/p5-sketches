//WIP

let h = 180;
let s = 250;
let b = 100;

function setup(){
  createCanvas(375,667);

  colorMode(HSB);
}

  
function draw() {
  background(270,250,20);
  h = 255;
  s = 250;
  b = 50;
  
  noStroke();
  rectMode(CENTER);
  let rot = map(rotationY,-90,90,-45,45);
  for(let i = height ; i > 20; i = i - 100){
    fill(h,s,b);
    push();
    rotate(radians(rot + (i>>6)));      
    rect(0,0,20-i,20-i);
    pop();

    h = h + 3.15;
    s = s - 17;
    b = b + (20-rot);
  }
}




