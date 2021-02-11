/*
gifs are hosted on giphy - the gifs in this array are for scenes starting at scene 2 (scene 1 is the initial img source loaded by the dom in the index.html)
*/
const gifs = ['https://media.giphy.com/media/H0BKYGcCaTn68/giphy.gif',
  'https://media.giphy.com/media/WqMlFvHuOrmg/giphy.gif',
  'https://media.giphy.com/media/xVes6Iwy0M9Yk/giphy.gif'
];

const txtStory = ['Robin laid an egg', 'the Batmobile lost a wheel', 'and the Joker got away'];
const txtBtn = ['batmobile', 'joker'];
let img_elt, txt_elt, theEnd_elt, btnA_elt, btnB_elt, final_scene; //dom tags we are referencing
let scene = 1;

function setup() {
  // createCanvas(400, 400);

  //sets references to html elements
  img_elt = select('.gifs');
  txt_elt = select('.storyText'); //variable to store reference to story text
  btnA_elt = select('#btn-a'); //variable to store reference to button A
  btnB_elt = select('#btn-b'); //variable to store reference to button B
  theEnd_elt = select('.theEnd'); //variable to store reference the text for The End

  final_scene = gifs.length + 1; //getting total items in array and adding one to store the value of the final scene
}

//this function gets called upon whenthe buttons are clicked passing through a string to determin which button was clicked.
function btnClick(btn) {

  // console.log(btn);

  //when button is clicked the current scene is passed into this switch statement and updates the scene depending on which button was clicked 
  switch (scene) {

    case 1:

      if (btn == 'choice-a') {
        scene = 2;
        updateScene(0, scene);

      } else if (btn == 'choice-b') {
        scene = final_scene;
        updateScene(2, scene);
      }

      break;

    case 2:

      if (btn == 'choice-a') {
        scene = 3;
        updateScene(1, scene);

      } else if (btn == 'choice-b') {
        scene = final_scene;
        updateScene(2, scene);
      }

      break;

    case 3:

      if (btn == 'choice-a') {
        scene = final_scene;
        updateScene(2, scene);

      } else if (btn == 'choice-b') {
        scene = final_scene;
        updateScene(2, scene);
      }

      break;

    case final_scene:
      scene = 1;
      img_elt.attribute('src', 'https://media.giphy.com/media/9DIfrhQ8snWaA/giphy.gif');
      txt_elt.html('Jingle bells, Batman smells');
      btnA_elt.value('robin');

      break;
  }

  //hides and shows button depending on if final scene or not
  if (scene === final_scene) {
    theEnd_elt.style('display', 'initial');
    btnB_elt.style('display', 'none');
  } else {
    theEnd_elt.style('display', 'none');
    btnB_elt.style('display', 'initial');
  }
}

//updates gif and text
function updateScene(info, scene) {
  img_elt.attribute('src', `${gifs[info]}`);
  txt_elt.html(`${txtStory[info]}`);
  if (scene === final_scene) {
    btnA_elt.value('restart');
  } else {
    btnA_elt.value(txtBtn[info]);
  }
  console.log(`scene ${scene}`);
}