// Toggle Dropdown Menu
function toggleMenu() {
    let menu = document.getElementById("dropdownMenu");
    let content = document.querySelector(".center-container");

    menu.classList.toggle("show");

    // Blur background when menu is open
    if (menu.classList.contains("show")) {
        content.classList.add("menu-open-blur");
    } else {
        content.classList.remove("menu-open-blur");
    }
}

// Countdown Timer (Global)
function startCountdown() {
    let countdownTime = localStorage.getItem("countdownTime");

    if (!countdownTime) {
        countdownTime = new Date().getTime() + (12 * 60 * 60 * 1000); // 2 hours from now
        localStorage.setItem("countdownTime", countdownTime);
    }

    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = countdownTime - now;

        if (timeLeft < 0) {
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
    updateCountdown();
}

// Start Countdown
startCountdown();
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
}
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
}