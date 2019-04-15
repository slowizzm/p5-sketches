let predator;
let prey = [];
let behaviorSelect;

function setup() {
  createCanvas(640, 480);
  noCursor();
  behaviorSelect = createSelect();
  behaviorSelect.option('Attract');
  behaviorSelect.option('Repulse');
  behaviorSelect.position(20, 20);
  behaviorSelect.value('Repulse');

  predator = new Predator();

  for (let i = 0; i < random(10, 30); i++) {
    prey.push(new Prey());
  }
}

function draw() {
  background(33);

  predator.display();
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    predator.move(mouseX, mouseY);
  }



  for (let i = 0; i < prey.length; i++) {
    prey[i].render(predator);
  }
}