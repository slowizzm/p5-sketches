const b = document.body.addEventListener('mousemove', e => {
  let transPerc = 0.1, //percentage of transition
    mouseX = e.pageX,
    pageW = window.innerWidth,
    transMargin = pageW * transPerc,
    maxMargin = 2 * transMargin,
    marg,
    widthMin,
    widthMax,
    angleMin,
    angleMax,
    offset;

  const MIN = 26.5,
    MAX = 47,
    ANGLE_MIN = -90,
    ANGLE_MAX = 0;

  if (mouseX < (pageW / 3 - transMargin)) {
    menuSetWidths(MAX, MIN, MIN)
    menuSetAngles(ANGLE_MAX, ANGLE_MIN, ANGLE_MIN, mouseX)
  }
  if (mouseX >= (pageW / 3 - transMargin) && mouseX <= (pageW / 3 + transMargin)) {
    marg = mouseX - (pageW / 3 - transMargin)
    offset = (MAX - MIN) * marg / maxMargin
    widthMax = MAX - offset
    widthMin = MIN + offset
    menuSetWidths(widthMax, widthMin, MIN)
    angleMax = ANGLE_MIN * marg / maxMargin
    angleMin = ANGLE_MIN - angleMax
    menuSetAngles(angleMax, angleMin, ANGLE_MIN, mouseX)
  }
  if (mouseX > pageW / 3 + transMargin && mouseX < 2 * pageW / 3 - transMargin) {
    menuSetWidths(MIN, MAX, MIN)
    menuSetAngles(ANGLE_MIN, ANGLE_MAX, ANGLE_MIN, mouseX)
  }
  if (mouseX >= 2 * pageW / 3 - transMargin && mouseX <= 2 * pageW / 3 + transMargin) {
    marg = mouseX - (2 * pageW / 3 - transMargin)
    offset = (MAX - MIN) * marg / maxMargin
    widthMax = MAX - offset
    widthMin = MIN + offset
    menuSetWidths(MIN, widthMax, widthMin)
    angleMax = ANGLE_MIN * marg / maxMargin
    angleMin = ANGLE_MIN - angleMax
    menuSetAngles(ANGLE_MIN, angleMax, angleMin, mouseX)
  }
  if (mouseX > 2 * pageW / 3 + transMargin) {
    menuSetWidths(MIN, MIN, MAX)
    menuSetAngles(ANGLE_MIN, ANGLE_MIN, ANGLE_MAX, mouseX)
  }
});

function menuSetWidths(w1, w2, w3) {
  document.querySelector('.menu-container .item:nth-child(1)').style.width = `${w1}%`;
  document.querySelector('.menu-container .item:nth-child(2)').style.width = `${w2}%`;
  document.querySelector('.menu-container .item:nth-child(3)').style.width = `${w3}%`;
}

function menuSetAngles(w1, w2, w3, m) {
  document.querySelector('.menu-container .item:nth-child(1) h1').style.transform = `rotate(${w1}deg)`;
  document.querySelector('.menu-container .item:nth-child(2) h1').style.transform = `rotate(${w2}deg)`;
  document.querySelector('.menu-container .item:nth-child(3) h1').style.transform = `rotate(${w3}deg)`;
}