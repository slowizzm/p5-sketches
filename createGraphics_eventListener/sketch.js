//click and focus on shape, then paste contents of clipboard and see it log in console

function setup() {
  createCanvas(400, 400);

  const g = createGraphics(100, 100);
  g.show();
  g.attribute('contenteditable', 'true');
  g.elt.addEventListener('paste', e => {
    console.log(e.clipboardData.getData('text'))
  });
  g.position(100, 100);
  g.rect(0, 0, 100, 100);
}