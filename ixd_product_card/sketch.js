//no use of p5 lib - vanilla javascript only

const span_elt = document.querySelectorAll('.colors span');
const item_elt = document.querySelectorAll('.item');
const price_elt = document.querySelector('.price');
const btn_elt = document.querySelector('.btn');
const pic_elt = document.querySelector('.pic');

for (let i = 0; i < span_elt.length; i++) {
  span_elt[i].addEventListener('click', spanClicked.bind(this, i));
}

btn_elt.addEventListener('click', _ => {
  alert('added to cart')
});


function spanClicked(e) {
  for (let i = 0; i < span_elt.length; i++) {
    span_elt[i].classList.remove('active');
    item_elt[i].style.background = '#123655';
    item_elt[e].style.background = '#6DACDC';
  }

  span_elt[e].classList.add('active');
  // document.body.style.backgroundColor = span_elt[e].getAttribute('data-color');
  price_elt.style.color = span_elt[e].getAttribute('data-color');
  btn_elt.style.color = span_elt[e].getAttribute('data-color');
  pic_elt.style.backgroundImage = span_elt[e].getAttribute('data-pic');
  //console.log('clicked');
}