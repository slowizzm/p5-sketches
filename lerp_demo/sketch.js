function setup() {
  createCanvas(800, 800);
  background(200);
  fill(3, 7, 11);
  strokeWeight(2);
  for (let x = 0; x < width; x += 7) {
    let n = map(x, 0, width, -1, 1);
    let p = pow(n, 3);
    let x2 = lerp(width * 0.5, width, p);
    (dist(x2, x, width * 0.5, height * 0.5) < 100) ? null: (line(x, 0, x, x2), line(-x2 * width * 0.5, x2 * width * 0.25, x, x2));
  }
}