//hover color to get hex value

/*
reds 						0-14
pinks 					15-28
purple 					29-42
deep-purple 		43-56
indigo 					57-70
blue 						71-84
light-blue 			85-98
cyan 						99-112
teal 						113-126
green 					127-140
light-green 		141-154
lime 						155-168
yellow 					169-182
amber 					183-196
orange 					197-210
deep-orange 		210-223
brown 					224-233
grey 						234-243
blue-grey 			245-254
*/


let colorData;
let colorScheme = [];
let btn_rndScheme, hoveredColor;

function setup() {
	noStroke();
	createCanvas(500, 500);
	background(100);
	loadJSON("json/material-colors.json", gotData);
	start = 0;

	btn_rndScheme = createButton('Random Color Scheme');
	btn_rndScheme.position(0,height*1.005);
	btn_rndScheme.mouseClicked(getNewScheme);

	hoveredColor = createP();
	hoveredColor.position(0,height*1.015);

	for (let i = 0; i < 5; i++) {
		let cs = new ColorScheme(i * 100, 254);
		colorScheme.push(cs);
	}
}

function draw() {
	for (let i = 0; i < colorScheme.length; i++) {
		colorScheme[i].run();
	}
}

function gotData(data) {
	colorData = data;
}

function getNewScheme() {
	colorScheme.splice(0, colorScheme.length);
	if (colorData) {
		for (let i = 0; i < 5; i++) {
			let cs = new ColorScheme(i * 100, colorData.colors.length);
			colorScheme.push(cs);
		}
	}
}