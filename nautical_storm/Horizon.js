class Horizon {
  constructor() {

  }
  mountains() {

    noStroke();
    fill("#3794ef");
    ellipse(90, 100, 80, 80);
    
    
    fill('#737cff');
    triangle(200, 400, 400, 400, 300, 100);
    fill('#36baef88');
    triangle(250, 400, 450, 400, 350, 180);
    fill('#18abef88');
    triangle(150, 400, 350, 400, 250, 160);
    strokeWeight(2);
    stroke('#3772ab');
    line(150, 420, 450, 420);
    stroke('#3772abdd');
    line(200, 440, 400, 440);
    stroke('#3772abaa');
    line(250, 460, 350, 460);
    stroke('#3772ab77');
    line(280, 480, 320, 480);
  }

  stars() {
    stroke('#f2f2f2');
    strokeWeight(2 + random(2));
    point(50, 270);
    push();
    stroke('#f2f2f299');
    point(390, 260);
    pop();
    push();
    stroke('#f2f2f2bb');
    point(210, 170);
    pop();
    push();
    stroke('#f2f2f2dd');
    point(510, 230);

    point(460, 30);

    push();
    stroke('#f2f2f266');
    point(310, 120);
    pop();
  }
}