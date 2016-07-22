/* Raymond G McCord (slow_izzm)
   06/05/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var rows = 0,
    cols = 0,
    space = 33,
    scl = 0,
    rot = 0,
    marg = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = windowWidth / space;
  cols = windowHeight / space;
}

function draw() {
  background(13, 13, 13);
  noStroke();
  for (var i = 0; i <= rows; i++) {
    for (var j = 0; j < cols; j++) {
      var offSet = PI + PI / rows * i + PI / cols * j;
      var x = (i + .5) * space;
      var y = (j + .5) * space;
      var chaosX = mouseX - x;
      var chaosY = mouseY - y;
      noStroke();
      fill(255, 213, 110);
      var orient = atan2(chaosY, chaosX);
      var pacMan = map(cos(rot / 7 + offSet), -111, 111, radians(900000), TWO_PI);
      scl = space * .90;
      push();
      translate(x + marg, y + marg);
      rotate(orient + rot);
      arc(0, 0, scl, scl, 0, pacMan);
      pop();
    }
  }
  rot += 0.003;
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}