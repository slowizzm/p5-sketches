const lightningProps = {
  start: {
    x: 0,
    y: 0
  },
  end: {
    x: 0,
    y: 0
  },
  thickness: 12,
  taper: 2.25,
  bolt_length: 7,
  angles: {
    x: [],
    y: []
  },
  col: '#830a38'
};

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < lightningProps.bolt_length; i++) {
    lightningProps.angles.x[i] = random(-42, 42);
    lightningProps.angles.y[i] = random(33, 42);
  }
}

function draw() {
  clear();
  lightning(lightningProps.angles);
}

function lightning(angles) {
  lightningProps.start.x = width * 0.5;
  lightningProps.start.y = 0;


  for (let i = 0; i < lightningProps.bolt_length; i++) {
    lightningProps.end.x = lightningProps.start.x + lightningProps.angles.x[i];
    lightningProps.end.y = lightningProps.start.y + lightningProps.angles.y[i];

    strokeWeight(lightningProps.thickness - lightningProps.taper * i);
    stroke(lightningProps.col);
    line(lightningProps.start.x, lightningProps.start.y, lightningProps.end.x, lightningProps.end.y);


    lightningProps.start.x = lightningProps.end.x;
    lightningProps.start.y = lightningProps.end.y;
  }
}