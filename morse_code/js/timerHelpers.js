

function startLoop(delay) {
  timer.start = int(millis());
  timer.stop = timer.start + delay;
  timer.running = true;
}

function isTimerRunning() {
  return timer.stop > int(millis());
}

function timerState() {
  if (!isTimerRunning()) {
    timer.running = false;
    char_idx++;
  }
}