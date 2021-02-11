let img,
  g,
  toggleImageToDraw = false;

function preload() {
  img = loadImage('potrait.png');
}

function setup() {
  createCanvas(1000, 500);
  g = createGraphics(500, 500);
  setInterval(_ => {
    toggleImageToDraw = !toggleImageToDraw;
  }, 10000);
}


function draw() {
  let x1 = random(0, 300);
  let y1 = random(0, height);

  let x2 = x1 + 500;
  let w = 200;
  let h = height / 100;

  if (!toggleImageToDraw) {
    g.set(x1, y1, img.get(x2, y1, w, h));
  } else {
    g.set(x1, y1, img.get(x1, y1, w, h));
  }

  image(g, 0, 0);
}