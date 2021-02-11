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

    let x = width * 0.5;
    let y = height * 0.5;

    fill(db.records[0].fields.h, db.records[0].fields.s, db.records[0].fields.l, db.records[0].fields.a);
    rect(x, y, 50, 200);
    x += width / 4;
  }
}