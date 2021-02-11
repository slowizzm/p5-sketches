window.addEventListener('scroll', (e) => {
  const targ = document.querySelectorAll('.scroll');
  let pos;
  for (let i = 0; i < targ.length; i++) {
    pos = window.pageYOffset * targ[i].dataset.rate;
    targ[i].style.transform = `translate3d(0px, ${pos}px, 0px)`;

    if (pos <= -100 || pos >= 100) {
      targ[0].style.transform = `translate3d(${pos/2}px, ${-pos}px, 0px)`;
      targ[1].style.transform = `translate3d(${-pos/6}px, ${-pos/6}px, 0px)`;
      targ[2].style.transform = `translate3d(${pos/-2}px, ${pos}px, 0px)`;
    }
  }
});