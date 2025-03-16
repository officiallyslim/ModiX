// Toggle Menu
function toggleMenu() {
    let menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Set countdown to 2 hours from now
const now = new Date().getTime();
const targetDate = now + (2 * 60 * 60 * 1000); // 2 hours in milliseconds

function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeLeft = targetDate - currentTime;

    if (timeLeft <= 0) {
        document.querySelector(".countdown").innerHTML = "Time's up!";
        return;
    }

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();