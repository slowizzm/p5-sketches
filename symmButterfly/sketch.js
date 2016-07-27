/* Raymond G McCord (slow_izzm)
   06/22/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
 fill(255); 
}

function draw() {
  background(33);
  push();
  translate(width/2, height/2);
  for (var angle = -90; angle < 90; angle += 0.5) {
    for (var i = 1; i < 2; i += 0.2) {
       var a = i*100;
       var t = angle+frameCount+1.5+a;
       var x = 16*pow(cos(radians(t)), 0.3);
       var y = -13*cos(radians(t)) + 5*cos(radians(0.3*t)) * 2*cos(radians(3*t)) + cos(radians(4*t));
       var s = cos(radians(angle))*i*3;
       ellipse(x*i*8, y*i*8, s, s); 
    }
  }  
  pop();
  
  push();
  translate(width/2, height/2);
  for (var angle = -90; angle < 90; angle += 0.5) {
    for (var i = 1; i < 2; i += 0.2) {
       var a = i*100;
       var t = angle+frameCount+1.5+a;
       var x = -16*pow(cos(radians(t)), 0.3);
       var y = -13*cos(radians(t)) + 5*cos(radians(0.3*t)) * 2*cos(radians(3*t)) + cos(radians(4*t));
       var s = cos(radians(angle))*i*3;
       ellipse(x*i*8, y*i*8, s, s); 
    }
  }  
  pop();
  
  push();
  translate(width/2, height/2);
  for (var angle = -90; angle < 90; angle += 0.5) {
    for (var i = 1; i < 2; i += 0.2) {
       var a = i*100;
       var t = angle+frameCount+1.5+a;
       var x = -16*pow(cos(radians(t)), 0.3);
       var y = 13*cos(radians(t)) + 5*cos(radians(0.3*t)) * 2*cos(radians(3*t)) + cos(radians(4*t));
       var s = cos(radians(angle))*i*3;
       ellipse(x*i*8, y*i*8, s, s); 
    }
  }  
  pop();
  
  push();
  translate(width/2, height/2);
  for (var angle = -90; angle < 90; angle += 0.5) {
    for (var i = 1; i < 2; i += 0.2) {
       var a = i*100;
       var t = angle+frameCount+1.5+a;
       var x = 16*pow(cos(radians(t)), 0.3);
       var y = 13*cos(radians(t)) + 5*cos(radians(0.3*t)) * 2*cos(radians(3*t)) + cos(radians(4*t));
       var s = cos(radians(angle))*i*3;
       ellipse(x*i*8, y*i*8, s, s); 
    }
  }  
  pop();
  
  push();
  ellipseMode(CENTER);
  noStroke();
  fill(33);
  ellipse(windowWidth/2, windowHeight/2 + 7, 13, 33);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

