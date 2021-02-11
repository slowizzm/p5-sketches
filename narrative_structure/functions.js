function startNarrative() {
  background(3, 7, 11);
  greeting = createP("Welcome traveler. &nbsp Enter your name.").position(180, 100);

  nameInput = createInput().position(220, 200).style('padding', '5px').changed(sceneSelect);

}

const sceneSelect = _ => {

  background(random(100, 200), random(100, 200), random(100, 200));
  greeting.remove();
  nameInput.remove();

  title = createElement('h2', `Hello, ${nameInput.value()}.&nbsp You must make a choice.`).position(150, 100);

  firstOption = createA('#', 'mountain path').position(100, 250).style('font-size', '30px');
  secondOption = createA('#', 'forest path').position(400, 250).style('font-size', '30px');

  firstOption.mousePressed(_ => {
    blastOff.call(this, 'mountain', 'safe travels above the mountain!');
  });
  secondOption.mousePressed(_ => {
    blastOff.call(this, 'forest', 'safe travels through the forest!');
  });

}


const blastOff = (m, t) => {
  background(0);
  mode = m;
  fc = 1;
  removeOptions();
  title.html(t).position(140, 250).style('background-color', 'rgb(3,7,11)').style('padding', '5px');
}

const removeOptions = _ => {
  firstOption.hide();
  secondOption.hide();
}