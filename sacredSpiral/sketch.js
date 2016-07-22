/* Raymond G McCord (slow_izzm)
   07/12/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/



var circles = 1500;
var goldenRatio = (Math.sqrt(5) + 1) / 2 + 3;
var goldenAngle = goldenRatio * (33 + Math.PI);


function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(0);
  var cx = windowWidth / 2;
  var cy = windowHeight / 2;
  var circle_rad = (windowWidth * .2);
  var spirX = map(mouseX, 0, width, 0.0042, 0.007);
  var spirY = map(mouseY, 0, height, 0.0042, 0.0067);
  var shiftX = map(mouseX, windowWidth / 2 - 33, windowWidth / 2 + 33);
  var shiftY = map(mouseY, windowHeight / 2 - 33, windowHeight / 2 + 33);

  //translate(width/2, height/2);
  for (var i = 0; i <= circles; ++i) {
    var dot_radX = spirX * i;
    var dot_radY = spirY * i;
    var ratio = i / circles;
    var angle = i * goldenAngle;
    var spiral_rad = ratio * circle_rad;
    var x = cx + cos(angle) * spiral_rad;
    var y = cy + sin(angle) * spiral_rad;
    rect(x, y, dot_radX, dot_radY);
    noStroke();
    fill(255);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}