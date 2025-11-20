// Завдання 1:
// Створити масив із 20-ти елементів та заповнити його випадковими числами від 1 до 100.

console.log("Task 1");
let arr = [];
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random(1, 100) * 100);
}
console.log(arr);

// Завдання 2:
// Відобразити кожний елемент масива у вигляді: [1] – 5
// [2] – 78 ... і тд.

console.log("Task 2");
for (let i = 0; i < arr.length; i++) {
    console.log(`[${i} - ${arr[i]}]`);
}


// Завдання 3:
// Перевірити чи є в масиві число яке кратне 7-ми.

console.log("Task 3");
console.log("Numbers even 7");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 == 0) { console.log(arr[i]); }

}



// Завдання 4:
// Відсортувати масив по спаданню.

console.log("Task 4");

arr.sort((a, b) => b - a);
console.log(arr);

// Завдання 5:
// В головному масиві заповнити 2-гу половину елементів нулями.

console.log("Task 5")

let mid;
mid = Math.floor(arr.length / 2);

for (let i = 0; i < arr.length; i++) {
    if (i >= mid) { arr[i] = 0; console.log(arr[i]); }

}


// Завдання 6:
// Видалити з масива перші 3 елемента використавши один метод.

console.log("Task 6");
for (let i = 0; i < 3; i++) {
    arr.shift();
}
console.log(arr);


// Завдання 7:
// Перевірити чи має масиві однакові елементи.

console.log("Task 7")

let similarNums = []

for (let i = 0; i < arr.length; i++) {
    for (let u = i + 1; u < arr.length; u++) {
        if (arr[i] == arr[u]) { similarNums.push(u); break; }
    }
}
console.log(similarNums);


// Завдання 8:
// Створити новий масив, в який записати всі елементи масиву крім крайніх.

console.log("Task 8")
let newArr = []
let counter = 0;

for (let i = 1; i < arr.length - 1; i++) {
    newArr[counter] = arr[i];
    counter++;
}
console.log(newArr)


// *Завдання 9:
// Обрахувати кількість парних чисел в масиві.
console.log("Task 9")
let counter2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) { counter2++ }
}
console.log(`Number of even numbers: ${counter2}`);


//-----------------------------------------
console.log("Part 2 Task 1")

// Завдання 1:
// Написати функцію, яка приймає рядок та рахує кількість пробілів в ньому.

let str = prompt("Enter String")
let spaceCounter = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") { spaceCounter++ };
}
console.log(`Number Of Spaces: ${spaceCounter}`);
    

// Завдання 2:
// Написати функцію, яка переводить перший сиивол рядка у верхній регістр.

console.log("Part 2 Task 2")

let str2 = prompt("Enter string");

let words2 = str2.split(" ");

for (let i = 0; i < words2.length; i++) {
    words2[i] = words2[i][0].toUpperCase() + words2[i].slice(1);
}

console.log(words2)

// Завдання 3:
// Написати функцію, яка рахує кількість слів в рядку.

console.log("Part 2 Task 3");

let str3 = prompt("Enter string");
let words3 = str2.split(" ");

let wordCounter = words3.length;
console.log(`Number of words in [${str3}] -- ${wordCounter}`);


// Завдання 4:
// Написати функцію, яка приймає словосполучення і перетворює його в абревіатуру.
// Наприклад: cascading style sheets в CSS, об'єктно орієнтоване програмування в ООП.

console.log("Part 2 Task 4")

let str4 = prompt("Enter words for Abriviation")
let words4 = str4.split(" ")

let abbr = "";

for (let i = 0; i < words4.length; i++) {
    abbr += words4[i][0].toUpperCase(); 
}

console.log(`Abriviation for [${str4}] - ${abbr}`);


// Завдання 5:
// Написати функцію, яка перевіряє чи переданий рядок являється паліндромом.

console.log("Part 2 Task 5");

let palindrom = prompt("ENter a word to find if it is palindrom")
palindrom = palindrom.trim();

if (palindrom[0] == palindrom[palindrom.length - 1]) { console.log(`Word ${palindrom} -- is palindrom`) }
else { console.log(`Word ${palindrom} -- is not palindrom`) }


// *Завдання 6:
// Написати функцію, яка отримує url та відображає детальну інформацію про неї.
// Наприклад: url “https://itstep.org/ua/about”, інформація “протокол: https, домен:
// itstep.org, шлях: /ua/about”.

console.log("Part 2 Task 5");

let url = prompt("Enter URL");
url = url.trim();

let protocol = url.split(":");
let noProtocoldomenPath = protocol[1].split("//"); 

let domenAndPath = noProtocoldomenPath[1].split("/");
let domen = domenAndPath[0];

let path = "/";

for (let i = 1; i < domenAndPath.length; i++) {
    path += domenAndPath[i].concat("/");
}

console.log(`protocol: [ ${protocol[0]} ], domen: [ ${domen} ], path: [ ${path} ]`)




