let _text, img, pg, xoff,yoff,para;

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4, WEBGL);
  img = loadImage('https://picsum.photos/200/300/?random');
  pg = createGraphics(600,600);

  _text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  _text.textFont('Source Code Pro');
  _text.textAlign(CENTER);
  _text.textSize(133);
  _text.fill(0);
  _text.text('test', width * 0.5, height * 0.5);
}

function draw() {
  background(217);
  clear();
  para = map(mouseX, 0, width, -0.1, 0.1)
  xoff = map(mouseX, 0, width, 33, 5)
  yoff = map(mouseX, 0, width,1, 3)
  noStroke();
  // pg.translate(mouseX,mouseY);
  pg.push();
  pg.noStroke();
  // pg.scale(0.25);
  pg.translate(-110,-60);
  // pg.translate(-10,-3);
  pg.fill(33,1);
  pg.beginShape();  
pg.curveVertex(377-xoff,137-yoff) 
pg.curveVertex(251-xoff,251-yoff) 
pg.curveVertex(217-xoff,327-yoff) 
pg.curveVertex(213-xoff,411-yoff) 
pg.curveVertex(243-xoff,480-yoff) 
pg.curveVertex(317-xoff,527-yoff) 
pg.curveVertex(402-xoff,550-yoff) 
pg.curveVertex(514-xoff,547-yoff) 
pg.curveVertex(578-xoff,503-yoff) 
pg.curveVertex(616-xoff,411-yoff) 
pg.curveVertex(617-xoff,317-yoff) 
pg.curveVertex(582-xoff,240-yoff) 
pg.curveVertex(518-xoff,206-yoff) 
pg.curveVertex(476-xoff,210-yoff) 
pg.curveVertex(457-xoff,276-yoff) 
pg.curveVertex(436-xoff,325-yoff) 
pg.curveVertex(412-xoff,272-yoff) 
pg.curveVertex(372-xoff,180-yoff) 
pg.curveVertex(304-xoff,206-yoff) 
pg.curveVertex(251-xoff,251-yoff) 
pg.curveVertex(203-xoff,256-yoff) 
 pg.endShape(); 
  
  // pg.translate(0,0);
  pg.fill(100,200,100);
  pg.beginShape();  
pg.curveVertex(377,137) 
pg.curveVertex(251,251) 
pg.curveVertex(217,327) 
pg.curveVertex(213,411) 
pg.curveVertex(243,480) 
pg.curveVertex(317,527) 
pg.curveVertex(402,550) 
pg.curveVertex(514,547) 
pg.curveVertex(578,503) 
pg.curveVertex(616,411) 
pg.curveVertex(617,317) 
pg.curveVertex(582,240) 
pg.curveVertex(518,206) 
pg.curveVertex(476,210) 
pg.curveVertex(457,276) 
pg.curveVertex(436,325) 
pg.curveVertex(412,272) 
pg.curveVertex(372,180) 
pg.curveVertex(304,206) 
pg.curveVertex(251,251) 
pg.curveVertex(203,256) 
 pg.endShape();
  pg.pop();
  
   texture(pg);
  rotateY(para);
   plane(600,600);
  

}