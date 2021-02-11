/*

Re-maps a number from one range to another.

Constrains a value between a minimum and maximum value.

*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // remap the range of mouseX to create a parallax between the rect and ellipse
  //   rect(map(mouseX,0,width,width*0.5-13,width*0.5+13),height*0.35,30,30)
  //   ellipse(map(mouseX,0,width,width*0.5-42,width*0.5+42),height*0.5,30)

  // constrains the ellipse between 50px and 80px on the x-axis
  ellipse(constrain(mouseX, 50, 80), 280, 30);

  // map the range using hard coded values
  // ellipse(map(mouseX,0,400,-100,500),height*0.5,30);
}