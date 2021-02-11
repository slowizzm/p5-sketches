//https://editor.p5js.org/slow_izzm/sketches/-DJVMmem3

let idx = 0;

function newBgColr() {
  return Math.floor(Math.random() * Math.floor(360));
}

document.addEventListener('keydown', e => {
  e.key.toLowerCase();
  const combo = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  // console.log(e.key);

  (e.key == combo[idx]) ? idx++ : idx = 0;

  if (idx == combo.length) {
    idx = 0;
    updateBodyColor();
    console.log('success');
  }
});

const updateBodyColor = _ => {
  document.querySelector('body').style = `background: hsla(${newBgColr()}, 40%,40%,1`;
}