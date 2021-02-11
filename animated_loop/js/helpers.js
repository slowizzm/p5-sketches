function resetAnimation(tl) {
  if (tl >= 14000) {
    obj.x = -100;
    obj.scl = 3;
    obj.spd = 1.01;

    timeStarted = millis();
  }
}

function animatedTimeline(timeLapsed) {
  if (timeLapsed >= 1000 && timeLapsed <= 3000) {
    obj.x *= obj.spd;
    obj.scl *= obj.spd;
  }

  if (timeLapsed >= 4000 && timeLapsed <= 7000) {
    obj.x /= obj.spd;
    obj.scl *= obj.spd;
  }

  if (timeLapsed >= 8000 && timeLapsed <= 11000) {
    obj.x *= obj.spd;
    obj.scl /= obj.spd;
  }

  if (timeLapsed >= 12000 && timeLapsed <= 14000) {
    obj.x /= obj.spd;
    obj.scl /= obj.spd;
  }
}

function animatedObject() {
  strokeWeight(obj.scl);
  stroke(13, 17, 21, 60);
  ellipse((width * 0.8 + obj.x) + 1.25, (height * 0.5) + 1.25, 22 + obj.scl);
  stroke(13, 17, 21);
  push();
  strokeWeight(500);
  translate((width * 0.8 + obj.x) + 1.25, (height * 0.5) + 1.25);
  rotate(radians((obj.x / 2)));
  rect(0, 0, 600 + obj.scl, 600 + obj.scl, obj.scl * 10);
  pop();
  ellipse(width * 0.8 + obj.x, height * 0.5, 20 + obj.scl);
}