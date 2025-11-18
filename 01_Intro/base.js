/*console.log("Hello from JS")

let number = 10;
let digit = 3.33
let email = "super@gmail.com";
let flag = false;

console.log(number);
console.log(typeof (number));

console.log(`Number : ${number}. Type : ${typeof(number)}`)
console.log(`Digit : ${digit}. Type : ${typeof(digit)}`)
console.log(`Email : ${email}. Type : ${typeof(email)}`)
console.log(`Flag : ${flag}. Type : ${typeof(flag)}`)


number = "Hello";
email = true;
console.log(`Number : ${number}. Type : ${typeof(number)}`)
console.log(`Email : ${email}. Type : ${typeof(email)}`)


const numbers = [4,5,98,54,6,542];

for (let i = 0; i < numbers.length; i++) {
    console.log(`[${i}] - ${numbers[i]}`)
    
}

let message = (3 > 2) ? "bigger":"less";
console.log(message)


function divide(a,b){
    if(b==0){
        console.log("Cant divide by 0");
        return;
    }
    return a/b
}
alert("Result : "+ divide(45,5));

let a = +prompt("Enter your number: ")
let b = prompt("Enter your number: ")

alert("Result : "+divide(a,b))*/

// Завдання 1:
// Користувач вводить 2 числа. Показати більше з них.

console.log("Task 1");
let num1 = +prompt("Enter first number: ");
let num2 = +prompt("Enter second number: ");

function bigger(a, b) {
    if (a > b) aconsole.logert(`Number ${a} is bigger!`);
    else if (a < b) console.log(`Number ${b} is bigger!`);
    else if (a == b) console.log(`Number ${a} = ${b}`);
}

console.log(bigger(num1, num2));

// Завдання 2:
// Створити калькулятор. Користувач вводить 2 числа і знак операції (+ - * /). Взалежності від вибраної операції виконати дію та відобразити результат на екран.

console.log("Task 2");

while (true) {
    let num3 = +prompt("Enter first for calculation number: ");
    let num4 = +prompt("Enter second for calculation number: ");

    let c = prompt("Pick operation: + - * /  -- e to exit");
    if (c == "+") console.log(num3 + num4);
    else if (c == "-") console.log(num3 - num4);
    else if (c == "*") console.log(num3 * num4);
    else if (c == "/") console.log(num3 / num4);
    else if (c == "e") break;
    else alert("WRONG OPERATION!")
}

// Завдання 3:
// Запросити укористувача число та вивести його модуль(|7|=7,|-7|=7).

console.log("Task 3");

let num5 = +prompt("Enter number: ")

function module(num) {
    if (num5 < 0) num5 = num5 * (-1);
    else return num5;
}
console.log(`|${num5}| = ${module(num5)}`);

// Завдання 4:
// Користувач вводить рік. Відобразити кількість днів в даному році.

console.log("Task 4");

let year = +prompt("Enter Year: ")

function daysInYear(year) {
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            console.log("Number of Days is 366");
            return true;
        }
        else if ((year % 100 == 0) && (year % 400 == 0)) {
            console.log("Number of Days is 366");
            return true;
        }
    }
    else { console.log("Number of Days is 365"); return false; }
}
daysInYear(year);

// *Завдання 5:
// Запросити дату (день, місяць, рік) та вивести наступну за нею дату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.

console.log("Task 5");

let day,month,y

while (true) {
    day = +prompt("Enter Day")
    month = +prompt("Enter Month")
    y = +prompt("Enter Year")
    if ((day < 0 || day > 31) || (month < 0 || month > 12) || (y < 0)) { alert("Wrong Data") }
    else break;
}

let leapYear = daysInYear(y);

if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && day == 31) {
    day = 1;
    month++;
}
else if (month == 2 && leapYear == true && day == 29) {
    day = 1;
    month++;
}
else if (month == 2 && leapYear == false && day == 28) {
    day = 1;
    month++;
}

else day++;

if (month == 13) {
    month = 1;
    y++;
}

if (day == 31 && month == 12) { y++; }

console.log(`Next Date: ${day}/${month}/${y}`);

//--------------------------------------
alert("Part 2 Task 1.1")
// Завдання 1:
// Запитувати дані у користувача необхідно за допомогою prompt(), а виводити
// результат за допомогою alert().
// 1. Запитайте у користувача рік його народження, порахуйте, скільки йому років і
// виведіть результат. Поточний рік вкажіть в коді як константу.
// 2. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки
// файлів розміром в 820 Мб поміщається на флешку.

let yearOfBorn = +prompt("Enter year when you were born");
const currentYear = 2025;
alert(`Your age: ${currentYear-yearOfBorn}`)

alert("Part 2 Task 1.2")

let usbSize = +prompt("Enter usb size In GB")
alert(`Number of 820 mb files it can store: ${Math.trunc(usbSize * 1024 / 820)}`);


// Завдання 2:
// Вам необхідно самостійно вирішити, для якого завдання який оператор
// розгалуження краще використовувати: if, switch або тернарний оператор.
// 1. Запросити у користувача число від 0 до 9 і вивести йому спецсимвол, який
// розташований на цій клавіші (1 !, 2 @, 3 # і тд).
// 2. Запросити у користувача рік і перевірити, високосний він чи ні. Високосний
// рік або кратний 400, або кратний 4 і при цьому не кратний 100.
// 3. Запросити дату (день, місяць, рік) і вивести наступну за нею дату. Врахуйте
// можливість переходу на наступний місяць, рік, а також високосний рік.

alert("Part 2 Task 2.1")

