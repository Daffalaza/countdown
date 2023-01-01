const days = document.getElementById('days');
const hours = document.getElementById('hour');
const mins = document.getElementById('mins');
const second = document.getElementById('seconds');
var text = document.getElementById('text');

const countdown = "1 Jan 2024";

var x = setInterval(function() {
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

    if (seconds < 0) {
        clearInterval(x);

        days.innerHTML = 0;
        hours.innerHTML = 0;
        mins.innerHTML = 0;
        second.innerHTML = 0;
        text.innerHTML = "Selamat tahun baru"
    }
}, 1000);