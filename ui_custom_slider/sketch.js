const sObj = [],
  sScale = [];
let slider;

function setup() {
  createCanvas(720, 640);
  rectMode(CENTER);
  ellipse(CENTER);
  slider = new Slider();
  for (let i = 0; i < 13; i++) {
    sScale[i] = new SlideScale(i * 90, height * 0.42, i);
  }

  for (let i = 0; i < 13; i++) {
    sObj[i] = new ScaledObj(i * 65, height * 0.5, i);
  }

}

function draw() {
  background(map(sScale[0].s, 0, width, 0, width / 2), 100, 100);
  
  slider.render();
  
  for (let i = 0; i < sScale.length; i++) {
    sScale[i].render();
  }
  for (let i = 0; i < sObj.length; i++) {
    // sObj[i].render();
  }
}

function mousePressed() {
  if (slider.hover()) {
    slider.isDraggable = true;
    slider.offset.x = slider.pos.x - mouseX;
    slider.offset.y = slider.pos.y - mouseY;
  }
}

function mouseReleased() {
  slider.isDraggable = false;
}