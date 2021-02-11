const polyPoints = [{
    x: 445,
    y: 240
  },
  {
    x: 350,
    y: 410
  },
  {
    x: 150,
    y: 410
  },
  {
    x: 45,
    y: 240
  },
  {
    x: 150,
    y: 60
  },
  {
    x: 240,
    y: 225
  }
];


let tex, //texture
  url = 'https://picsum.photos/800/800/?random', //source
  img_shape; //graphics buffer

const cols = [];


function pixelate() {
  let d = dist(mouseX, mouseY, width * 0.5, height * 0.5);
  let pix = 16;
  for (let y = 0; y < height; y += pix) {
    for (let x = 0; x < width; x += pix) {
      if (img_shape.get(x, y)[3] != 0) {
        
        strokeWeight(1);
        stroke(tex.get(x, y));
        fill(tex.get(x, y));
        rectMode(CENTER);
        rect(x,y, pix, pix);
      }
    }
  }
}

function createCustomShape() {
  img_shape.push();

  img_shape.beginShape();
  for (let i = 0; i < vertexPoints.length; i++) {
    img_shape.vertex(vertexPoints[i].pos.x, vertexPoints[i].pos.y);
  }

  img_shape.endShape(CLOSE);
  img_shape.pop();
}