// Countdown Timer Elements
const countdownElement = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

// Set countdown target in PST (Pacific Standard Time)
const targetTimePST = new Date();
targetTimePST.setUTCHours(23, 0, 0, 0); // 11:00 PM UTC (4:00 PM PST)

// Convert PST to user's local time zone
const endTime = targetTimePST.getTime() + (7 * 60 * 60 * 1000) + (59 * 60 * 1000) + (59 * 1000); // Adds 7h 59m 59s

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
        countdownElement.days.innerText = "00";
        countdownElement.hours.innerText = "00";
        countdownElement.minutes.innerText = "00";
        countdownElement.seconds.innerText = "00";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.days.innerText = days.toString().padStart(2, '0');
    countdownElement.hours.innerText = hours.toString().padStart(2, '0');
    countdownElement.minutes.innerText = minutes.toString().padStart(2, '0');
    countdownElement.seconds.innerText = seconds.toString().padStart(2, '0');
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Dropdown Menu Toggle
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
}
