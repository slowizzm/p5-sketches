//wip

let btn, hding, wlcm;
function setup() {
  let ctx = createCanvas(window.innerWidth,window.innerHeight);
  btn = select('.em motto');
  hding = select('.symmetry');
  wlcm = select('.welcome-to');
}

function draw() {
  clear();
}

function signedIn() {
  wlcm.html('Welcome Back');
  wlcm.style('font-size', '2.3rem');
   hding.html('SLOW_IZZM');
  hding.style('font-size', '4.5rem');
}


document.querySelector('button').addEventListener('click', function () {
  signedIn();
  document.querySelector('button').remove();
})