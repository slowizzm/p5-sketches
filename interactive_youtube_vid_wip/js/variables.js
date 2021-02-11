const vp = document.querySelector('.video-container'),
  pause_ele = document.querySelector('.pauseVid'),
  tag = document.createElement('script'),
  span_elt = document.querySelectorAll('.btns span'),
  btns_elt = document.querySelector('.btns'),
  sub_elt = document.querySelector('.sub-txt'),
  imgs_elt = document.querySelector('.img-container'),
  footer_elt = document.querySelector('.img-footer'),
  timestamps = [
    0, 6, //start     [0,1]
    29.75, 84, //scene 1   [2,3]
    84.25, 142, //scene 2   [4,5]
    142.75, 193, //scene 3   [6,7]
    194, 336 //scene 4   [8,9]
  ],
  sceneTimestamps = [timestamps];

let player, currentScene = 0, currentSceneBegin = 0,
  currentSceneEnd = 1;