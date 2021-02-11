const img_url = 'https://dl.dropboxusercontent.com/s/o6rrrl9kjsj6qio/colorwheel.png?dl=0';

let draggable;

let colorWheel, getColor;

function preload() {
  colorWheel = loadImage(img_url);
}

function setup() {
  createCanvas(colorWheel.width, colorWheel.height);
  colorMode(HSL, 360, 1, 1, 1);
  let pos = {
    x: 150,
    y: 150
  }

  getColor = colorWheel.get(pos.x, pos.y);
  draggable = new Draggable(pos, rgbToHsl(getColor));
}

function draw() {
  clear();
  image(colorWheel, 0, 0);

  draggable.render(getColor);
}

function mouseDragged() {

  if (draggable.isDraggable) {
    getColor = colorWheel.get(draggable.pos.x, draggable.pos.y);
    draggable.col = rgbToHsl(getColor);
  }
}

function mousePressed() {

  if (draggable.hover()) {
    draggable.isDraggable = true;

    // set an offset to stop shape from centering on the mouse pos
    draggable.offset.x = draggable.pos.x - mouseX;
    draggable.offset.y = draggable.pos.y - mouseY;
  }
}

function mouseReleased() {

  if (draggable.isDraggable) {
    updateData(rgbToHsl(getColor));
    console.log(`hsla: ${rgbToHsl(getColor)}`);
  }
  draggable.isDraggable = false;
}