let url = 'https://coolors.co/260c1a-432e36-5f4842-af8d86-edbfc6';

const createPalette = url => {
  const slash_index = url.lastIndexOf('/');
  const palette_str = url.slice(slash_index + 1);
  const arr = palette_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `#${arr[i]}`;
  }
  return arr;
};


const palette = createPalette(url);

function setup() {
  createCanvas(800, 800);
  const NUM_PANELS = width / palette.length;
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  let i = 0;
  for (let x = 0; x < width; x += NUM_PANELS) {
    fill(palette[i++]);
    rect(x, 0, NUM_PANELS, height);
  }
}