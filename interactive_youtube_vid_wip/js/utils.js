tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '1280',
    height: '720',
    videoId: 'OOg-4mtA3Zo',
    playerVars: {
      'version': 3,
      'controls': 0,
      'modestbranding': 1
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(e) {
  e.target.seekTo(0.1);
  e.target.setVolume(20);
  e.target.setPlaybackQuality('hd720')
  setTimeout(updateDisplay.bind(this, e), 1000);
  updateScene();
}