(_ => {
  let xpos = '',
    ypos = '',
    targ = '';

  const drags = document.querySelectorAll('body');
  const dImage = document.querySelector('.dragging');

  drags.forEach(drag => {
    drag.addEventListener('dragstart', dragStart);
    drag.addEventListener('dragend', dragEnd);
  });

  const drop = document.querySelector('.drop-area').addEventListener('drop', dragDrop);
  const dover = document.querySelector('.drop-area').addEventListener('dragover', dragOver);

  function dragStart(e) {
  e.dataTransfer.setData('Text', this.class);
    dImage.style.display = "block";
    e.dataTransfer.setDragImage(dImage, 25, 25);
    targ = e.target;
    xpos = e.offsetX === undefined ? e.layerX : e.offsetX;
    ypos = e.offsetY === undefined ? e.layerY : e.offsetY;
    targ.style.zIndex = 10;
    targ.style.opacity = 0.01;
    //console.log(e)
  }

  function dragDrop(e) {
    e.preventDefault();
    targ.style.left = e.pageX - xpos + 'px';
    targ.style.top = e.pageY - ypos + 'px';
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnd(e) {
    dImage.style.display = "none";
    targ.style.zIndex = 5;
    targ.style.opacity = 1;
  }
})();