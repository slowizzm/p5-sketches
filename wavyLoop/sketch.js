/* Raymond G McCord (slow_izzm)
   07/08/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/



var spd = 24,
  num = 400,
  scl,
  rot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scl = width / 222;
  smooth(4);
  noStroke();
}

function draw() {
  background(20);
  var r = PI;
  for (var i = 0; i < num; i++) {
    var offSet = TWO_PI / num * i;
    push();
    translate(width / 2, height / 2);
    rotate(r);
    var d = map(sin(rot - offSet), -1, 1, 100, 200);
    var x = width / 11 + map(cos(rot + offSet * 10), -1, 1, .1, d);
    ellipse(x, 0, scl, scl);
    r += (TWO_PI / num);
    pop();
  }
  rot -= TWO_PI / spd;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}