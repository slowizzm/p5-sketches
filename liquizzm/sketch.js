/* Raymond G McCord (slow_izzm)
   05/13/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

var dripz = [];
var particle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 33; i++) {
    p = new Particle(0, 0);
    particle.push(p);

  }
  for (var i = 0; i <= 666; i++) {
    dripz.push(new Drip());
  }

}

function draw() {

for (var i = 0; i <= 666; i++) {
    dripz[i].display();
    dripz[i].update();
  }

  var gravity = createVector(0, 0.3);

  var wind = createVector(.1, 0);
  for (var k = 0; k < particle.length; k++) {
    particle[k].applyForce(gravity);
    particle[k].applyForce(wind);
    particle[k].update();
    particle[k].edges();
    particle[k].display();
  }

  for (var i = 0; i <= 666; i++) {
    dripz[i].display();
    dripz[i].update();
  }

  background(250, 250, 250, 3);

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}