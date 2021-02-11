



function updateDisplay() {
  vp.style.display = 'block';
  btns_elt.style.display = 'flex';
  imgs_elt.style.display = 'flex';
  sub_elt.style.display = 'block';
  footer_elt.style.display = 'block';
}


function updateScene(e) {
  if (!player.playVideo()) {
    console.log('not playing');
  }


  switch (currentScene) {
    case 0:
      if (player.getCurrentTime() >= sceneTimestamps[0][currentSceneEnd]) {
        player.pauseVideo();
        player.mute();
        pause_ele.style.opacity = '100';
      }

      break;

    case 1:
      if (player.getCurrentTime() >= sceneTimestamps[0][currentSceneEnd]) {
        player.seekTo(sceneTimestamps[0][currentSceneBegin]);
        pause_ele.style.opacity = '0';
      }
      break;

    case 2:
      if (player.getCurrentTime() >= sceneTimestamps[0][currentSceneEnd]) {
        player.seekTo(sceneTimestamps[0][currentSceneBegin]);
        pause_ele.style.opacity = '0';
      }
      break;

    case 3:
      if (player.getCurrentTime() >= sceneTimestamps[0][currentSceneEnd]) {
        player.seekTo(sceneTimestamps[0][currentSceneBegin]);
        pause_ele.style.opacity = '0';
      }
      break;

    case 4:
      if (player.getCurrentTime() >= sceneTimestamps[0][currentSceneEnd]) {
        player.seekTo(sceneTimestamps[0][currentSceneBegin]);
        pause_ele.style.opacity = '0';
      }
      break;
  }
  setTimeout(updateScene, 0.1);
}


function btnSelect(e) {
  currentScene = e + 1;
  for (let i = 0; i < span_elt.length; i++) {
    span_elt[i].classList.remove('active');
  }

  span_elt[e].classList.add('active');
  pause_ele.style.opacity = '0';

  switch (e) {
    case 0:
      currentSceneBegin = 2;
      currentSceneEnd = 3;

      break;

    case 1:
      currentSceneBegin = 4;
      currentSceneEnd = 5;

      break;

    case 2:
      currentSceneBegin = 6;
      currentSceneEnd = 7;

      break;

    case 3:
      currentSceneBegin = 8;
      currentSceneEnd = 9;

      break;

    default:
      currentSceneBegin = 0;
      currentSceneEnd = 1;

      break;
  }

  player.unMute();
  player.seekTo(sceneTimestamps[0][currentSceneBegin]);
  updateScene();
}