const vp = document.querySelector('.video-container'),
  tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player, timeStamps = [0, 9.9];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'Pc1SA6vrfUE',
    playerVars: {
      'version': 3,
      'controls': 0,
      'start': 0,
      'end': 10,
      'modestbranding': 1
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(e) {
  e.target.playVideo();
  e.target.setVolume(20);
  setTimeout(updateDisplay.bind(this, e), 1000);
  loopVideo();
}

function updateDisplay(e) {
  vp.style.display = 'block';
}


function loopVideo() {
  // console.log(player.getCurrentTime());
  setTimeout(loopVideo, 0);

  if (player.getCurrentTime() >= timeStamps[1]) {
    player.seekTo(timeStamps[0]);
  }
}