const days = document.getElementById('days');
const hours = document.getElementById('hour');
const mins = document.getElementById('mins');
const second = document.getElementById('seconds');

const countdown = "1 Jan 2023";

function countdownApp() {
    const countdownDate = new Date(countdown);
    const currentDate = new Date();
    const totalseconds = (countdownDate - currentDate) / 1000;
    const day = Math.floor(totalseconds / 3600 / 24);
    const hour = Math.floor(totalseconds / 3600) % 24;
    const min = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds % 60) ;

    days.innerHTML = day;
    hours.innerHTML = (hour);
    mins.innerHTML = (min);
    second.innerHTML = (seconds);
}

function formatTime(time) {
    return time < 10? '0${time}' : time;
}

countdownApp();

setInterval(countdownApp, 1000);



