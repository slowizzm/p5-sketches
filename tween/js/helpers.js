//set timeout to show button
$(document).ready(function() {
  setTimeout(showBtn, 1500);
});

//fade in button
function showBtn() {
  $('.btn').fadeIn(300);
}

// set type to italics, slide type off screen to the left, remove button
document.querySelector('button').addEventListener('click', function() {
  textStyle(ITALIC);
  vel.x = 7;
  $('.btn').remove();
})

//init vectors
function init(_x, _y) {
  pos = createVector(_x, _y);
  vel = createVector(0, -1);
  acc = createVector();
}

//create small physics engine
function anim() {
  vel.add(acc);
  pos.add(vel);

  return this;
}

//tween 
function tween(_t) {
  vel.y *= _t;

  return this;
} //animate splash text
function render() {
  anim().tween(0.93).update();
}

//increase opacity
function update() {
  alph += 13;
}


//adds some bounce after button is clicked
function bounce() {
  if (pos.x >= 210) {
    vel.x = -11;
  }
}