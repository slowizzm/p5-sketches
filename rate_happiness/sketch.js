const rate = document.querySelectorAll('.circle');
const activeExpression = document.querySelector('.active-expression');

const snd = new Audio('assets/audio/interaction/btn.mp3');
snd.volume = 0.25;

const rateClicked = e => {
  // console.log(e);
  for (i = 0; i < rate.length; i++) {
    rate[i].classList.remove('active');
  }
  activeExpression.setAttribute("href", `#facial-expression-${e+1}`);
  rate[e].classList.add('active');
  snd.play();
}

for (let i = 0; i < rate.length; i++) {
  rate[i].addEventListener('click', rateClicked.bind(this, i));
}