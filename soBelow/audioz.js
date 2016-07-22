function preload() {
  mySound = loadSound('assets/iDevil.mp3');
}

function keyPressed() {
  
  //Press S
  if (keyCode === 83) {
    loadImage("assets/anghellicLotus.png", function(img) {
      tint(255, 13);
      image(img, 0, 0, sWidth, sHeight);
    });
   
    //Press D
  } else if (keyCode === 68) {
    loadImage("assets/anghellic.png", function(img) {
      tint(255, 13);
      image(img, 0, 0, sWidth, sHeight);
    });
  
  //Press F
   } else if (keyCode === 70) {
    loadImage("assets/lotusIzzm.png", function(img) {
    tint(255, 13);
    image(img, 0, 0, sWidth, sHeight);
  });
  
     //Press Spacebar to Save
   }else if (keyCode === 32) {
     saveCanvas('myCanvas', 'img', 'jpg');
   }
}