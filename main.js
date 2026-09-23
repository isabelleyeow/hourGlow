function getColorForHour(hour) {
    if (hour >= 5 && hour < 8) {
        return '#F7C59F'; // dawn
    } else if (hour >= 8 && hour < 17) {
        return '#87CEEB'; // day
    } else if (hour >= 17 && hour < 20) {
        return '#FF8C69'; // dusk
    } else {
        return '#0B1026'; // night
    }
}
function updateDayNight() {
    const hour = new Date().getHours();
    const section = document.getElementById('dayNightSection');
    section.style.backgroundColor = getColorForHour(hour);
}

// updates automatically based on actual time
updateDayNight();
setInterval(updateDayNight, 60000);

// debug slider, manually adjust the time
function getColorForHour(hour) {
    if (hour >= 5 && hour < 8) {
        return '#F7C59F'; // dawn
    } else if (hour >= 8 && hour < 17) {
        return '#87CEEB'; // day
    } else if (hour >= 17 && hour < 20) {
        return '#FF8C69'; // dusk
    } else {
        return '#0B1026'; // night
    }
}
function updateDayNight() {
    const hour = new Date().getHours();
    const section = document.getElementById('dayNightSection');
    section.style.backgroundColor = getColorForHour(hour);
}
updateDayNight();
setInterval(updateDayNight, 60000);

const slider = document.getElementById('hourSlider');
const sliderLabel = document.getElementById('hourLabel');
const section = document.getElementById('dayNightSection');

slider.addEventListener('input', () => {
    const hour = parseInt(slider.value, 10);
    section.style.backgroundColor = getColorForHour(hour);
    sliderLabel.textContent = `${String(hour).padStart(2, '0')}:00`;
});