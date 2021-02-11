let fps = 60;

function setup() {
  createCanvas(300,300);
}

function draw() {
  background(255);
  
  if (frameCount % fps == 0)  console.log(frameCount);
}