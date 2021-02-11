let graphics, col;

let img,weave, isLooping = true;

function preload() {
  img = loadImage('https://picsum.photos/400/800/?random', _ => {
    img.resize(img.width * 1, img.height * 1)
  });
}

function setup() {
  createCanvas(img.width*2+20, img.height);
  clear();

  graphics = createGraphics(width, height);
  drawNoiseBackground(graphics, col);

  rectMode(CENTER);
}


function drawNoiseBackground(g) {
  graphics.clear();
  let noiz = 0.1;
  let rnd = random(0.000001, 0.00001);
  let roughness = random(30000, 100000);
  for (let i = 0; i < roughness; i++) {
    const x = random(1) * width;
    const y = random(1) * height;
    let col = img.get(x, y)

    let col_avg = col[0] + col[1] + col[2] + col[3];

    let rot = map(col_avg, 0, 1020, 0, 360)
    let pix = map(col_avg, 0, 1020, 0, 8)
    let len = 0;

    if (col_avg <= 126) {
      graphics.strokeWeight(noise(noiz) * 11)
      len = noise(noiz) * -3;
    } else if (col_avg >= 127 && col_avg <= 255) {
      graphics.strokeWeight(noise(noiz) * 7)
      len = noise(noiz) * -2;
    } else if (col_avg >= 256 && col_avg <= 510) {
      graphics.strokeWeight(noise(noiz) * 5)
      len = noise(noiz) * 2;
    } else if (col_avg >= 511 && col_avg <= 636) {
      graphics.strokeWeight(noise(noiz) * 3)
      len = noise(noiz) * 4;
    } else if (col_avg <= 637 && col_avg <= 764) {
      graphics.strokeWeight(noise(noiz) * 1)
      len = noise(noiz) * 6;
    } else if (col_avg >= 765 && col_avg <= 892) {
      graphics.strokeWeight(noise(noiz) * 0.5)
      len = noise(noiz) * 8;
    } else if (col_avg >= 893) {
      graphics.strokeWeight(noise(noiz) * 0.1)
      len = noise(noiz) * 10;
    }

    graphics.stroke(col);
    graphics.fill(col);
    graphics.push();
    graphics.translate(x, y);
    graphics.rotate(radians(rot));
    // graphics.line(0, 0, pix+len, pix+len);
    graphics.beginShape();
    graphics.vertex(0, 0);
    graphics.vertex(pix, pix);
    graphics.vertex(pix, pix);
    graphics.vertex(pix + len, pix + len);
    graphics.vertex((pix + len) * weave, (pix + len) * weave);
    graphics.endShape();
    graphics.pop();
    noiz += rnd;
    
    
    
    (isLooping) ? weave = map(sin((millis() * (pix+len))), -1.0, 1.0, 0.5, 1.25) : weave = 0;
		
  }
}




function draw() {
  background(33);
  image(img,0,0);
  image(graphics, img.width+20, 0);
}


function mousePressed() {
  drawNoiseBackground(graphics, col);
}