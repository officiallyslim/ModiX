document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    let countdownTime = 7 * 3600 + 59 * 60 + 59; // 7 hours, 59 minutes, 59 seconds

    function updateCountdown() {
        let days = Math.floor(countdownTime / 86400);
        let hours = Math.floor((countdownTime % 86400) / 3600);
        let minutes = Math.floor((countdownTime % 3600) / 60);
        let seconds = countdownTime % 60;

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        if (countdownTime > 0) {
            countdownTime--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();

    // Menu Toggle
    const menuBtn = document.querySelector(".menu-btn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    menuBtn.addEventListener("click", function () {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });
});