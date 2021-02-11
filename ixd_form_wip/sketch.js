const bg_out = document.querySelector('#bg-out');
const bg_in = document.querySelector('#bg-in');
const info = document.querySelector('#txt-info');
const usrid = document.querySelector('#input-box-userid');
const pswrd = document.querySelector('.input-box-pswrd');
const btn_txt = document.getElementById('btn');



let isClicked = false;

function getStarted() {
  isClicked = !isClicked;

  if (isClicked) {
    bg_out.classList.remove('hide');
    bg_in.classList.remove('hide');
    bg_out.classList.add('reveal');
    bg_in.classList.add('reveal');
    setTimeout(_ => {
      showInfo.call(this, true)
    }, 800);
    setTimeout(updateZIndex, 1300);
    btn_txt.value = 'Login';
  } else {
    bg_out.classList.remove('reveal');
    bg_in.classList.remove('reveal');
    bg_out.classList.add('hide');
    bg_in.classList.add('hide');
    setTimeout(_ => {
      showInfo.call(this, false)
    }, 500);
    setTimeout(updateZIndex, 300);
    btn_txt.value = 'Get Started';
  }
}

function showInfo(e) {
  // console.log(e);
  if (!e) {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}

function hideInfo() {

}

function updateZIndex() {
  if (isClicked) {
    usrid.style.zIndex = "5";
    pswrd.style.zIndex = "5";
  } else {
    usrid.style.zIndex = "1";
    pswrd.style.zIndex = "1";
  }
}