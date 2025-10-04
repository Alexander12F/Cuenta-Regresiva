const targetDate = new Date("December 21, 2025 19:00:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Cuenta regresiva
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<h2>🚀 ¡El Proyecto X ha comenzado!</h2>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 🎵 Control de música
const music = document.getElementById("bg-music");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => {
      btn.textContent = "⏸️"; // cambia a pausa
    }).catch(err => {
      console.log("Autoplay bloqueado:", err);
    });
  } else {
    music.pause();
    btn.textContent = "🎵"; // cambia a nota musical
  }
});
