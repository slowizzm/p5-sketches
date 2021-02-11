const progress = document.querySelector('.progress');

function setProgress(i) {
  if (i === 100) progress.classList.add('complete')
  progress.innerHTML = progress.style.width = `${i}%`
}

let i = 0;
const interval = setInterval(() => {
  if (++i === 100) clearInterval(interval)
  setProgress(i);
}, 150);