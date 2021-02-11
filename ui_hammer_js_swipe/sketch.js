let msg = "swipe";

function setup() {

  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
  textSize(30);
  noStroke();

  // set options to prevent default behaviors for swipe, pinch, etc
  let options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page
  let hammer = new Hammer(document.body, options);
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });

  hammer.on("swipe", swiped);
}


function draw() {
  background(250, 10, 100);
  text(msg, width / 2, height / 2);
}


function swiped(event) {
  // console.log(event);
  if (event.direction == 4) {
    msg = "you swiped right";
  } else if (event.direction == 8) {
    msg = "you swiped up";
  } else if (event.direction == 16) {
    msg = "you swiped down";
  } else if (event.direction == 2) {
    msg = "you swiped left";
  }
}