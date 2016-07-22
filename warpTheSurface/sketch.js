/* Raymond G McCord (slow_izzm)
   06/01/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var izzms = [],
		sizer = 13;

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  var prox = 20,
  		row = ceil(width / prox) + 1,
  		column = ceil(height / prox) + 1;

  for (var j = 0; j < column; j++) {
    for (var i = 0; i < row; i++) {
      izzms.push(new p5.Vector(prox * i, prox * j));
    }
  }


}

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(17);
  for (var i = izzms.length - 1; i >= 0; i--) {
    var h = calcVec(izzms[i].x - mouseX, izzms[i].y - mouseY);
    line(
      izzms[i].x,
      izzms[i].y,
      izzms[i].x + sizer * cos(h.heading()),
      izzms[i].y + sizer * sin(h.heading()));
  }
}


function calcVec(x, y) {
  return new p5.Vector(y - x, -x - y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}