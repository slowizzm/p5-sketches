let cols = ['rgba(208,196,170,.3)',
  'rgba(143,211,194,.3)',
  'rgba(238,200,97,.3)',
  'rgba(239,167,89,.3)',
  'rgba(228,147,137,.3)'
];

let circLetters = ['C',
  'O',
  'L',
  'O',
  'R'
];
let balloon = [];
let drag = [];

function setup() {
  createCanvas(375, 667);
  noStroke();
  for (let i = 1; i <= 6; i++) {
    let b = new Balloon(i * 60, height * 0.4, 77, i - 1);
    balloon.push(b);
  }
  for (let i = 0; i < balloon.length; i++) {
    drag[i] = false;
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
  for (let i = 0; i < 5; i++) {
    let startPos = createVector(balloon[i].pos.x, height * 0.4);

    if (!drag[i]) {
      balloon[i].render(1,startPos);
    } else {
      balloon[i].update(0);
    }
    balloon[i].display(i);
  }
}

function mousePressed() {
  let distance = [];
  for (i = 0; i < balloon.length; i++) {
    let d = [dist(mouseX, mouseY, balloon[i].pos.x, balloon[i].pos.y)];
    distance.push(d);
    if (distance[i] < balloon[i].size / 3) {
      drag[i] = true;
      //console.log(i);
    }
  }
}

//touchEnded on mobile
function mouseReleased() {
  for (i = 0; i < balloon.length; i++) {
    drag[i] = false;
    //console.log(i+ " " + "released");
  }
}

//touchMoved on mobile
function mouseDragged() {
  let distance = [];
  for (i = 0; i < balloon.length; i++) {
    let d = [dist(mouseX, mouseY, balloon[i].pos.x, balloon[i].pos.y)];
    distance.push(d);
    if (drag[i] === true) {
      //console.log(i+" "+"drag");
      //balloon[i].pos.x = mouseX;
      balloon[i].pos.y = mouseY;
      //console.log(i);
    }
  }
}
