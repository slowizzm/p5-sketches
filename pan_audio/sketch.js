let snd;

function preload() {
  snd = loadSound('https://ia800900.us.archive.org/21/items/kzz003/02_-_percy_wenrich_-_the_smiler.mp3');
}

function setup() {
  sliderPan = createSlider(-1, 1, 0, 0.1);
  snd.play();
  sliderPan.changed(_ => {
    snd.pan(snd.getPan());
    snd.pan(sliderPan.value(), 0.1);
  });
}