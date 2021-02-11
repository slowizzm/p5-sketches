(_ => {
  let xpos = '',
    ypos = '',
    targ = '';

  const drags = document.querySelectorAll('.draggable');

  drags.forEach(drag => {
    drag.addEventListener('dragstart', dragStart);
    drag.addEventListener('dragend', dragEnd);
  });

  const drop = document.querySelector('.drop-area').addEventListener('drop', dragDrop);
  const dover = document.querySelector('.drop-area').addEventListener('dragover', dragOver);

  function dragStart(e) {
    e.dataTransfer.setData('Text', this.class);
    this.className += ' dragging';
    setTimeout(_ => (this.className = 'invisible'), 0);

    targ = e.target;

    xpos = e.offsetX === undefined ? e.layerX : e.offsetX;
    ypos = e.offsetY === undefined ? e.layerY : e.offsetY;
    targ.style.zIndex = 10;

  }

  function dragDrop(e) {
    e.preventDefault();
    targ.style.left = e.pageX - xpos + 'px';
    targ.style.top = e.pageY - ypos + 'px';
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnd() {
    this.className = 'draggable';
    targ.style.zIndex = 1;
  }
})();