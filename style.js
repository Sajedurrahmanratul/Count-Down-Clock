// picking up elements 

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

function countDown() {

    //event day
    const eventDate = new Date("29 Apr 2022 12:00:00");
    //current day
    const currentDate = new Date();

    // differents between current day to our event day
    const diff = eventDate - currentDate

    //Making day, hours, minutes, seconds from mili seconds
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // remianing hours minutes seconds

    const remianingHours = hours % 24
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    // login if its a single digit 


    // Pushing values to html
    d.innerHTML = days < 10 ? "0" + days : days;
    h.innerHTML = remianingHours < 10 ? "0" + remianingHours : remianingHours;
    m.innerHTML = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
    s.innerHTML = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;


}

setInterval(countDown, 1000)

countDown();

