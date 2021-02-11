let catmoji = {
  cat: null,
  pos: {
    x: 30,
    y: 30
  },
  res: {
    w: 30,
    h: 30
  }
};

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  catmoji.pos.x = width * 0.2;
  catmoji.pos.y = height * 0.2;
  catmoji.cat = new Catmoji(catmoji.pos, catmoji.res);
}

function draw() {
  background(220);

  catmoji.cat.render();
}