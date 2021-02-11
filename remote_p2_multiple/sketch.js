const img_url = 'https://dl.dropboxusercontent.com/s/o6rrrl9kjsj6qio/colorwheel.png?dl=0';

const draggables = [];

let colorWheel, getColor;

function preload() {
  colorWheel = loadImage(img_url);
}

function setup() {
  createCanvas(colorWheel.width, colorWheel.height);
  colorMode(HSL, 360, 1, 1, 1);
  let pos = [{
      x: 150,
      y: 150
    },
    {
      x: 400,
      y: 150
    },
    {
      x: 150,
      y: 400
    },
    {
      x: 400,
      y: 400
    }
  ]


  for (let i = 0; i < 4; i++) {

    getColor = colorWheel.get(pos[i].x, pos[i].y);
    draggables[i] = new Draggable(pos[i], rgbToHsl(getColor));
  }
}

function draw() {
  clear();
  image(colorWheel, 0, 0);

  for (let i = 0; i < draggables.length; i++) {
    draggables[i].render(getColor);
  }
}

function mouseDragged() {
  for (let i = 0; i < draggables.length; i++) {
    if (draggables[i].isDraggable) {
      getColor = colorWheel.get(draggable[i].pos.x, draggable[i].pos.y);
      draggables[i].col = rgbToHsl(getColor);

    }
  }
}

function mousePressed() {
  for (let i = 0; i < draggables.length; i++) {
    if (draggables[i].hover()) {
      draggables[i].isDraggable = true;

      // set an offset to stop shape from centering on the mouse pos
      draggables[i].offset.x = draggables[i].pos.x - mouseX;
      draggables[i].offset.y = draggables[i].pos.y - mouseY;
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < draggables.length; i++) {
    if (draggables[i].isDraggable) {
      updateData(i, rgbToHsl(getColor));
      console.log(`hsla: ${rgbToHsl(getColor)}`);
    }
    draggables[i].isDraggable = false;
  }
}