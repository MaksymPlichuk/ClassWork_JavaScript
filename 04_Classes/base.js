// Завдання 1

// Створіть об’єкт, що описує автомобіль (виробник, модель, рік
// випуску, середня швидкість), і наступні функції для роботи з цим
// об’єктом.

// 1. Функція для виведення інформації про автомобіль на
// екран.
// 2. Функція для підрахунку необхідного часу для подолання
// переданої відстані із середньою швидкістю. Враховуйте,
// що через кожні 4 години дороги, водієві необхідно робити
// перерву на 1 годину.

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

// Завдання 3
// Створіть об’єкт, що описує час (години, хвилини, секунди), і
// наступні функції для роботи з цим об’єктом.

// 1. Функція виведення часу на екран.
// 2. Функція зміни часу на передану кількість секунд.
// 3. Функція зміни часу на передану кількість хвилин.
// 4. Функція зміни часу на передану кількість годин.

// Враховуйте те, що в останніх 3 функціях при зміні однієї частини часу, може змінитися й інша. Наприклад: якщо до часу

// «20:30:45» додати 30 секунд, то має вийти «20:31:15», а не «20:30:75»


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
        let totalSeconds = this.hours / 60;
        /*//5555/3600-h; 5555/60%60 -m; 5555%60 S
        / m = (5555/60)% * 60
        = 92
        / h = 5555/3600 = 1
        //5 = 5555%60*/
    
    }

}



