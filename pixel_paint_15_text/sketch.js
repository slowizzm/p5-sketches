let inputText = 'The thousand injuries of Fortunato I had borne as I best could, but when he ventured upon insult I vowed revenge. You, who so well know the nature of my soul, will not suppose, however, that gave utterance to a threat. At length I would be avenged; this was a point definitely, settled --but the very definitiveness with which it was resolved precluded the idea of risk. I must not only punish but punish with impunity. A wrong is unredressed when retribution overtakes its redresser. It is equally unredressed when the avenger fails to make himself felt as such to him who has done the wrong.';
let fontSizeMax = 20;
let fontSizeMin = 10;
let spacing = 12; // line height
let kerning = 0.5; // between letters

let fontSizeStatic = false;
let blackAndWhite = false;

let img;

function preload() {
  img = loadImage('images/edgar1.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  textFont('Times');
  textSize(10);
  textAlign(LEFT, CENTER);
  print(img.width + ' • ' + img.height);
}

function draw() {
  background(255);

  let x = 0;
  let y = 10;
  let counter = 0;

  while (y < height) {
    img.loadPixels();
    let imgX = round(map(x, 0, width, 0, img.width));
    let imgY = round(map(y, 0, height, 0, img.height));
    let c = color(img.get(imgX, imgY));
    let greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);

    push();
    translate(x, y);

    if (fontSizeStatic) {
      textSize(fontSizeMax);
      if (blackAndWhite) {
        fill(greyscale);
      } else {
        fill(c);
      }
    } else {
      // greyscale to fontsize
      let fontSize = map(greyscale, 0, 255, fontSizeMax, fontSizeMin);
      fontSize = max(fontSize, 1);
      textSize(fontSize);
      if (blackAndWhite) {
        fill(0);
      } else {
        fill(c);
      }
    }

    let letter = inputText.charAt(counter);
    text(letter, 0, 0);
    let letterWidth = textWidth(letter) + kerning;
    x += letterWidth;

    pop();

    // linebreaks
    if (x + letterWidth >= width) {
      x = 0;
      y += spacing;
    }

    counter++;
    if (counter >= inputText.length) {
      counter = 0;
    }
  }
  noLoop();
}
