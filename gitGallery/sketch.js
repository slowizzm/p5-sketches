var gall = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i <= 1; i++) {
    var p = new Gallery();
    gall.push(p);
  }
}

function draw() {
  background(255);
  for (var i = 0; i <= 1; i++) {
    gall[i].display();
    gall[i].clicked();
  }
}

function Gallery() {
  this.pos = createVector(windowWidth / 2, windowHeight / 2);
  
  this.display = function() {
    rectMode(CENTER);
    stroke(0, 3);
    strokeWeight(2);
    noFill();
    rect(windowWidth / 2, windowHeight / 2, 33, 33);
  }

  this.clicked = function() {
    

    var d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    if (d < 24) {
      this.col = color(0, 100);
      window.open("slowizzm.github.io/p5js_gallery/lotusHaven");
    }
  }
}