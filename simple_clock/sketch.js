
function setup() {
createCanvas(600, 400);
}

function draw() {
let se = second();
let mi = minute();
let h = hour();
  
// map time on RGB values
let r = ceil(map(se, 0, 60, 120, 240));
let g = ceil(map(mi, 0, 60, 120, 240));  
let b = ceil(map(h, 0, 24, 120, 240));

background(3,7,13);

  noStroke();
  fill(r);
  ellipse (450, 200, 50, 50)
  
  noStroke();
  fill(g);
  ellipse (300, 200, 50, 50)
  
  noStroke();
  fill(b);
  ellipse (150, 200, 50, 50)

  
   stroke(255);
  strokeWeight(1);
  line(225,100,225,300);
  
  stroke(255);
  line(375,100,375,300);  
}