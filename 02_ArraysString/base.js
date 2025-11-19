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
    for (let u = i+1; u < arr.length; u++) {
        if (arr[i] == arr[u]) { similarNums.push(u); break; }
    }
}
console.log(similarNums);


// Завдання 8:
// Створити новий масив, в який записати всі елементи масиву крім крайніх.

console.log("Task 8")
let newArr = []
let counter = 0;

for (let i = 1; i < arr.length-1; i++) {
    newArr[counter] = arr[i];
    counter++;
}
console.log(newArr)


// *Завдання 9:
// Обрахувати кількість парних чисел в масиві.
console.log("Task 9")
let counter2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {counter2++}
}
console.log(`Number of even numbers: ${counter2}`)


