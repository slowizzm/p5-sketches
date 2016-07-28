/* Raymond G McCord (slow_izzm)
   07/23/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/


var angle,
    gen = 333;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(200, 0, 255, 80);
  fill(233, 0, 55, 30);
}

function draw() {
  background(33);

  angle = sin(gen * 33) * 33;
  
  

  push();
  translate(width / 2, height / 2);
  rotate(gen * 2);
  for (var i = 0; i < 133; i++) {
    rotate(3 * gen / 33);
    curve(i, i, 0, angle + i, 133, angle - i, i + 133, i);
    //bezier(i, i, 0, angle + i, 333, angle + i, i + 333, i);

  }
  pop();
  
  
  
  push();
  translate(width / 2, height / 2);
  rotate(gen * 2);
  for (var i = 0; i < 133; i++) {
    rotate(3 * gen / 33);
    stroke(255, 0, 242);
    strokeWeight(0.3);
    bezier(i, i, 0, cos(angle - i), 133, angle + i, i + 133, i);

  }
  pop();
  
push();
  translate(width / 2, height / 2);
  rotate(gen * 2);
  for (var i = 0; i < 133; i++) {
    rotate(-3 * gen / 33);
    stroke(255);
    strokeWeight(1);
    ellipse(i, 0, .3, .3);

  }
  pop();

  gen += 0.0009;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
