var shades = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i <= 666; i++) {
    shades.push(new Shade());
  }

  for (var j = 0; j <= 666; j++) {
    shades[j].display();
    shades[j].update();

  }

  background(10, 231, 255);
}

function draw() {
  for (var i = 0; i <= 666; i++) {
    shades[i].display();
    shades[i].update();
  }

  background(10, 231, 213, 2.5);

}

function Shade() {
  this.pos = createVector(random(width), random(height));

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.vel = createVector((random(1, 640) - mouseX) * (1 / random(0, 666)), (random(1, 360) - mouseY) * (1 / random(0, 666)));
    this.acc = createVector(1 / random(0, 666), 1 / random(0, 666));

    this.pos.add(this.vel);



    if (this.pos.x > width) {
      this.pos.x = random(width - random(100, 300), width);

    }
    if (this.pos.y > height) {
      this.pos.y = random(height - random(100, 300), height);

    }
    if (this.pos.x < 0) {
      this.pos.x = random(100, 333);

    }
    if (this.pos.y < 0) {
      this.pos.y = random(100, 300);
      fill(310, 231, 255);
    }
  }


  this.display = function() {
    // if (mouseX > width / 2) {
    // fill(random(150, 255), random(200, 255), 255);
    noStroke();
    fill(240, 123, 222, 42);
    ellipse(this.pos.x, this.pos.y, random(3, 7), random(3, 7));
  }

  // if (this.pos.y === 0) {
  //   fill(10, 231, 255);
  // }

  // else {
  //   fill(240, 123, 222);
  //   ellipse(this.pos.x, this.pos.y, random(13, 17), random(3, 7));
  // }
  // }
}