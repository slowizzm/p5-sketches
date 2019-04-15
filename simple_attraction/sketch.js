//NoC

let seekers = [], seeked = [];
const NUM_SEEKERS = 33;


function setup() {
  createCanvas(windowWidth,windowHeight);

  for (let i = 0; i < NUM_SEEKERS; i++) {
    let s = new Seeker(random(width),random(height));
    seekers.push(s);
  }

  for (let i = 0; i < 1; i++) {
    let s = new Seeked();
    seeked.push(s);
  }
  
}

function draw() {
  background(51);
	
  // for (let i = 0; i < seeked.length; i ++) {
  //   seeked[i].update();
  //   seeked[i].display();
  //   seeked[i].edges();
  // }

  for (let i = 0; i < seekers.length; i ++) {
    seekers[i].seek(createVector(mouseX,mouseY));
    seekers[i].update();
    seekers[i].display();
  }
}



