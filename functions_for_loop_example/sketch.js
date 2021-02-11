let rot = 0,
  pg;

function setup() {
  createCanvas(400, 400);
  pg = createGraphics(width, height);

  background(220);

  for (let i = -width; i < width; i += 10) {

    myfunc(i, 10, 10);
  }
  myfunc(100, 10, 30);

  image(pg, 0, 0);
}


function myfunc(x, y, scl) {
  pg.push();
  pg.translate(x, y)
  for (let i = 0; i < width; i += scl / 4) {
    pg.push();
    pg.strokeWeight(map(dist(i, i, width * 2, height * 2), 0, 255, 0.025, 0.25))
    pg.stroke(13, 17, 21, map(dist(i, i, width * 2, height * 2), 0, 255, 255, 220));
    pg.translate(i, i);
    pg.rotate(radians(i + rot))
    pg.ellipse(0, 0, scl);
    pg.ellipse(-10, -20, scl);
    pg.ellipse(10, 20, scl);
    pg.pop();
  }
  pg.pop();

  rot += 0.24;
}