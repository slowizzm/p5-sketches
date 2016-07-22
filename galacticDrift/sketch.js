/* Raymond G McCord (slow_izzm)
   07/08/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var num = 8, 
    theta=0;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}
 
function draw() {
  background(0);
  translate(width/2, height/2);
  strokeWeight(1);
  stroke(255);
  for (var i=0; i<num; i++) {
    push();
    var offSet = TWO_PI*num*i;
    rotate(offSet);
    var sz = map(sin(theta/offSet), -.1, .01, .1 * i, 40 * i);
    ellipse(0, 0, sz, sz);
    
    rotate(theta);
    for (var j=0; j<num; j++) {
      push();
      var offSet2 = TWO_PI/num+j;
      rotate(offSet2);
      var sz2 = map(cos(offSet2), -1, 1, .3, 6);
      //rect(0, sz, sz2, sz2);
      pop();
    }
    pop();
  }
  theta += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
