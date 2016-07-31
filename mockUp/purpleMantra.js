/* Raymond G McCord (slow_izzm)
   07/23/2016
   
   This work is licensed under a Creative Commons 3.0 License.
    (Attribution - NonCommerical - ShareAlike)
 		http://creativecommons.org/licenses/by-nc-sa/3.0/
*/


var angle,
  gen = 333;



function Mantra() {


  this.display = function() {
    push();
    translate(width / 2, height / 2);
    rotate(gen * 2);
    for (var i = 0; i < 133; i++) {
      rotate(3 * gen / 33);
      curve(i, i, 0, angle + i, 133, angle - i, i + 133, i);
      //bezier(i, i, 0, angle + i, 333, angle + i, i + 333, i);

    }
    pop();


var rotX = map(mouseX, 0, width, -0.0009, 0.0009);
    push();
    translate(width / 2 + 33, height / 2);
    rotate(gen * 2);
    for (var i = 0; i < 133; i++) {
      rotate(3 * gen / 33);
      stroke(255, 0, 242, 3);
      strokeWeight(0.3);
      bezier(i, i, 0, cos(angle - i), 133, angle + i, i + 133, i);

    }
    pop();

    push();
    translate(width / 2 +33, height / 2);
    rotate(gen * 2);
    for (var i = 0; i < 133; i++) {
      rotate(-3 * gen / 33);
      stroke(255);
      strokeWeight(1);
      ellipse(i, 0, .3, .3);

    }
    pop();

    gen += rotX;
  }
}