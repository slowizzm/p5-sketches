let img;

function preload() {
  img = loadImage('assets/stroll.png')
}

async function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);
  rectMode(CENTER);
  imageMode(CENTER);
  // await blocks until the promise is resolve
  await getData()
  console.log(db)

  setInterval(_ => {
    getData()
  }, 200)
}

function draw() {
  background(200, 0.2, 0.1, 1)
  if (hasData) {

    let x = 50;
    let y = height * 0.5;
    db.records.forEach(record => {
      fill(record.fields.h, record.fields.s, record.fields.l, record.fields.a);
      rect(x, y, 50, 200);
      x += width / 4;
    })

    image(img, width / 2, y);
  }
}