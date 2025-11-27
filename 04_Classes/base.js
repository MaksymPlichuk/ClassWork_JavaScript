
console.log("Task 1")

class Car {
    constructor(mn, md, yr, as) {
        this.manufacturer = mn;
        this.model = md;
        this.year = yr;
        this.avgSpeed = as;
    };
    print() {
        console.log(`Manufacturer: ${this.manufacturer}, Model: ${this.model}, Year:${this.year}, AVG speed: ${this.avgSpeed}`)
    };
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
    };
}

let mySummerCar = new Car("AUDI", "A7", "2016", "175")
mySummerCar.print();
mySummerCar.distanceCalc(1500);


console.log("Task 2")


function gcd(a, b) {    //НСД
    return b == 0 ? a : gcd(b, a % b);
};
function lcm(a, b) {    //НСК
    return Math.abs(a * b) / gcd(a, b);
};

class Fraction {
    constructor(chiselnik, znamennik) {
        this.numerator = chiselnik;
        this.denominator = znamennik;
    };



    addFractions(chiselnik, znamennik) {
        if (this.denominator == znamennik) {
            let newNumer = this.numerator + chiselnik;
            console.log(`${this.numerator}/${this.denominator} + ${chiselnik}/${znamennik} = ${newNumer}/${znamennik}`);
        }
        else {
            let newDenomir = lcm(this.denominator, znamennik);
            let firstNum = (newDenomir / this.denominator) * this.numerator;
            let secndNum = (newDenomir / znamennik) * chiselnik;

            let newNumer = firstNum + secndNum;
            console.log(`${this.numerator}/${this.denominator} + ${chiselnik}/${znamennik} = ${newNumer}/${newDenomir}`);
        }
    };
    subtractFractions(chiselnik, znamennik) {
        if (this.denominator == znamennik) {
            let newNumer = this.numerator - chiselnik;
            console.log(`${this.numerator}/${this.denominator} - ${chiselnik}/${znamennik} = ${newNumer}/${znamennik}`);
        }
        else {
            let newDenomir = lcm(this.denominator, znamennik);
            let firstNum = (newDenomir / this.denominator) * this.numerator;
            let secndNum = (newDenomir / znamennik) * chiselnik;

            let newNumer = firstNum - secndNum;
            console.log(`${this.numerator}/${this.denominator} - ${chiselnik}/${znamennik} = ${newNumer}/${newDenomir}`);
        }
    };

    multiplyFractions(chiselnik, znamennik) {
        let newNumer = this.numerator * chiselnik;
        let newDenomir = this.denominator * znamennik;
        console.log(`${this.numerator}/${this.denominator} * ${chiselnik}/${znamennik} = ${newNumer}/${newDenomir}`);
    };
    divideFractions(chiselnik, znamennik) {
        let newNumer = this.numerator * znamennik;
        let newDenomir = this.denominator * chiselnik;
        console.log(`${this.numerator}/${this.denominator} / ${chiselnik}/${znamennik} = ${newNumer}/${newDenomir}`);
    };
    reductionFractions() {
        let reduct = gcd(this.numerator, this.denominator)
        this.numerator = this.numerator / reduct;
        this.denominator = this.denominator / reduct;

        console.log(`${this.numerator}/${this.denominator} reduct by ${reduct} = ${this.numerator}/${this.denominator}`);
    }
}

let frac = new Fraction(8, 4)
frac.addFractions(2, 4)
frac.addFractions(2, 10)
frac.subtractFractions(2, 4)
frac.subtractFractions(2, 10)
frac.multiplyFractions(2, 10)
frac.divideFractions(2, 10)

frac.reductionFractions();


console.log("Task 3")

class Time {
    hours;
    minutes;
    seconds;
    constructor(h, m, s) {
        this.hours = h;
        this.minutes = m;
        this.seconds = s;
    };
    showTime() {

        let outputString = ``;
        if (this.hours < 10) { outputString += `0${this.hours}:` }
        else outputString += `${this.hours}:`;

        if (this.minutes < 10) { outputString += `0${this.minutes}:` }
        else outputString += `${this.minutes}:`;

        if (this.seconds < 10) { outputString += `0${this.seconds}` }
        else outputString += `${this.seconds}`;

        console.log(outputString)

    };
    changeTimeBySeconds(givenSeconds) {
        let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
        let finalTime = totalSeconds + givenSeconds;

        this.hours = Math.floor(finalTime / 3600);
        this.minutes = Math.floor(finalTime / 60 % 60);
        this.seconds = Math.floor(finalTime % 60);

        console.log(`totalSeconds: ${finalTime}`)
    };
    changeTimeByMinutes(givenMinutes) {
        let totalMinutes = this.hours * 60 + this.minutes + this.seconds / 60;
        let finalTime = totalMinutes + givenMinutes;

        this.hours = Math.floor(finalTime / 60);
        this.minutes = Math.floor(finalTime % 60);
        this.seconds = Math.floor(finalTime % 1 * 60);

        console.log(`totalMinutes: ${finalTime}`)
    };
    changeTimeByHours(givenHours) {
        let totalHours = this.hours + this.minutes / 60 + this.seconds / 3600;
        let finalTime = totalHours + givenHours;

        this.hours = Math.floor(finalTime % 24);
        this.minutes = Math.floor(finalTime % 1 * 60);
        this.seconds = Math.floor((finalTime % 1 * 60) % 1 * 60);

        console.log(`totalHours: ${finalTime}`)
    };

}

let time = new Time(1, 20, 30);
time.showTime();
time.changeTimeBySeconds(60);
time.showTime();
time.changeTimeByMinutes(68);
time.showTime();
time.changeTimeByHours(68);
time.showTime();
