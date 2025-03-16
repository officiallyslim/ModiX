// Toggle Dropdown Menu
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
}

// Countdown Timer (00:07:59:59 in PST)
function getTargetTime() {
    let now = new Date();
    let pstOffset = -8 * 60; // PST is UTC-8
    let userOffset = now.getTimezoneOffset();
    let offsetDiff = pstOffset - userOffset;
    let adjustedTime = new Date(now.getTime() + offsetDiff * 60000);

    return adjustedTime.getTime() + (7 * 60 * 60 * 1000) + (59 * 60 * 1000) + (59 * 1000);
}

const targetTime = getTargetTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetTime - now;

    if (timeLeft <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

// Update Countdown Every Second
setInterval(updateCountdown, 1000);
updateCountdown();