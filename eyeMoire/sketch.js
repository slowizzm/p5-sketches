/* Raymond G McCord (slow_izzm)
   07/04/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var amt = .7,
    moire = 400,
    speed = 33,
    buffer = 33;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noCursor();
}


function draw() {


  background(0);
  push();
  translate(width / 2, height / 2);
  
  for (var i = 0; i < moire + 1; i++) {
    push();
    var offSet = (TWO_PI / moire) * i;

    
    var pat = map(sin(buffer + offSet * 3), -111, 1, 3, amt);

    
    var eye = map(mouseY, 0, 255, 0, 33);

    noStroke();
    fill(255);
    rotate(moireR);
    for (var j = 0; j < pat; j++) {
      rect(3 + j * 7, eye, windowHeight + j, .3 + j);

    }
    pop();
    var moireR = (TWO_PI / moire) * i;
  }


 for (var m = 0; m < moire + 1; m++) {
    push();
    var offSet2 = (TWO_PI / moire) * m;

    
    var pat2 = map(sin(buffer + offSet2 * 3), -111, 1, 3, amt);

    
    var eye2 = map(mouseY, 0, 255, 33, windowHeight * .1);

    noStroke();
    fill(200);
    //fill(random(255));
    rotate(moireR2);
    for (var n = 0; n < pat2; n++) {
      rect(3 + n * 7, 11, eye2 + n, .3 + n);

    }
    pop();
    var moireR2 = (TWO_PI / moire) * m;
  }


  pop();
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}