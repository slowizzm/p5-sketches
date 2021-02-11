//NoC

const seekers = [],
  NUM_SEEKERS = 33;

let seeked;


function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);

  for (let i = 0; i < NUM_SEEKERS; i++) {
    seekers[i] = new Seeker(random(width), random(height));
  }

  seeked = new Seeked();
}

function draw() {
  background(13, 17, 21);

  seekers.forEach(seeker => {
    seeker.render(createVector(seeked.pos.x, seeked.pos.y));
  });

  seeked.render();
}