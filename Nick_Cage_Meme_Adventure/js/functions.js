txt_input.addEventListener('keypress', function(e) {
  if (e.keyCode == 13 && txt_input.value == "yes") {
    btnLogic('choice-a', 4, 6);
    txt_input.style.display = 'none';
    btnA_elt.style.display = 'initial';
    btnB_elt.style.display = 'initial';
    txt_input.value = 'Well, does it?';
  } else if (e.keyCode == 13) {
    btnLogic('choice-b', 4, 6);
    txt_input.style.display = 'none';
    btnA_elt.style.display = 'initial';
    btnB_elt.style.display = 'initial';
    txt_input.value = 'Well, does it?';
  }
});

function onLoad() {
  snd_bg.volume = 0.3;
  snd_bg.play();
  snd_bg.loop = true;
}

function init() {
  cageFace.style.display = 'none';
  p_elt.style.display = 'none';
  startBtn_elt.style.display = 'none';
  g_img.src = gifs[0];
  g_img.style.display = 'initial';
  scene = 0;
  p_elt.innerHTML = `${txtStory[0]}`;
  setTimeout(displayElts, 100);
  snds.forEach(snd => {
    snd.volume = 0.2;
  });

  snds[0].play();
}

function displayElts() {
  btnA_elt.style.display = 'initial';
  btnB_elt.style.display = 'initial';
  btnA_elt.value = txtBtn[0];
  btnB_elt.value = txtBtn[1];

  p_elt.style.display = 'initial';
}

//scene logic on btn click
function btnClick(e) {
  switch (scene) {

    case 0:

      btnLogic(e, 1, 6);

      break;

    case 1:

      btnLogic(e, 2, 4);

      break;

    case 2:

      btnLogic(e, 5, 7);

      break;

    case 3:

      btnLogic(e, 5, 1);

      break;

    case 4:

      btnLogic(e, 2, 5);

      break;

    case 5:

      btnLogic(e, 3, 6);

      break;

    case 6:

      btnLogic(e, 4, 7);

      break;

    case 7:

      btnLogic(e, 5, 8);

      break;

    case 8:

      btnLogic(e, 7, 9);

      break;

    case 9:

      btnLogic(e, final_scene, final_scene);

      break;

    case final_scene:
      scene = 0;
      updateScene(scene);

      break;
  }

  if (scene === final_scene) {
    theEnd_elt.style.display = 'initial';
    btnB_elt.style.display = 'none';
  } else if (scene == 1 || scene == 2 || scene == 5) {
    btnA_elt.style.display = 'none';
    btnB_elt.style.display = 'none';
    startBtn_elt.style.display = 'initial';
    startBtn_elt.value = 'restart';
  } else if (scene == 4) {
    btnA_elt.style.display = 'none';
    btnB_elt.style.display = 'none';
    txt_input.style.display = 'initial';
  } else {
    btnA_elt.style.display = 'initial';
    btnB_elt.style.display = 'initial';
    theEnd_elt.style.display = 'none';
  }
}

function btnLogic(e, btnA_goToScene, btnB_goToScene) {
  //console.log(scene, gifs.length);
  if (scene == gifs.length - 1) {
    if (e == 'choice-a') {
      // console.log('true')
      scene = 0;
      updateScene(scene);
    }
  } else {
    if (e == 'choice-a') {
      scene = btnA_goToScene;
      console.log(btnA_goToScene);
      updateScene(scene);

    } else if (e == 'choice-b') {
      scene = btnB_goToScene;
      console.log(btnB_goToScene);
      updateScene(scene);
    }
  }


}

//updates gif and text
function updateScene(scene) {
  g_img.src = gifs[scene];
  p_elt.innerHTML = `${txtStory[scene]}`;
  if (scene === final_scene) {
    btnA_elt.value = 'restart';
  } else {
    btnA_elt.value = txtBtn[scene];
  }



  //console.log(`scene ${scene}`);
  updateAudio(scene);
}

function updateSnds(currScene) {
  //console.log(currScene);
  switch (currScene) {
    case 1:
      updateAudio(currScene);
      break;

    case 2:
      updateAudio(currScene);
      break;

    case 3:
      updateAudio(currScene);
      break;

    case 4:
      updateAudio(currScene);
      break;
  }
}

function updateAudio(currScene) {
  for (let i = 0; i < snds.length; i++) {
    snds[i].pause();
    snds[i].currentTime = 0;
  }

  snds[currScene].play();
  //console.log(`snd ${currScene} playing`);
}