let angle = 0;
let scalar = 100;
let state = 0;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.mouseClicked(_ => {
    (state <= 4) ? state++ : state = 0;
  })
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background('#f8f8f8');

  let ang = radians(angle);

  const pos = {
    x: width / 2 + scalar * cos(ang),
    y: height / 2 + scalar * sin(ang)
  }

  switch (state) {
    case 0:
      push();
      fill('#131721');
      ellipse(pos.x, pos.y, 30);
      pop();
      break;

    case 1:
      push();
      noFill();
      stroke('#131721');
      ellipse(pos.x, height * 0.5, 30);
      ellipse(width * 0.5, pos.y, 30);
      pop();
      break;

    case 2:
      push();
      noFill();
      stroke('#131721');
      ellipse(width * 0.5, height * 0.5, pos.x / 2, pos.y / 2);
      ellipse(width * 0.5, height * 0.5, pos.y / 2, pos.x / 2);
      ellipse(width * 0.5, height * 0.5, pos.x / 2);
      ellipse(width * 0.5, height * 0.5, pos.y / 2);
      pop();
      break;

    case 3:
      push();
      noFill();
      stroke('#131721');
      rect(width * 0.5, height * 0.5, pos.x, height * 0.5);
      rect(width * 0.5, height * 0.5, width * 0.5, pos.y);
      rect(width * 0.5, height * 0.5, pos.x, pos.y, );
      pop();
      break;

    case 4:
      push();
      noFill();
      stroke('#131721');
      translate(width * 0.5, height * 0.5);
      for (let i = 0; i < 9; i++) {
        rotate(degrees(i * (360 / 9)));
        triangle(-pos.x / 2, pos.y / 2, 0, -pos.y / 2, pos.x / 2, pos.y / 2);
      }
      pop();
      break;

    case 5:
      push();
      noFill();
      stroke('#131721');
      translate(width * 0.5, height * 0.5);
      quad(-pos.x / 2, -pos.y / 2, pos.x / 2, -pos.y / 4, pos.x / 2, pos.y / 2, -pos.x / 4, pos.y / 2);
      pop();
      break;
  }
  //   
  angle++;
}