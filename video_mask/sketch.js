let mask, vid;


function setup() {
  createCanvas(600, 600);
  vid = createVideo('jellyfish.mp4');
  mask = createGraphics(width, height);
  vid.loop();
  vid.class('vid');
  imageMode(CENTER);

}

function draw() {
  background(33);

  vidMaskShape();
  vidMaskDisplay();
}

const vidMaskShape = () => {
  mask.push();
  mask.translate(-75, 0);
  mask.beginShape();
  mask.curveVertex(134, 150)
  mask.curveVertex(168, 65)
  mask.curveVertex(391, 17)
  mask.curveVertex(630, 49)
  mask.curveVertex(590, 192)
  mask.curveVertex(439, 153)
  mask.curveVertex(503, 385)
  mask.curveVertex(481, 525)
  mask.curveVertex(298, 587)
  mask.curveVertex(143, 462)
  mask.curveVertex(242, 378)
  mask.curveVertex(354, 453)
  mask.curveVertex(391, 373)
  mask.curveVertex(371, 165)
  mask.curveVertex(134, 150)
  mask.curveVertex(168, 65)
  mask.curveVertex(277, 83)
  mask.endShape();
  mask.pop();
}

const vidMaskDisplay = () => {
  vid.mask(mask);
  image(vid, width * 0.5, height * 0.5, vid.width * 1.5, vid.height * 1.5);
}