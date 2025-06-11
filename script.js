let [seconds, minutes, hours] = [0, 0, 0];
let display = document.querySelector(".timer-display");
let timer = null;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.textContent = `${h} : ${m} : ${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  timer = null;
});
