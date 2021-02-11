const vertexPoints = [],
  refImages = [];

let onDraggable = false,
  onPoint = false,
  pg, isClosed = false,
  hasNewShape = false;



function preload() {
  tex = loadImage(url);
}
let cnv;

function setup() {
  cnv = createCanvas(tex.width, tex.height);
  background('#f8f8f8');
  pixelDensity(1);
  pg = createGraphics(width, height);

  img_shape = createGraphics(width, height);
  pg = createGraphics(width, height);
  pg_overlay = createGraphics(width, height);
}

function draw() {
  background(tex);


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
    createCustomShape();
    pixelate();
  }
}