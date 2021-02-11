//WIP

let drag,
  draggableObject,
  snapBackSlider,
  snapBack;

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  draggableObject = new DraggableObject(width * 0.5, height * 0.3, 50);

  drag = false;

  snapBackSlider = createSlider(1, 200, 1);
  snapBackSlider.position(width * 0.03, height * 0.15);
}

function draw() {
  snapBack = snapBackSlider.value();
  background(13, 17, 21);
  let startPos = createVector(width * 0.5, height * 0.3);

  fill(242);
  noStroke();
  textSize(17);
  text("Drag: " + drag, width * 0.035, height * 0.06);
  text("Return Speed", width * 0.035, height * 0.13);
  text(snapBackSlider.value(), width * 0.175, height * 0.13);

  if (!drag) {
    draggableObject.update(1);
    draggableObject.seek(startPos);
    draggableObject.arrive(startPos);
  } else {
    draggableObject.update(0);
  }
  draggableObject.display();
}

//touchStarted on mobile
function mousePressed() {
  let distance = dist(mouseX, mouseY, draggableObject.pos.x, draggableObject.pos.y);

  // if touching ellipse, start drag
  if (distance < draggableObject.size) {
    drag = true;
  } else {
    drag = false;
  }
}

//touchEnded on mobile
function mouseReleased() {
  drag = false;
}

//touchMoved on mobile
function mouseDragged() {
  if (drag === true) {
    //draggableObject.pos.x = mouseX;
    draggableObject.pos.y = mouseY;
  }
}