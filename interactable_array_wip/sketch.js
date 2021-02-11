const elements = [],
  num_elements = 6,
  snapZones = [],
  num_snapZones = 6;

let elementsSnapped = 0,
  showSuccess = false;


for (let i = 0; i < num_elements; i++) {
  elements[i] = {};
  elements[i].res = {};
  elements[i].startPos = {};
}

for (let i = 0; i < num_snapZones; i++) {
  snapZones[i] = {};
  snapZones[i].occupied = false;
  snapZones[i].snapZone = {};
  snapZones[i].guestID = ' ';
}

const initSnapZones = _ => {
  snapZones.forEach((zone, idx) => {
    zone.snapZone.x = width * (idx / snapZones.length) + 30;
    zone.snapZone.y = height * 0.5;
  });
}


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  initSnapZones();

  for (let i = 0; i < num_elements; i++) {
    elements[i].id = i;
    elements[i].res.w = 40;
    elements[i].res.h = 40;
    elements[i].startPos.x = (i + 1) * (width / num_elements) - 30;
    elements[i].startPos.y = height * 0.8;

    elements[i].elementPart = new DraggableElement(elements[i].id, {
      x: elements[i].startPos.x,
      y: elements[i].startPos.y
    }, {
      w: elements[i].res.w,
      h: elements[i].res.h
    });
  }
}

function draw() {
  background(220);

  for (let i = 0; i < elements.length; i++) {
    elements[i].elementPart.render(elements[i].part);
  }

  let createdArray = [];
  for (let i = 0; i < snapZones.length; i++) {
    createdArray[i] = snapZones[i].guestID;
    push();
    noStroke();
    fill('#13172122');
    rect(snapZones[i].snapZone.x, snapZones[i].snapZone.y, 40, 40);
    pop();
  }

  push();
  noStroke();
  fill('#131721');
  textAlign(CENTER, CENTER);
  textSize(33);
  text(`[${createdArray}]`, width * 0.5, height * 0.25);
  pop();
}

const swapped = [];

function mousePressed() {
  let currentElementSnapped;
  // checkIfElementIsInteractable();

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].elementPart.hover()) {
      elements[i].elementPart.isDraggable = true;
      elements[i].elementPart.offset.x = elements[i].elementPart.pos.x - mouseX;
      elements[i].elementPart.offset.y = elements[i].elementPart.pos.y - mouseY;
      elements[i].elementPart.isSnapped = false;
      currentElementSnapped = i;
    }
    elements.forEach(element => {
      for (let j = 0; j < snapZones.length; j++) {
        if (dist(mouseX, mouseY, snapZones[j].snapZone.x, snapZones[j].snapZone.y) < 33) {
          if (!elements[i].elementPart.canBeSnapped()) {
            snapZones[j].occupied = false;
            snapZones[j].guestID = ' ';
          }
        }
      }
    })

    if (elements[i].isSnapped) {
      elements[i].isSnapped = false;
    }
  }
}

function mouseClicked() {
  //select 2 elements
  //swap positions
  //reset isSelected 
  //   for (let i = 0; i < elements.length; i++) {
  //     if (elements[i].elementPart.hover()) {
  //       elements[i].elementPart.isSelected = true;

  //       swapped.push({
  //         x: elements[i].elementPart.pos.x,
  //         y: elements[i].elementPart.pos.y
  //       })
  //       // console.log(swapped.length)
  //     }
  //   }

  //   if (swapped.length > 1) {
  //     let idx = 1;
  //     elements.forEach(element => {
  //       // console.log('swapped')
  //       if (element.elementPart.isSelected) {
  //         element.elementPart.setPos(swapped[idx])
  //         idx--;
  //       }
  //       element.elementPart.isSelected = false;
  //     });
  //         swapped.length = 0;
  //   }
}

function mouseReleased() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].elementPart.isDraggable = false;
  }
}