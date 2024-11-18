let timer;
let remainingTime = 0;
let isRunning = false;

const display = document.getElementById("display");
const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateDisplay() {
  display.textContent = formatTime(remainingTime);
}

startBtn.addEventListener("click", () => {
  if (isRunning) return;

  const userTime = parseInt(timeInput.value, 10);
  if (!isNaN(userTime) && userTime > 0 && remainingTime === 0) {
    remainingTime = userTime;
    updateDisplay();
  }

  timer = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert("¡Tiempo completado!");
    }
  }, 1000);

  isRunning = true;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  remainingTime = 0;
  timeInput.value = "";
  updateDisplay();
});
