/*
click to add vertex points to build shape, click on first point made to complete shape
*/


const vertexPoints = [],
  refImages = [];

let onDraggable = false,
  onPoint = false,
  pg, isClosed = false,
  hasNewShape = false;

function setup() {
  createCanvas(760, 561);
  pg = createGraphics(width, height);
}

function draw() {
  background(51);


  if (!hasNewShape) {
    // draw axis
    push();
    stroke(33);
    line(width * 0.5, 0, width * 0.5, height);
    line(0, height * 0.5, width, height * 0.5);
    pop();

    //draw shape
    customShape();
    //draw vertex points
    for (let v of vertexPoints) {
      v.render();
    }
  } else {
    //draw created custom shape
    image(pg, 0, 0);
  }
}