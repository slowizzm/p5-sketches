// Daniel Shiffman
// Code for: https://youtu.be/XATr_jdh-44
//I just made some updates to work with a class

let circles = [];
let circle;

function setup() {
  createCanvas(640, 360);
  ellipseMode(CENTER);
  // Lets make sure we don't get stuck in infinite loop
  let protection = 0;
  
  while (circles.length < 100) {
    // Pick a random circle
		circle = new Circ(random(width),random(height),random(6,36));
    

    // Does it overlap any previous circles?
    let overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.pos.x, circle.pos.y, other.pos.x, other.pos.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
  
    // If not keep it!
    if (!overlapping) {
      circles.push(circle);
    }
    
    // Are we stuck?
    protection++;
    if (protection > 10000) {
      break;
    }
  }
}

function draw() {
  for (let i = 0; i < circles.length; i++) {
		circles[i].render();
	}
}