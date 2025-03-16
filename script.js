// Toggle Dropdown Menu
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
}

// Countdown Timer
function startCountdown() {
    // Set the countdown duration (7 hours, 59 minutes, 59 seconds from now)
    let countdownTime = new Date();
    countdownTime.setHours(countdownTime.getHours() + 7);
    countdownTime.setMinutes(countdownTime.getMinutes() + 59);
    countdownTime.setSeconds(countdownTime.getSeconds() + 59);

    function updateTimer() {
        let now = new Date().getTime();
        let timeLeft = countdownTime - now;

        if (timeLeft <= 0) {
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            clearInterval(countdownInterval);
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = String(days).padStart(2, '0');
        document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
    }

    let countdownInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to avoid 1-second delay
}

// Dropdown Menu Functionality
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
}

// Start Countdown on Page Load
window.onload = startCountdown;