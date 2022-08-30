let totalSeconds, minutes, seconds, interval;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  minutes = Math.floor(totalSeconds / 60);
  seconds = totalSeconds % 60;
  clearInterval(interval);
  interval = setInterval(() => {
    countDown();
  }, 100);
  countdownDisplay.textContent = minutes + ":" + seconds + "0";
  choice.value = "";
});

const countDown = () => {
  if (minutes === 0 && seconds === 0) {
    clearInterval(interval);
    countdownDisplay.textContent = "compte a rebours terminé ! ";
    return;
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  countdownDisplay.textContent = minutes + ":" + seconds;
};
