let adjectives;
let nouns;
let verbs;
let new_tech;
let rnd_adj, rnd_nn, rnd_vrb, rnd_tech;

function preload() {
	strangeWords = loadJSON("json/strange-words.json");
	adjectives = loadJSON("json/adjectives.json");
	nouns = loadJSON("json/nouns.json");
	verbs = loadJSON("json/verbs.json");
	new_tech = loadJSON("json/new-tech.json");
}

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	textFont('Avenir', 36);
	noLoop();
	background(217);

	let button = select('#button');
	button.mouseClicked(getWords);
}

function draw() {
	background(217);
	text("the", width * 0.2, height * 0.2);
	rndadj = random(adjectives.adj);
	text(rndadj, width * 0.2, height * 0.3);
	rnd_nn = random(nouns.noun);
	text(rnd_nn, width * 0.3, height * 0.4);
	rnd_vrb = random(verbs.verb);
	text(rnd_vrb, width * 0.2, height * 0.5);
	rnd_tech = random(new_tech.tech);
	text(rnd_tech, width * 0.25, height * 0.6);
}

function getWords() {
	background(217);
	text("the", width * 0.2, height * 0.2);
	rndadj = random(adjectives.adj);
	text(rndadj, width * 0.2, height * 0.3);
	rnd_nn = random(nouns.noun);
	text(rnd_nn, width * 0.3, height * 0.4);
	rnd_vrb = random(verbs.verb);
	text(rnd_vrb, width * 0.2, height * 0.5);
	rnd_tech = random(new_tech.tech);
	text(rnd_tech, width * 0.25, height * 0.6);
}