let timeLeft = 5;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60

    return `${String(minutes).padStart(2, '0')}: ${String(sec).padStart(2, '0')}`
};

function startTimer() {
    const timer = document.getElementById('timer');
    timer.textContent = formatTime(timeLeft);

    const interval = setInterval(() => {
        timeLeft--;

        if(timeLeft >= 0) {
            timer.textContent = formatTime(timeLeft);
        } else {
            clearInterval(interval);
            alert('Timer ended');
        }
    }, 1000)
};

startTimer();