function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
	background(51);
  let t = millis() * 0.0001;
  for(let i=0; i<2000; i++) {    
    let x = (width>>1) + (width>>1) * sin(i + t);
    let y = i % height;
    fill((i + t) % 256, i % 200, i % 1000);
    ellipse(x, y, 1, 133);
  }
}