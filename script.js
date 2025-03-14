const elements = document.querySelectorAll('.title, .subtitle, .slogan');

elements.forEach(el => {
    let direction = 1;
    setInterval(() => {
        let current = parseFloat(el.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
        el.style.transform = `translateY(${current + direction * 0.5}px)`;
        if (Math.abs(current) > 5) direction *= -1;
    }, 50);
});
