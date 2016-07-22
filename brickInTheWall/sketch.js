var particles = [],
    dotz = 133;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(155, 33, 33);

  // create particles
  for (var i = 0; i < dotz; i++) {
    var r = random(width);
    var a = random(height);
    var x = r * Math.cos(a);
    var y = height * Math.sin(a);
    particles[i] = new Particle(x, y, random(2,8));
  }

}

function draw() {
  background(55, 33, 133, .3);


  for (var i = 0; i < dotz; i++) {
    var particle = particles[i];

    particle.update();
    particle.display();
        particle.display();

  }

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
