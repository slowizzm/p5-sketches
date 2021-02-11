let soundOne; //variable for sound file object
let amplitudeOne; //variable for amplitude object
let volumeOne; //variable for volume
let yPosition; //variable for the y position of shapes

function preload() {
  soundOne = loadSound('trapbeat1.wav'); //load sound into variable
}

function setup() {
  createCanvas(400, 400);
  amplitudeOne = new p5.Amplitude(); //create amplitude object
  amplitudeOne.setInput(soundOne); //only listen to soundOne

}

function draw() {
  background(0); //black background for contrast

  //store volume in variable called volume
  volumeOne = amplitudeOne.getLevel();

  // match the range of y positions on the canvas to volume
  yPosition = map(volumeOne, 0, 1, 200, height);

  fill(255);
  textSize(20);
  text("Click to start", 130, 50)

  //draw circles animation
  circles();


}


function circles() {

  //for circles to move up and down we must subtract the  height of the canvas by the yPosition
  fill(255, 0, 0); //red color
  ellipse(300, (height - 130) - yPosition / 3, yPosition / 3); //red circle in the left

  fill(0, 255, 0); //green color
  ellipse(200, (height - 100) - yPosition / 2, yPosition / 3); //green circle on the middle


  fill(0, 0, 255); //blue color
  ellipse(100, height - yPosition, yPosition / 3); //blue circle on the right
}

function mousePressed() {
  if (soundOne.isPlaying()) {
    soundOne.pause();
  } else {
    soundOne.play();
  }
}