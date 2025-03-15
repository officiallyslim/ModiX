// Countdown Timer
const countdownElement = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

// Set countdown duration to 14 days
const endTime = new Date();
endTime.setDate(endTime.getDate() + 14);
endTime.setHours(0, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
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
