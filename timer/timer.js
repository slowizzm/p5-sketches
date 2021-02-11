function startLoop(delay) {
  timer.start = int(millis());
  timer.stop = timer.start + delay;
  blink = !blink;
}

function isTimerRunning() {
  return timer.stop > int(millis());
}

function timerState() {
  if (!isTimerRunning()) {
    timer.running = false;
    (blink) ? startLoop(timer.hide): startLoop(timer.show)
  }
}