// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styleBoolean = 'color: mediumpurple;';
const styleHeader = 'border-left: 4px solid green; padding-left: 10px; display: block; white-space: pre-wrap;';
const styleNone = 'color: none;';
const styleNumber = 'color: cornflowerblue;';
const styleString = 'color: hotpink;';
/*******************************************************/

// 1. Створити пустий масив та :
const numbers = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
let currValue, stopIndex;

currValue = 0;
for (let i = 0; i < 50; i++) {
    numbers[i] = currValue;
    currValue += 2;
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
currValue = 1;
stopIndex = numbers.length + 50;
for (let i = numbers.length; i < stopIndex; i++) {
    numbers[i] = currValue;
    currValue += 2;
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
stopIndex = numbers.length + 20;
for (let i = numbers.length; i < stopIndex; i++) {
    numbers[i] = Math.random();
}
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
stopIndex = numbers.length + 20;
for (let i = numbers.length; i < stopIndex; i++) {
    numbers[i] = Math.round(8 + Math.random() * (732 - 8));
}
console.log('%c%s', styleHeader,
    `1. Створити пустий масив та :
    a. заповнити його 50 парними числами за допомоги циклу.
    b. заповнити його 50 непарними числами за допомоги циклу.
    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
    d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)`);
console.log(numbers);


// 2. Вивести за допомогою console.log кожен третій елемен
console.log('%c%s', styleHeader,
    `2. Вивести за допомогою console.log кожен третій елемен`);

for (let i = 0; i < numbers.length; i++) {
    if(!((i + 1) % 3)) {
        console.log(numbers[i]);
    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('%c%s', styleHeader,
    `3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.`);
for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    if(!((i + 1) % 3) && !(value % 2)) {
        console.log(value);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('%c%s', styleHeader,
    `4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив`);
const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    if(!((i + 1) % 3) && !(value % 2)) {
        newNumbers[newNumbers.length] = value;
    }
}
console.log(newNumbers);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('%c%s', styleHeader,
    `5. Вивести кожен елемент масиву, сусід справа якого є парним
  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56`);
for (let i = 0; i < numbers.length - 1; i++) {
    const value = numbers[i];
    if(!(numbers[i + 1] % 2)) {
        console.log(value);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('%c%s', styleHeader,
    `6. Є масив з числами [100,250,50,168,120,345,188], 
  Які характеризують вартість окремої покупки. Обрахувати середній чек.`);
const sums = [100,250,50,168,120,345,188];
let sum = 0;
for (const value of sums) {
    sum += value;
}
const average = sum / sums.length;
console.log('%c%s', styleNumber, average);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('%c%s', styleHeader,
    `7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.`);

let random1 = [];
let random2 = [];

console.log('%c%s', styleHeader,
    ` - масив з рандомними значеннями`);
let arrStr = '';
for (let i = 0; i < 10; i++) {
    let value = Math.round(1 + Math.random() * 99);
    random1[i] = value;
    arrStr += value + ' ';
}
console.log(arrStr);

console.log('%c%s', styleHeader,
    ` - помножити всі його елементи на 5`);
arrStr = '';
for (let i = 0; i < 10; i++) {
    let value = random1[i] * 5;
    random1[i] = value;
    arrStr += value + ' ';
}
console.log(arrStr);

console.log('%c%s', styleHeader,
    ` - перемістити їх в інший масив`);
for (let i = 0; i < 10; i++) {
    random2[i] = random1[i];
}
console.log(random2);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log('%c%s', styleHeader,
    `8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.`);
const anyValues = ['100',250,true,'168',120,false,188];
const numValues = [];
for (const value of anyValues) {
    if(typeof value === 'number') {
        numValues[numValues.length] = value;
    }
}
console.log(anyValues);
console.log(numValues);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
console.log('%c%s', styleHeader,
    `З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив`);

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (const user of usersWithId) {
    const mergeObject = {};
    for (const key in user) {
        mergeObject[key] = user[key];
    }
    for (const cityValue of citiesWithId) {
        if(cityValue.user_id === user.id) {
            mergeObject.address = cityValue;
            break;
        }
    }
    usersWithCities[usersWithCities.length] = mergeObject;
}
console.log(usersWithId);
console.log(citiesWithId);
console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log('%c%s', styleHeader,
    `- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.`);
const randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray[i] = Math.round(1 + Math.random() * 9);
}
console.log(randomArray);
for (const value of randomArray) {
    if(!(value % 2)) {
        console.log(value);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log('%c%s', styleHeader,
    `- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.`);
const randomArray2 = [], resultArray = [];
for (let i = 0; i < 10; i++) {
    randomArray2[i] = Math.round(1 + Math.random() * 9);
}
for (let i = 0; i < randomArray2.length; i++) {
    resultArray[resultArray.length] = randomArray2[i];
}
console.log(randomArray2);
console.log(resultArray);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log('%c%s', styleHeader,
    `- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.`);
const chars = ['a', 'b', 'c']
let word;

word = '';
for (let i = 0; i < chars.length; i++) {
    word += chars[i];
}
console.log(chars);
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('%c%s', styleHeader,
    `- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.`);
word = '';
i = 0
while (i < chars.length) {
    word += chars[i];
    i++;
}
console.log(chars);
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log('%c%s', styleHeader,
    `- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.`);
word = '';
for (const char of chars) {
    word += char;
}
console.log(chars);
console.log(word);
