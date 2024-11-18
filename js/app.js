// crea una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones , iniciar, pausar y reset.
let timer;
let timeRemaining = 0;
let isRunning = false;

const timeInput = document.getElementById("timeInput");
const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    secs
  ).padStart(2, "0")}`;
}

function startTimer() {
  if (isRunning) return;
  if (timeRemaining <= 0) {
    const userTime = parseInt(timeInput.value, 10);
    if (!userTime || userTime <= 0) return alert("Ingresa un tiempo válido.");
    timeRemaining = userTime;
    updateDisplay(timeRemaining);
  }

  isRunning = true;
  timer = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateDisplay(timeRemaining);
    } else {
      clearInterval(timer);
      isRunning = false;
      alert("¡Tiempo terminado!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeRemaining = 0;
  timeInput.value = "";
  updateDisplay(0);
}

// Asociar eventos a los botones
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Mostrar inicialmente 00:00
updateDisplay(0);
