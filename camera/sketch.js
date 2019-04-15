var img;
var emoji_bright, emoji_dark;

function setup() { 
  createCanvas(640, 480);
  
  img = createCapture(VIDEO);
  img.size(320, 240);
  img.hide();
}

function draw() {
  
  img.loadPixels();
  
  for (var y=0; y<img.height; y+=10)
  {
    for (var x=0; x<img.width; x+=10)
    {
      var pix = img.pixels[(y*img.width+x)*4];
      
      if (pix <= 128)
      {
        fill(0, 0, 0);
        ellipse(x*2, y*2, 20, 20);
      }
      else
      {
        fill(255);
        ellipse(x*2, y*2, 20, 20);
      }
    }
  }
}