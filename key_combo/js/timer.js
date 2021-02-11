function startLoop(delay) {
  timer.start = int(millis());
  timer.stop = timer.start + delay;
  canShow = !canShow;
}

function isTimerRunning() {
  return timer.stop > int(millis());
}

function timerState(msg) {
  if (!isTimerRunning()) {
    timer.running = false;
    passwordEnabled = !passwordEnabled;
    startLoop(timer.delay)
  }

  if (passwordEnabled) {
    txt_msg = 'enabled';
    console.log('enabled');
  } else {
    txt_msg = 'disabled';
    console.log('disabled');
  }
}