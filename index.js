window.onload = function () {
  var minutes = 00;
  var seconds = 00;
  var milliseconds = 00;
  var guiSeconds = document.getElementById("seconds");
  var guiMilliseconds = document.getElementById("milliseconds");
  var buttonStart = document.getElementById("start-button");
  var buttonStop = document.getElementById("stop-button");
  var buttonRestart = document.getElementById("restart-button");
  var Interval;
};

function startTimer() {
  milliseconds++;

  if (milliseconds <= 9) {
    guiMilliseconds.innerHTML = "0" + milliseconds;
  }

  if (milliseconds > 9) {
    guiMilliseconds.innerHTML = milliseconds;
  }

  if (milliseconds > 99) {
    console.log("seconds");
    seconds++;
    guiSeconds.innerHTML = "0" + seconds;
    milliseconds = 0;
    guiMilliseconds.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
