let chromaSpitChars = [];

function setup() {
  createCanvas(600, 400);

  textStyle(BOLD);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  chromaString = "split"

  for (i = 0; i < chromaString.length; i++) {
    chromaSpitChars[i] = new ChromaSplit(chromaString[i], (600 / (chromaString.length + 1) * (i + 1)), 300, 350);
  }
}

function draw() {
  background(20, 0, 0, 50);

  textSize(30);
  textStyle(BOLD);
  fill(255, 255, 255);

  text("chroma", 180, 90);
  
  chromaSpitChars.forEach(c => {
    c.render();
  });
}