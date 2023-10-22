
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById('timer').textContent = formattedTime;

    sessionStorage.setItem('pageTime', formattedTime);
}

function pad(number) {
    return (number < 10) ? "0" + number : number;
}

// Suorita päivitys aina, kun sivu latautuu
window.onload = function () {
    const storedTime = sessionStorage.getItem('pageTime');
    if (storedTime) {
        const storedTimeArray = storedTime.split(':');
        hours = parseInt(storedTimeArray[0]);
        minutes = parseInt(storedTimeArray[1]);
        seconds = parseInt(storedTimeArray[2]);
    }

    updateTimer(); // Päivitä aika ensin
    setInterval(updateTimer, 1000); // Jatka päivittämistä
};