 /* Raymond G McCord (slow_izzm)
   06/05/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var amt = 33,
    res = 33,
    spd = 300,
    scl = 0,
    angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 360, 200, 33);


}

function draw() {
  background(7, 7, 7);
  
  push();
  translate(width / 2, height / 2);
  angle = 0;
  for (var i = 0; i < res + 1; i++) {
    push();
    var col = (360.0 / res) * i;

    var grows = map(sin(scl), 0, 1, 16.5, amt);

    //scale
    if (grows > 33) {
      grows = 23;
    }

    noStroke();
    fill(210, col, 255);
    rotate(angle);
    for (var j = 0; j < grows; j++) {
      ellipse(50 + j * 7, 0, .3, 20);
      rect(.6 - j * 10, 0, 333, .3);
      rect(666 - j * 10, 0, 333, .3);



    }
    pop();
    angle = (TWO_PI / res) * i;
  }
  pop();
  scl += (TWO_PI / spd);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}