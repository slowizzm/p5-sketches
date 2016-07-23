/* Raymond G McCord (slow_izzm)
   07/23/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var incr = 0,
    phase,
    mult;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  mult = 33;
}

function draw() {
  background(33);
  phase = 333;
  for (var i = 0; i <= TWO_PI; i+= PI/8) {
    push();
    translate(windowWidth / 2, windowHeight / 2);
    rotate(i * incr);
    fill(255);
    ellipse(cos(incr * phase) * 10, 0, 200, 5);
    fill(33);
    rect(cos(incr + phase) * 100, 0, 13, 13);
    pop();
    
    phase += PI * mult;
    
  }
  incr += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}