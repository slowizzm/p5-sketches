/*
Simple example for students project inspiraton.
falling guy image by: GORGEOUSGAEL
cityscape image b y: Things For Desighers
*/

let cityscape, falling;
let img_falling, img_city;

function preload() {
	img_falling = loadImage("images/Falling.png");
	img_city = loadImage("images/cityscape.png");
}

function setup() {
	createCanvas(img_city.width*0.8,img_city.height);
	imageMode(CENTER);
	noStroke();
	cityscape = new CityScape(width*0.35, height*0.35);
	falling = new Falling(width*0.36, 0);
}

function draw() {
	background(0, 0, 30);
	cityscape.display();
	falling.render();

}