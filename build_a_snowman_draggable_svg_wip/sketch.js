(_ => {
  let xpos = '',
    ypos = '',
    targ = '';

  const drags = document.querySelectorAll('.draggable');
  const dImages = document.querySelectorAll('.dragging');
  const drops = document.querySelectorAll('.stage');
  const dovers = document.querySelectorAll('.stage');

  drags.forEach((drag, index) => {
    drag.addEventListener('dragstart', dragStart.bind(this, index));
    drag.addEventListener('dragend', dragEnd.bind(this, index));
  });

  drops.forEach((drop, index) => {
    drop.addEventListener('drop', dragDrop.bind(this, index));
  });

  dovers.forEach((dover, index) => {
    dover.addEventListener('dragover', dragOver.bind(this, index));
  });

  function dragStart(idx, e) {
    // console.log(idx);
    e.dataTransfer.setData('Text', this.class); //firefox
    targ = e.target;
    dImages[idx].style.display = "block";
    xpos = e.offsetX === undefined ? e.layerX : e.offsetX;
    ypos = e.offsetY === undefined ? e.layerY : e.offsetY;
    // dImages[idx].className += ' hold';
    e.dataTransfer.setDragImage(dImages[idx], xpos/2, ypos/2);
    targ.style.zIndex = 10;
    targ.style.opacity = 0.01;
  }

  function dragDrop(idx, e) {
    e.preventDefault(); //firefox
    targ.style.left = e.pageX - xpos + 'px';
    targ.style.top = e.pageY - ypos + 'px';
  }

  function dragOver(idx, e) {
    e.preventDefault();
  }

  function dragEnd(idx, e) {
    dImages[idx].style.display = "none";
    targ.style.zIndex = 5;
    targ.style.opacity = 1;
  }
})();