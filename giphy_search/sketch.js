let giphy_api = "https://api.giphy.com/v1/gifs/search?";
let giphy_apiKey = "&api_key=fj9jXsDfMsh33rPkPFGrwjuf9YjWu5el";
let searchQuery;
let url;
let giphy_images = [];
let NUM_IMAGES = 1;

let input_query;
let btn;
let shuffle = 0;

function setup() {
	createCanvas(400, 400);
	input_query = createInput('search');
	input_query.mouseClicked(clearInput);
	input_query.style('color: grey');
	input_query.position(0, height * 1.1);
	btn = createButton('enter');
	btn.position(width * 0.35, height * 1.105);
	btn.mouseClicked(newImage);
	imageMode(CENTER);
}

function getData(giphy) {
	loadImage(giphy.data[shuffle].images.downsized.url, getImage);
	shuffle = floor(random(giphy.data.length));
}

function getImage(giphyImg) {
	giphy_images.push(giphyImg);
}

function updateQuery() {
	let query = input_query.value();
	input_query.style('color: black');
	searchQuery = "&q=" + query + "";
	newImage();
}

function clearInput() {
	input_query.value('');
}

function newImage() {
	background(51);
	btn.html('shuffle');
	url = giphy_api + giphy_apiKey + searchQuery;
	loadJSON(url, getData);
}

function draw() {
	input_query.changed(updateQuery);
	for (var i = 0; i < giphy_images.length; i++) {
		if (giphy_images[i].width >= width) {
			image(giphy_images[i], width * 0.5, height * 0.5, giphy_images[i].width / 2, giphy_images[i].height / 2);
		} else {
			image(giphy_images[i], width * 0.5, height * 0.5, giphy_images[i].width, giphy_images[i].height);
		}
	}

	if (giphy_images.length > 0) {
		giphy_images.splice(0, giphy_images.length);
	}
}