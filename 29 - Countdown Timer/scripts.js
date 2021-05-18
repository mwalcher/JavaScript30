let countdown;
const pageTitle = document.title;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

const addLeadingZero = (int) => `${ int < 10 ? '0' : '' }${ int }`;

const adjustedHour = (hour) => hour > 12 ? hour - 12 : hour;

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${ minutes }:${ addLeadingZero(remainingSeconds) }`;
    document.title = `${ pageTitle } - ${ display }`;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${ adjustedHour(hour) }:${ addLeadingZero(minutes) }`;
}