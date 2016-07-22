/* Raymond G McCord (slow_izzm)
   06/02/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var amt = 33,
    res = 40,
    spd = 3000,
    scl = 0,
    tocks;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);
  tocks = 0;
  for (var i = 0; i < res + 1; i++) {
    push();
    var offSet = (TWO_PI / res) * i;
    var col = (360.0 / res) * i;

    
    var pat = map(sin(scl + offSet * .9), -1, 1, 3, amt);

    //scale
    if (pat > 12) {
      pat = 13;
    }

    noStroke();
    fill(255);
    rotate(tocks);
    for (var j = 0; j < pat; j++) {
      rect(50 + j * 9, 9, 33 + j, .4 + j);

    }
    pop();
    tocks = (TWO_PI / res) * i;
  }
  pop();
  scl += (TWO_PI / spd);
  
  //orb
  ellipseMode(CENTER);
  noStroke();
  fill(random(242, 255));
  ellipse(width / 2, height / 2, 101, 101);
  ellipseMode(CENTER);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}