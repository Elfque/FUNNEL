const modal = document.querySelector(".modal");
const btnOpen = document.querySelectorAll(".open-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".cancel-icon");

btnOpen?.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
overlay?.addEventListener("click", closeModal);
closeBtn?.addEventListener("click", closeModal);

// COUNTDOWN
const hourContainer = document.querySelector(".hour");
const minuteContainer = document.querySelector(".minute");
const secondContainer = document.querySelector(".second");

const duration = 24 * 60 * 60 * 1000;

// Set the end time by adding the duration to the current time
const endTime = new Date().getTime() + duration;

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current time
  const currentTime = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = endTime - currentTime;

  // Check if the countdown has reached zero
  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "Countdown expired";
    return;
  }

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  hourContainer.textContent = hours;
  minuteContainer.textContent = minutes;
  secondContainer.textContent = seconds;

  // Display the remaining time
  document.getElementById(
    "timer"
  ).innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}
