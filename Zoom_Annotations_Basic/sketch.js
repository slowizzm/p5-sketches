// Zoom Annotations (Basic)
// Coding Challenge
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/157-zoom-annotations.html
// https://youtu.be/

// Basic: https://editor.p5js.org/codingtrain/sketches/EaioB_iJs
// Final: https://editor.p5js.org/codingtrain/sketches/ELpl_VAqs

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/iAr6pG2B6/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = '';

let question;
let questionFade = 0;

let giphy, url = 'https://media.giphy.com/media/Wh4xgYEAV4VPYuOxaY/giphy.gif',
  isGifAtEnd = false;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  question = loadImage('question.png');
  giphy = loadImage(url);
}

function setup() {
  createCanvas(1280, 720);
  // imageMode(CENTER);
  // Create the video
  video = createCapture(VIDEO);
  video.size(160, 120);
  // video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
  
  
  giphy.setFrame(giphy.numFrames() - 1);
}

function draw() {
  background(0, 255, 0);
  imageMode(CORNER);

  // Draw the video
  // tint(255);
  // image(flippedVideo, 0, 0);
  if (label == 'question') {
    if (isGifAtEnd) giphy.reset();
  }
  
  image(giphy, 0,0,width,height);
  gifState();
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}


function gifState() {
  isGifAtEnd = false;
  if (giphy.getCurrentFrame() >= giphy.numFrames() - 1) {
    isGifAtEnd = true;
    giphy.pause();
  }
}
