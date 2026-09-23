function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('timeDisplay').textContent = `${hours}:${minutes}`;
}
updateTime();
setInterval(updateTime, 1000);

const box = document.querySelector('.time-reveal-section');
const timeText = document.getElementById('timeDisplay');

box.addEventListener('mouseenter', () => {
    timeText.style.opacity = '0.25';
});

box.addEventListener('mouseleave', () => {
    timeText.style.opacity = '0';
});