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

let num1 = +prompt("Enter first number: ")
let num2 = +prompt("Enter second number: ")
alert(bigger(num1,num2))

function bigger(a,b){
    if (a>b) alert(`Number ${a} is bigger!`)
    else if (a<b) alert(`Number ${b} is bigger!`)
    else if (a==b) alert(`Number ${a} = ${b}`)
}


// Завдання 2:
// Створити калькулятор. Користувач вводить 2 числа і знак операції (+ - * /). Взалежності від вибраної операції виконати дію та відобразити результат на екран.
while (true){
let num3 = +prompt("Enter first for calculation number: ")
let num4 = +prompt("Enter second for calculation number: ")

let c = prompt("Pick operation: + - * /  -- e to exit")
if (c == "+") {alert(num3+num4)}
else if (c == "-") {alert(num3-num4)}
else if (c == "*") {alert(num3*num4)}
else if (c == "/") {alert(num3/num4)}
else if (c == "e") {break}
else {alert("WRONG OPERATION!")}
}

// Завдання 3:
// Запросити укористувача число та вивести його модуль(|7|=7,|-7|=7).

let num5 = +prompt("Enter number: ")
let num6=num5;
while(true){
    if (num5<0) {alert(`|${num5*(-1)}|=${num6}`)}  
    else {alert(`|${num5*(-1)}|=${num6}`)}  
}

// Завдання 4:
// Користувач вводить рік. Відобразити кількість днів в даному році.

let year = +prompt("Enter number: ")

// *Завдання 5:
// Запросити дату (день, місяць, рік) та вивести наступну за нею дату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.
// ! –
 
