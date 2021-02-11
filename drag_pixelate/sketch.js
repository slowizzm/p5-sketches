let img,
  pixelation = {
    start: {
      x: 0,
      y: 0
    },
    end: {
      x: 0,
      y: 0
    },
    pix: 16, // Pixel size
    isPixelated: false
  };

function preload() {
  img = loadImage('https://picsum.photos/400/800/?random');
}

function setup() {
  smooth();
  createCanvas(img.width, img.height);
}


function draw() {
  background(img);
  if (pixelation.isPixelated) {
    // Draw the bounding box
    strokeWeight(10)
    stroke(3, 11, 33, 30);
    rect(pixelation.start.x, pixelation.start.y, pixelation.end.x - pixelation.start.x, pixelation.end.y - pixelation.start.y);
    noFill();
  } else {
    drawPixelation();
  }
}

function drawPixelation() {

  // Draw the pixelation
  //top left --> bottom right
  for (let x = pixelation.start.x; x < pixelation.end.x; x += pixelation.pix) {
    for (let y = pixelation.start.y; y < pixelation.end.y; y += pixelation.pix) {
      let col = img.get(x, y);
      fill(col);
      stroke(col);
      rect(x, y, pixelation.pix, pixelation.pix);
      noFill()
    }
  }

  //top right --> bottom left
  for (let x = pixelation.end.x; x < pixelation.start.x; x += pixelation.pix) {
    for (let y = pixelation.start.y; y < pixelation.end.y; y += pixelation.pix) {
      let col = img.get(x, y);
      fill(col);
      stroke(col);
      rect(x, y, pixelation.pix, pixelation.pix);
      noFill()
    }
  }


  //bottom left --> top right
  for (let x = pixelation.start.x; x < pixelation.end.x; x += pixelation.pix) {
    for (let y = pixelation.end.y; y < pixelation.start.y; y += pixelation.pix) {
      let col = img.get(x, y);
      fill(col);
      stroke(col);
      rect(x, y, pixelation.pix, pixelation.pix);
      noFill()
    }
  }

  //bottom right --> top left
  for (let x = pixelation.end.x; x < pixelation.start.x; x += pixelation.pix) {
    for (let y = pixelation.end.y; y < pixelation.start.y; y += pixelation.pix) {
      let col = img.get(x, y);
      fill(col);
      stroke(col);
      rect(x, y, pixelation.pix, pixelation.pix);
      noFill()
    }
  }
}


function mousePressed() {
  pixelation.start.x = mouseX - mouseX % pixelation.pix;
  pixelation.start.y = mouseY - mouseY % pixelation.pix;
  pixelation.end.x = mouseX - mouseX % pixelation.pix;
  pixelation.end.y = mouseY - mouseY % pixelation.pix;
  pixelation.isPixelated = false;
}

function mouseDragged() {
  pixelation.end.x = pmouseX - pmouseX % pixelation.pix;
  pixelation.end.y = pmouseY - pmouseY % pixelation.pix;
  pixelation.isPixelated = true;
}

function mouseReleased() {
  pixelation.isPixelated = false;
}