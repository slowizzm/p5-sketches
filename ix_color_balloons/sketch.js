let cols = ['rgba(208,196,170,.3)',
  'rgba(143,211,194,.3)',
  'rgba(238,200,97,.3)',
  'rgba(239,167,89,.3)',
  'rgba(228,147,137,.3)'
];

let ltrs = ['C',
  'O',
  'L',
  'O',
  'R'
];
let balloons = [];
let c = 0;

function setup() {
  createCanvas(375, 667);
  noStroke();
  for (let i = 1; i < 6; i++) {

    balloons.push(new Balloon(i * 60, height * 0.4, 77, cols[c], ltrs[c]));
    c++
  }
}

function draw() {
  background(251, 247, 235);
  push();
  textSize(13);
  textAlign(CENTER);
  fill(151, 147, 135);
  text("Click and drag balloon up or down, release to return.", width * 0.5, height * 0.05);
  pop();

  balloons.forEach((balloon, index) => {
    let startPos = createVector(balloon.pos.x, height * 0.4);

    if (!balloon.isDraggable) {
      balloon.render(1, startPos);
    } else {
      balloon.update(0);
    }
    balloon.display();
  });
}

function mousePressed() {
  let distance = [];
  for (i = 0; i < balloons.length; i++) {
    let d = [dist(mouseX, mouseY, balloons[i].pos.x, balloons[i].pos.y)];
    distance.push(d);
    if (distance[i] < balloons[i].size / 3) {
      balloons[i].isDraggable = true;
      //console.log(i);
    }
  }
}

//touchEnded on mobile
function mouseReleased() {
  for (i = 0; i < balloons.length; i++) {
    balloons[i].isDraggable = false;
    //console.log(i+ " " + "released");
  }
}

//touchMoved on mobile
function mouseDragged() {
  let distance = [];
  for (i = 0; i < balloons.length; i++) {
    let d = [dist(mouseX, mouseY, balloons[i].pos.x, balloons[i].pos.y)];
    distance.push(d);
    if (balloons[i].isDraggable === true) {
      //console.log(i+" "+"drag");
      //balloon[i].pos.x = mouseX;
      balloons[i].pos.y = mouseY;
      //console.log(i);
    }
  }
}
