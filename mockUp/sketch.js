var mantra = [];
var img;
var imgMask;

var sound, env, cVerb, fft;
var currentIR = 0;
var rawImpulse;

function preload() {
  img = loadImage("assets/mockUpBg.jpg");
  img2 = loadImage("assets/mockUpBg.png");

  // soundFormats('ogg', 'mp3');


  cVerb = createConvolver('assets/chakra.mp3');

  cVerb.addImpulse('assets/vinyl.mp3');
  sound = loadSound('assets/om.mp3');

}

function setup() {
  createCanvas(1000, 1500 / 2);
  for (var i = 0; i < 1; i++) {
    var p = new Mantra();
    mantra.push(p);
  }
  // imgMask = loadImage("assets/mockUp.jpg");
  stroke(200, 0, 255, 80);
  fill(233, 0, 55, 30);

  // mySound.setVolume(1);
  // mySound.loop();

  rawImpulse = loadSound('assets/' + cVerb.impulses[currentIR].name);
  // disconnect from master output...
  sound.disconnect();
  // ... and process with cVerb
  // so that we only hear the reverb
  cVerb.process(sound);

  fft = new p5.FFT();
  // cycle through the array of cVerb.impulses
  currentIR++;
  if (currentIR >= cVerb.impulses.length) {
    currentIR = 0;
  }
  cVerb.toggleImpulse(currentIR);

  // play the sound through the impulse


  // display the current Impulse Response name (the filepath)
  //println('Convolution Impulse Response: ' + cVerb.impulses[currentIR].name);

  //rawImpulse.setPath('assets/' + cVerb.impulses[currentIR].name);
}

function draw() {
  background(33);
  var soundY = map(mouseY, 0, height, 0, 1);

  
  var spectrum = fft.analyze();
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }

  //imageMode(CENTER);
  image(img, 0, 0, img.width / 2, img.height / 2);
  angle = sin(gen * 33) * 33;
  for (var i = 0; i < 1; i++) {
    mantra[i].display();
    image(img2, 0, 0, img.width / 2, img.height / 2);

    //mySound.rate(map(mouseX, 0, width, -0.33, 0.33));


  }

  sound.amp(map(mouseY, height, 0, 0.07, 0.3)); 


}

function mouseMoved() {
  sound.stop();
  sound.play();

}

// play the impulse (without convolution)
// function keyPressed() {
//   rawImpulse.play();
// }