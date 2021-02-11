const particles = [],
  NUM_PARTICLES = 10;

let slider_particleCount, lineLengthSlider,
  spring = 0.05,
  ctx;

function setup() {
  ctx = createCanvas(window.innerWidth - 4, 400);
  ctx.mouseClicked(_ => {
    particles.forEach(particle => {
      particle.vel.x = random(TWO_PI);
      particle.vel.y = random(TWO_PI);
    });
  });

  background(100);
  ellipseMode(CENTER);

  //creates a slider to adjust the amount of particles
  slider_particleCount = createSlider(2, 50, 0);
  slider_particleCount.position(10, height * 1.2);
  slider_particleCount.style('width', '100px');

  //creates a <p> tag
  let elt_particleCount = createP('count');
  //references the <p> tags class in order to style it
  elt_particleCount.class('elt_particleCount');
  elt_particleCount.position(10, height * 1.06);

  //creates a slider to adjust the min distance need to form a connection
  lineLengthSlider = createSlider(33, 300, 0);
  lineLengthSlider.position(300, height * 1.2);
  lineLengthSlider.style('width', '100px');
  //creates a <p> tag
  let elt_lineLen = createP('distance');
  //references the <p> tags class in order to style it
  elt_lineLen.class('elt_lineLen');
  elt_lineLen.position(300, height * 1.06);

  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles[i] = new Particle(13);
  }
}

function draw() {
  background(51);
  noFill();
  stroke(255);
  rect(2, 2, width - 4, height - 4);

  for (let i = 0; i < particles.length; i++) {
    particles[i].render(lineLengthSlider.value());
  }

  if (particles.length < slider_particleCount.value()) {
    particles.push(new Particle(13));
  } else if (particles.length > slider_particleCount.value()) {
    particles.splice(0, 1);
  }
}