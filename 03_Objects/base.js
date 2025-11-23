console.log("Task 1")

let timer = {
    hours: 1,
    minutes: 0,
    seconds: 0,

    showTime() {

        let outputString = ``;
        if (this.hours < 10) { outputString += `0${this.hours}:` }
        else outputString += `${this.hours}:`;

        if (this.minutes < 10) { outputString += `0${this.minutes}:` }
        else outputString += `${this.minutes}:`;

        if (this.seconds < 10) { outputString += `0${this.seconds}` }
        else outputString += `${this.seconds}`;

        console.log(outputString)

    },
    addSecond(h, m, s) {
        this.hours = h;
        this.minutes = m;
        this.seconds = s;
        this.seconds++;

        if (this.seconds >= 60) { this.seconds = 0; this.minutes++ }
        if (this.minutes >= 60) { this.minutes = 0; this.hours++ }
        if (this.hours >= 24) { this.hours = 0; }
    },
    removeSecond(h, m, s) {
        this.hours = h;
        this.minutes = m;
        this.seconds = s;
        this.seconds--;

        if (this.seconds < 0) { this.seconds = 0; this.minutes-- }
        if (this.minutes < 0) { this.minutes = 59; this.hours-- }
        if (this.hours < 0) { this.hours = 23; this.seconds = 59; }
    }

}

timer.showTime();
timer.addSecond(12,50,2);
timer.showTime();
timer.removeSecond(0,0,0)
timer.showTime();

//console.log(Date.now().Date.hours.minutes.seconds)
document.write(`Document opened at: ${new Date()}`);

console.log("Task 2")

let car = {
    mark : "audi",
    model : "a7",
    manufacturer : "Krupp",
    year : 2015,
    avgSpeed: "135",
    showInfo() {
        for (var key in car) {
            if (typeof car[key] != 'function') {
                console.log(`${key} - ${car[key]}`);
            }
        }
    },
    distanceCalc(distance) {
        if (distance < 0) { console.error("Wrong Time"); return; }
        let time = distance / this.avgSpeed;
        let breaks = Math.floor(time / 4);
        if (breaks == 0) { console.log(`Time needed to drive [ ${this.distance} ] km is [ ${time} ] hours, with [ ${breaks} ] breaks`) }
        else {
            for (let i = 0; i < breaks; i++) {
                time++;
            }
            console.log(`Time needed to drive [ ${distance} ] km is [ ${time} ] hours, with [ ${breaks} ] breaks`)
        }
    }
}
car.showInfo();
car.distanceCalc(135)