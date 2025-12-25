const h = document.getElementById(`Hours`);
const m = document.getElementById(`Minutes`);
const s = document.getElementById(`Seconds`);

function updateClock() {
    let date = new Date();
    if (date.getHours() < 10) {
        h.innerText = `0${date.getHours()}:`;
    } else { h.innerText = `${date.getHours()}:`; }

    if (date.getMinutes() < 10) {
        m.innerText = `0${date.getMinutes()}:`;
    } else { m.innerText = `${date.getMinutes()}:`; }

    if (date.getSeconds() < 10) {
        s.innerText = `0${date.getSeconds()}`;
    } else { s.innerText = `${date.getSeconds()}`; }
}

document.addEventListener("DOMContentLoaded", () => setInterval(updateClock, 1000))

let timer = document.getElementById(`countDown`)
let totalSeconds = 0;

let stopTimeId;


function sumbitHandle(event) {
    event.preventDefault();

    if (stopTimeId)
        clearInterval(stopTimeId);

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    console.log(values)
    let t = parseInt(values.timerTime);
    
    switch (values.timeType) {
        case "minutes":
            t = t * 60;
            stopTimeId = setInterval(() => {
                t--;
                timer.innerText = formatTime(t);
                console.log(t)
            }, 1000)
            break

        case "seconds":
            stopTimeId = setInterval(() => {
                t--;
                timer.innerText = formatTime(t);
            }, 1000)
            break
    }
}

function stopTimerHandle() {
    if (stopTimeId)
        clearInterval(stopTimeId);
    else
        console.log(`Timer has not been set`)
}
function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');

    if (seconds == 0) {
        stopTimerHandle();
        return `Time is Out!`
    }
    return `${hoursStr}:${minutesStr}:${secondsStr}`;
}


let stopWatchMM = document.getElementById(`timeSecMM`)
let stopWatchSS = document.getElementById(`timeSecSS`)
let stopWatchMS = document.getElementById(`timeSecMS`)

let ms = 0;
let ss = 0;
let mm = 0;

let stopWatchId;

function resetTimeSec() {
    clearInterval(stopWatchId);
    stopWatchId = null;

    ms = 0;
    ss = 0;
    mm = 0;

    stopWatchMM.innerText = "00:";
    stopWatchSS.innerText = "00:";
    stopWatchMS.innerText = "00";
}
function stopTimeSec() {
    clearInterval(stopWatchId);
    stopWatchId = null;
}
function startTimeSec() {
    if (stopWatchId)
        clearTimeout(stopWatchId);

    stopWatchId = setInterval(() => {
        ms++;
        stopWatchMS.innerText = String(ms).padStart(2, '0');
        if (ms === 100) {
            ms = 0; stopWatchMS.innerText = String(ms).padStart(2, '0');
            ss++; stopWatchSS.innerText = String(ss + `:`).padStart(3, '0');
        }
        if (ss === 5) {
            ss = 0; stopWatchSS.innerText = String(ss + `:`).padStart(3, '0');
            mm++; stopWatchMM.innerText = String(mm + `:`).padStart(3, '0');
        }

    }, 10)
}