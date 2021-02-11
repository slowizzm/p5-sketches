let json_adjectives,
  json_nouns,
  json_verbs,
  json_new_tech;


function preload() {
  json_adjectives = loadJSON("json/adjectives.json");
  json_nouns = loadJSON("json/nouns.json");
  json_verbs = loadJSON("json/verbs.json");
  json_new_tech = loadJSON("json/new-tech.json");
}

function setup() {
  createCanvas(800, 400);
  textFont('Avenir', 36);
  fill('#131721');
  noLoop();

  let button = select('#button');
  button.mouseClicked(getNewSentence);

  getNewSentence();
}


function getNewSentence() {
  background('#fffafa');
  text("the", width * 0.1, height * 0.3);

  text(getRandomWord(json_adjectives.adj), width * 0.1, height * 0.4);

  text(getRandomWord(json_nouns.noun), width * 0.2, height * 0.5);

  text(getRandomWord(json_verbs.verb), width * 0.1, height * 0.6);

  text(getRandomWord(json_new_tech.tech), width * 0.15, height * 0.625,600);
}

function getRandomWord(word) {
  return random(word);
}