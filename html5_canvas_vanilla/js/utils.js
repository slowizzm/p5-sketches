//init canvas
let canvasLayers = [];
let ctx = [];
let canvasWidth, canvasHeight;
const degrees = 180 / Math.PI,
  PI = Math.PI,
  TWOPI = Math.PI * 2;

const canvasRes = (w, h, rend = '2d') => {
  for (let i = 0; i < canvasLayers.length; i++) {
    canvasLayers[i].width = w;
    canvasLayers[i].height = h;
    ctx[i] = canvasLayers[i].getContext(rend);
  }
  canvasWidth = w;
  canvasHeight = h;
};

///////////////////////////////////////////
//Math

const randRange = (min, max) => {
  if (max === undefined) {
    this.min = 0;
    this.max = min;
  } else {
    this.min = min;
    this.max = max;
  }

  return (Math.random() * (this.max - this.min + 1) + this.min);
};

const getDistance = (x1, y1, x2, y2) => {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
};

const mapRange = (num, inmin, inmax, outmin, outmax) => {
  return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
};
//////////////////////////////////////////////////////////////
const getWindowWidth = () => {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth) ||
    0
  );
};

const getWindowHeight = () => {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight) ||
    0
  );
};

////////////////////////////////////////////////////////////
//Lerp Color
const lerpColor = (a, b, amount) => {
  var ah = +a.replace('#', '0x'),
    ar = ah >> 16,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff,
    bh = +b.replace('#', '0x'),
    br = bh >> 16,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);

  return (
    "#" + (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)
  );
};

/////////////////////////////////////////////////////////////