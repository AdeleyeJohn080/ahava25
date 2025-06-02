const countdownDiv = document.getElementById('countdown');
const weddingDate = new Date('2025-10-03T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownDiv.textContent = "🎉 It's our wedding day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownDiv.textContent = `Countdown: ${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec`;
}

setInterval(updateCountdown, 1000);
