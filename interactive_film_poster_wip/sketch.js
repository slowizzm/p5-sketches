window.addEventListener('scroll', (e) => {
  const targ = document.querySelectorAll('.scroll');
  let pos;
  for (let i = 0; i < targ.length; i++) {
    pos = window.scrollY * targ[i].dataset.rate;

    if (pos <= -100 || pos >= 100) {
      targ[0].style.transform = `translate(0px, ${-pos-120}px)`;
      targ[1].style.transform = `translate(0px, ${-pos-100}px)`;
      // console.log(pos)
    }
  }
});

const b = document.body.addEventListener('mousemove', (e) => {
  const targ = document.querySelectorAll('.lax');
  let pos;
  for (let i = 0; i < targ.length; i++) {
    xpos = e.pageX / window.innerWidth;
    ypos = e.pageY / window.innerHeight;
    if (ypos * 4 <= 2) {
      targ[0].style.transform = `translate3d(${xpos*2}px, ${ypos*2}px, 0px)`;
      targ[1].style.transform = `translate3d(${xpos*1.2}px, ${ypos*1.2}px, 0px)`;
    } else {
      targ[0].style.transform = `translate3d(${xpos*1.25}px, ${ypos*1.25}px, 0px)`;
      targ[1].style.transform = `translate3d(${xpos*0.25}px, ${ypos*0.25}px, 0px)`;
    }
  }
});