const level = document.querySelectorAll('.circle');
const activeExpression = document.querySelector('.active-expression');
const info = document.querySelector('.info');
const input = document.querySelector('#username');
let yourLevel = null,
  hasSelectedHappinessLevel = false;;

// const snd = new Audio('assets/audio/interaction/btn.mp3');
// snd.volume = 0.25;

function hasUserInputName() {
  console.log(input.value)
  return (input.value == "" || input.value == null);
}



function inputValidation() {
  document.querySelector('button').addEventListener('click', _ => {
    if (!hasUserInputName() && hasSelectedHappinessLevel) {
      updateData();
    } else if (!hasUserInputName() && hasSelectedHappinessLevel) {
      alert('input')
    } else if (hasUserInputName() && !hasSelectedHappinessLevel) {
      alert('select')
    } else {
      alert('input and select')
    }
  })
}

const getLevel = e => {
  for (i = 0; i < level.length; i++) {
    level[i].classList.remove('active');
  }
  activeExpression.setAttribute("href", `#facial-expression-${e+1}`);
  level[e].classList.add('active');
}

const levelSelected = e => {
  hasSelectedHappinessLevel = true;
  // console.log(e);
  for (i = 0; i < level.length; i++) {
    level[i].classList.remove('active');
  }

  activeExpression.setAttribute("href", `#facial-expression-${e+1}`);
  level[e].classList.add('active');
  // snd.play();

  yourLevel = e + 1;
}

for (let i = 0; i < level.length; i++) {
  level[i].addEventListener('click', levelSelected.bind(this, i));
}



function upperCase(name) {
  const words = name.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
}