function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);

  orbitControl();

  let z = map(sin(frameCount), -1, 1, 300, 500);
	
  camera(0, 0, z,
    0, 0, 0,
    0, 1, 0);


	let num = 10;
  for (let i = 0; i < num; i++) {
    noFill();
    let h2 = map(i, 0, num, 250, 330);
    stroke(h2, 80, 100);
    push();
    rotateY(frameCount + i * 3);
    rotateZ(frameCount / 2 + i * 3);
    let w = map(i, 0, num, 0, 200);
    let h = map(i, 0, num, 0, 400);
    let d = map(i, 0, num, 0, 100);
    box(w, h, d);
    pop();
  }

}