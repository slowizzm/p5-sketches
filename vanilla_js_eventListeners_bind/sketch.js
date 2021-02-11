const t = document.querySelector('.title');
let isClicked = false;

t.addEventListener('click', onClick.bind(this, 'click'));

function onClick(e) {
  console.log(e);

  isClicked = !isClicked;

  if (isClicked) {
    t.innerHTML = 'blue.';
    t.style.background = 'blue';

  } else {
    t.innerHTML = 'red.';
    t.style.background = 'red';
  }
}