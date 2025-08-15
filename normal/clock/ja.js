function updateClock() {
  const now = new Date();

  // Time
  const timeString = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).format(now);

  // Date
  const dateString = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(now);

  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;

  // Dynamic background based on time
  const hour = now.getHours();
  const main = document.getElementById('main');
}

function toggleDarkMode() {
  document.getElementById('body').classList.toggle('dark-mode');
}

setInterval(updateClock, 1000);
updateClock();