let userNum = +prompt("Enter number 0-9")
switch (userNum) {
    case userNum = 0:
        alert(`[${userNum}] - ) )`)
        break;
    case userNum = 1:
        alert(`[${userNum}] - !`)
        break;
    case userNum = 2:
        alert(`[${userNum}] - @ "`)
        break;
    case userNum = 3:
        alert(`[${userNum}] - # №`)
        break;
    case userNum = 4:
        alert(`[${userNum}] - $ ;`)
        break;
    case userNum = 5:
        alert(`[${userNum}] - % %`)
        break;
    case userNum = 6:
        alert(`[${userNum}] - ^ :`)
        break;
    case userNum = 7:
        alert(`[${userNum}] - & ?`)
        break;
    case userNum = 8:
        alert(`[${userNum}] - * *`)
        break;
    case userNum = 9:
        alert(`[${userNum}] - ( (`)
        break;

    default:
        alert("Wrong Number");
}

alert("Part 2 Task 2.2")

let userYear = +prompt("Enter Year")
function daysInYearCopy(year) {
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            alert("Year is Leap");
            return true;
        }
        else if ((year % 100 == 0) && (year % 400 == 0)) {
            alert("Year is Leap");
            return true;
        }
    }
    else { alert("Year is not Leap"); return false; }
}
daysInYearCopy(userYear);

alert("Part 2 Task 2.3")

let day2,month2,y2

while (true) {
    day2 = +prompt("Enter day")
    month2 = +prompt("Enter month")
    y2 = +prompt("Enter Year")
    if ((day2 < 0 || day2 > 31) || (month2 < 0 || month2 > 12) || (y2 < 0)) { alert("Wrong Data") }
    else break;
}

let leapYear22 = day2sInYearCopy(y2);

if ((month2 === 1 || month2 === 3 || month2 === 5 || month2 === 7 || month2 === 8 || month2 === 10 || month2 === 12) && day2 == 31) {
    day2 = 1;
    month2++;
}
else if (month2 == 2 && leapYear2 == true && day2 == 29) {
    day2 = 1;
    month2++;
}
else if (month2 == 2 && leapYear2 == false && day2 == 28) {
    day2 = 1;
    month2++;
}
else day2++;
if (month2 == 13) {
    month2 = 1;
    y2++;
}
if (day2 == 31 && month2 == 12) { y2++; }
alert(`Next Date: ${day2}/${month2}/${y2}`);



// Завдання 3:
// Вам необхідно самостійно вирішити, для якого завдання, який цикл краще
// використовувати: while, do while або for.
// 1. Підрахувати суму всіх чисел у заданому користувачем діапазоні.
// 2. Визначити кількість цифр у введеному числі.
// 3. Запитати у користувача 10 чисел і підрахувати, скільки було введено
// позитивних, негативних та нулів. При цьому також порахувати, скільки парних
// та непарних. Вивести статистику на екран. Врахуйте, що достатньо однієї
// змінної (не 10) для введення чисел користувачем.
// 4. Зациклити виведення днів тижня таким чином: День тижня. Хочете побачити
// наступний день?» і так доти, доки користувач натискає OK.

alert("Part 2 Task 3.1")

let start = +prompt("Enter range start")
let end = +prompt("Enter range end")

let sumInRange = 0;
for (start < end; start++;) {
    sumInRange += start;
}

alert(`Sum of range ${sumInRange}`)

alert("Part 2 Task 3.2")
let userNumbForNums = +prompt("Enter number to find digits")
let countOfUserNum = 0;

while (userNumbForNums > 0) {
    userNumbForNums = Math.floor(userNumbForNums / 10);
    countOfUserNum++;
}
alert(`Number of digits: ${countOfUserNum}`)

alert("Part 2 Task 3.3")

let userArray;
for (let i = 0; i < 10; i++) {
    let temp = +prompt("Enter number");
    userArray[i] = temp; 
}

let positives = 0;
let negatives = 0;
let zeros = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] > 0) positives++;
    if (userArray[i] < 0) negatives++;
    if (userArray[i] % 2 == 0 ) even++;
    if (userArray[i] % 2 != 0 ) odd++;
    if (userArray[i] == 0 ) zeros++;
}
alert(`Positives [${positives}] Negatives [${negatives}] Zeros [${zeros}] Even [${even}] Even [${odd}]`)

alert("Part 2 Task 3.4")

let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentDay = 0;

do {
    alert(`Day of the week: ${daysArr[currentDay]}`);
    currentDay++;
    if (currentDay == 8) { currentDay = 0 };
} while (confirm("Want to see next day?"));


// Завдання 4:
// 1. Написати функцію, яка обчислює факторіал переданого їй числа.
// 2. Написати функцію, яка приймає три окремі цифри та перетворює їх в одне
// число.
// Наприклад: цифри 1, 4, 9 перетворяться на число 149.
// 3. Написати функцію, яка приймає довжину та ширину прямокутника та
// обчислює його площу. Якщо у функцію передали 1 параметр, вона обчислює
// площу квадрата.
// 4. Написати функцію, яка приймає час (годинник, хвилини, секунди) і виводить
// його на екран у форматі «hh:mm:ss». Якщо під час виклику функції хвилини
// та/або секунди не були передані, виводити їх як 00.
// * У всіх наступних завданнях обов'язково використовувати рекурсію.
// 5. Написати функцію, яка виводить передане їй число задом наперед.
// Наприклад: число 1234 вивести як 4321.
// 6. Написати функцію, яка рахує суму цифр числа.
// Наприклад: число 1357, сума 1+3+5+7=16.

alert("Part 2 Task 4.1")

let userFactorialNumb = +prompt("Enter number for factorial")
let fact = 1;

function factorial(num) {
    if (num < 0) return;
    if (num = 0) return 1;
    for (let i = 1; i < num; i++) {
        fact = fact*i  
    }
    return fact;
}
alert(`Factorial of ${userFactorialNumb}: ${factorial(userFactorialNumb)}`)

