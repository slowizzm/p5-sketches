var mantra = [];
var img;
var imgMask;

var sound, env, cVerb, fft;
var currentIR = 0;
var rawImpulse;

var titlez,
    descript,
    factors,
    equpt
    crew;

function preload() {
    img = loadImage("assets/mockUpBg.jpg");
    img2 = loadImage("assets/mockUpBg.png");

    // soundFormats('ogg', 'mp3');


    cVerb = createConvolver('assets/chakra.mp3');

    cVerb.addImpulse('assets/vinyl.mp3');
    sound = loadSound('assets/om.mp3');

}

function setup() {
    createCanvas(700, 500);

    for (var i = 0; i < 1; i++) {
        var p = new Mantra();
        mantra.push(p);
    }

    titlez = createElement('h1', "Seven Factors of Enlightenment");
    titlez.style("font-size", 33);
    titlez.position(750, 95);
    descript = createP("<b>Seven Factors of Enlightenment</b> is a study of human interaction with the seven chakras in <br/>a virtual space. We want to ask the questions, <b>'what if the chakras were a tangible object,<br/> how would humans interact with them, and how would this make them feel?'</b> <br/>The users are able to alter the geometry and the physics, which changes the representation <br/>of each chakra. The installation consists of a custom designed cabinet and a Glass <br/>of 4.30 x 2.20 (with Capacitive MultiTouch technology if possible), 4 Microsoft Xbox V2 Kinects <br/>and 4 projectors. <br/><br/> Visuals code writin in openFrameworks, Processing, p5.js. Audio composed within Max, oF, p5.js.");
    descript.position(750, 130);

    equipt = createP("Each sensor affects the over all composition differently. Hand movement can alter the physics<br/> of the chakras, analogous to manipulating video transitions complimenting the corresponding<br/> chakra. At the same time the user's location in the room alters the audio composition to produce<br/> self-rhythms and organic results. When the 4 Kinects are working simultaneously, both visuals and<br/> sounds generated from each sensor are combined into one composition.");
    equipt.position(750, 300);
    
    
    factors = createP("<b>Mindfulness <br/>Investigation<br/>Energy<br/>Joy<br/>Tranquility<br/>Concentration<br/>Equanimity</b>");
    factors.position(750, 410);
    crew = createP("<b>Visuals, Interactivity, and Audio Design:</b> <br/> Raymond G McCord and James Styron");
    crew.position(750, 555);
    

    stroke(200, 0, 255, 80);
    fill(233, 0, 55, 30);

    rawImpulse = loadSound('assets/' + cVerb.impulses[currentIR].name);
    sound.disconnect();
    cVerb.process(sound);
    fft = new p5.FFT();
    currentIR++;
    if (currentIR >= cVerb.impulses.length) {
        currentIR = 0;
    }
    cVerb.toggleImpulse(currentIR);

}

function draw() {
    //background(255);
    var soundY = map(mouseY, 0, height, 0, 1);


    var spectrum = fft.analyze();
    noStroke();
    for (var i = 0; i < spectrum.length; i++) {
        var x = map(i, 0, spectrum.length, 0, width);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h);
    }

    imageMode(CENTER);
    image(img, width / 2, height / 2, img.width / 2, img.height / 2);
    angle = sin(gen * 33) * 33;
    for (var i = 0; i < 1; i++) {
        mantra[i].display();
        image(img2, width / 2, height / 2, img.width / 2, img.height / 2);

        //mySound.rate(map(mouseX, 0, width, -0.33, 0.33));


    }

    sound.amp(map(mouseY, height, 0, 0.07, 0.3));




}

function mouseMoved() {
    sound.stop();
    sound.play();

}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}
