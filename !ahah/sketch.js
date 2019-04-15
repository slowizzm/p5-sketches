var img_bg, img_joker, img_jokerFace;
var jokerLaugh;

var img_ha = [];
var hahaha = [];

var img;

function setup() {
	frameRate(60);
  img_bg = loadImage("images/bg_3d.png")
  img_joker = loadImage("joker/joker.png");
	img_jokerFace = loadImage("joker/joker_face.png");
	jokerLaugh = loadSound('audio/joker-laugh.mp3');
  createCanvas(1920 / 2, 1080 / 2);
  background(img_bg);
}

function draw() {
	tint(133);
  background(img_bg);
  var jBody_x = map(mouseX, 0, width, -11, 9);
	var jFace_x = map(mouseX, 0, width, -9, 6);
	tint(255);
  image(img_joker, jBody_x - 13, 0, 1920 / 2 + 33, 1080 / 2 + 33);
	image(img_jokerFace, jFace_x - 13, -33, 1920 / 2 + 33, 1080 / 2 + 33);
  for (var i = 0; i < hahaha.length; i++)
  {
   	hahaha[i].update();
  	hahaha[i].display();
		
		if (hahaha.length >= 13)
		{
			hahaha.splice(0, 1);
		}
  }
}

function mousePressed() 
{
  var i = floor(random(16)) + 1;
  // console.log(i);
 	var img = loadImage("images/ha/ha" + i + ".png");
  var p = new Hahaha(random(width/2-33,width/2+33), height*0.7, random(6,33), img);
  hahaha.push(p);
	jokerLaugh.play();
}