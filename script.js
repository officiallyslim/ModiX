document.addEventListener("DOMContentLoaded", function () {
    let countdownDuration = 7 * 60 * 60 + 59 * 60 + 59; // 7 hours, 59 minutes, 59 seconds
    let endTime = localStorage.getItem("countdownEndTime");

    if (!endTime || new Date().getTime() > endTime) {
        endTime = new Date().getTime() + countdownDuration * 1000; // Set new end time
        localStorage.setItem("countdownEndTime", endTime);
    }

    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = endTime - now;

        if (timeLeft <= 0) {
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Run once immediately
});

// Menu Toggle
function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("menu-active");
}