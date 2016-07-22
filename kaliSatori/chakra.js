function Chakra() {



  this.display = function() {
    var circleX = map(mouseX, 0, width, 33, 480);

    //orb
    ellipseMode(CENTER);
    stroke(233, 133, 233);
    noFill();
    //point(width / 2, height / 2, 10, 10);

    ellipse(width / 2, height / 2, circleX, circleX);
    ellipse(width / 2, height / 2, circleX - 10, circleX - 10);
    ellipse(width / 2, height / 2, circleX - 20, circleX - random(20));
    ellipse(width / 2, height / 2, circleX - 30, circleX - 30);
    ellipse(width / 2, height / 2, circleX - random(40), circleX - 40);
    ellipse(width / 2, height / 2, circleX - 50, circleX - 50);
    ellipse(width / 2, height / 2, circleX - 60, circleX - random(60));
    ellipse(width / 2, height / 2, circleX - 70, circleX - 70);
    ellipse(width / 2, height / 2, circleX - random(80), circleX - 80);
    ellipse(width / 2, height / 2, circleX - 90, circleX - 90);
    ellipse(width / 2, height / 2, circleX - 100, circleX - random(100));
    ellipse(width / 2, height / 2, circleX - 110, circleX - 110);
    ellipse(width / 2, height / 2, circleX - random(120), circleX - 120);
    ellipse(width / 2, height / 2, circleX - 130, circleX - 130);
    ellipse(width / 2, height / 2, circleX - 140, circleX - random(140));
    ellipse(width / 2, height / 2, circleX - 150, circleX - 150);
    ellipse(width / 2, height / 2, circleX - random(160), circleX - 160);
    ellipse(width / 2, height / 2, circleX - 170, circleX - 170);
    ellipse(width / 2, height / 2, circleX - 180, circleX - random(180));
    ellipse(width / 2, height / 2, circleX - 190, circleX - 190);
    ellipse(width / 2, height / 2, circleX - random(200), circleX - 200);
    ellipse(width / 2, height / 2, circleX - 210, circleX - 210);
    ellipse(width / 2, height / 2, circleX - 220, circleX - random(220));
    ellipse(width / 2, height / 2, circleX - 230, circleX - 230);
    ellipse(width / 2, height / 2, circleX - random(240), circleX - 240);
    ellipse(width / 2, height / 2, circleX - 250, circleX - 250);
    ellipse(width / 2, height / 2, circleX - 260, circleX - random(260));
    ellipse(width / 2, height / 2, circleX - 270, circleX - 270);
    ellipse(width / 2, height / 2, circleX - random(280), circleX - 280);
    ellipse(width / 2, height / 2, circleX - 290, circleX - 290);
    ellipse(width / 2, height / 2, circleX - 300, circleX - random(300));
    // rectMode(CENTER);
    // noStroke();
    // fill(colr, colg, colb);
    // //point(width / 2, height / 2, 10, 10);
    // rect(width / 2, height / 2 + 100, 1000, 200);



    var len = map(mouseX, 0, width, 13, 33);
    var mit = map(mouseX, 0, width, -77, 77);
    var mut = map(mouseY, 0, height, 2, 22);
    push();
    translate(width / 2, height / 2);
    rots = 0;



    for (var i = 0; i < res + 1; i++) {
      push();
      var offSet = (TWO_PI / res) * i;


      var pat = map(cos(scl - offSet * mit), .001, 1, 3, len);



      stroke(133, 133, 223);
      strokeWeight(1);
      fill(100, 255, 210);
      rotate(rots);
      for (var j = 0; j < pat; j++) {
        ellipse(.03 + j * 7, mut, 3 + j, .3 * j);
        point(.03 + j * random(77), mut, 3 + j, .3 * j);
        point(.03 + j * 7, mut, 3 + j, .3 * j);

      }
      pop();
      rots = (TWO_PI / res) * i;
    }
    pop();

    scl += (TWO_PI / spd);





  }
}
