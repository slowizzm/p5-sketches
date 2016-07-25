/* warp the surface - Copyright © 2016 Raymond G McCord (slow_izzm). All Rights Reserved
 */

var video;
var sWidth = 1280;
var sHeight = 720;

var value = 0;

var col = {
  r: 233,
  g: 13,
  b: 3,
  a: 50,
  display: function() {
    fill(col.r, col.g, col.b, 1);
    noStroke();
    ellipse(mouseX, mouseY, 133, 133);

    mouseX = mouseX + random(-13, 13);
    mouseY = mouseY + random(-13, 13);
  }
}

function setup() {
  createCanvas(sWidth, sHeight);
  video = createCapture(VIDEO);
  video.size(sWidth, sHeight);
  video.hide();
  x = width / 2;
  y = height / 2;
  // background(255, 200, 0);
  // setTimeout(javasoul, 3000);
  javasoul();
  mySound.setVolume(1);
  mySound.loop();




}

function javasoul() {
  loadImage("assets/javasoulweb.jpg", function(img) {
    image(img, sWidth, sHeight);



    // tint(255, 1);
  });

}

function draw() {




  for (i = 0; i < 100; i++) {
    fill(233, 255, 50, .11);
    noStroke();
    ellipse(x, y, 33, .7);
    fill(255, 255, 255, .3);
    ellipse(y, x, 33, 333);


    x = x + random(-13, 13);
    y = y + random(-13, 13);
  }
  if (x < 0) {
    x = windowWidth / 2;
  }

  if (x > windowWidth) {
    x = windowWidth / 2;

  }
  if (y < 0) {
    y = windowHeight / 2;
  }

  if (y > windowHeight) {
    y = windowHeight / 2;
  }

  background(233, 200, 0, 1);


  tint(255, 3);
  image(video, 0, 0, sWidth, sHeight);


  mySound.rate(map(mouseX, 0, width, .03, .33));

}
//touch    
function mouseDragged() {
  for (i = 0; i < 1000; i++) {

    fill(200, 13, 0, .8);
    noStroke();
    triangle(x, y, mouseX, mouseY, 33, 67);
    fill(200, 13, 200, .8);
    noStroke();
    ellipse(x, y, mouseY, mouseX);
    col.display();
  }
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight); 
}
}
