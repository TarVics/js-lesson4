// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styleBoolean = 'color: mediumpurple;';
const styleHeader = 'border-left: 4px solid green; padding-left: 10px; display: block; white-space: pre-wrap;';
const styleNone = 'color: none;';
const styleNumber = 'color: cornflowerblue;';
const styleString = 'color: hotpink;';
const headerBegin = `<p style="${styleHeader}">`, headerEnd = '</p>';
const htmlBoolean = `<span style="${styleBoolean}">`;
const htmlNumber = `<span style="${styleNumber}">`;
const htmlString = `<span style="${styleString}">`;
const htmlEOL = '</span><br>';
/*******************************************************/

// -створити масив з:
// - та вивести його в консоль
// - з 5 числових значень

console.log('%c%s', styleHeader,
    `-створити масив та вивести його в консоль`);

console.log('%c%s', styleHeader,
    `- з 5 числових значень`);
const numArr = [1,2,3,4,5];
console.log(numArr);
// - з 5 стічкових значень
console.log('%c%s', styleHeader,
    `- з 5 стічкових значень`);
const strArr = ['1','2','3','4','5'];
console.log(strArr);
// - з 5 значень стрічкового, числового та булевого типу
console.log('%c%s', styleHeader,
    `- з 5 значень стрічкового, числового та булевого типу`);
const anyArr = ['1','2',3,4,true];
console.log(anyArr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
console.log('%c%s', styleHeader,
    `-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль`);
const idxArray = [];
idxArray[0] = '1';
idxArray[1] = '2';
idxArray[2] = 3;
idxArray[3] = 4;
idxArray[4] = true;
console.log(idxArray);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
console.log('%c%s', styleHeader,
    `- є масив [2,17,13,6,22,31,45,66,100,-18]`);

let arrCycle = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
console.log('%c%s', styleHeader,
    `1. перебрати його циклом while`);
let i;
i = 0;
while (i < arrCycle.length) {
    console.log(arrCycle[i]);
    i++;
}
// 2. перебрати його циклом for
console.log('%c%s', styleHeader,
    `2. перебрати його циклом for`);
for (let i = 0; i < arrCycle.length; i++) {
    console.log(arrCycle[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('%c%s', styleHeader,
    `3. перебрати циклом while та вивести  числа тільки з непарним індексом`);
i = 0;
while (i < arrCycle.length) {
    if(i % 2) {
        console.log(arrCycle[i]);
    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('%c%s', styleHeader,
    `4. перебрати циклом for та вивести  числа тільки з непарним індексом`);
for (let i = 0; i < arrCycle.length; i++) {
    if(i % 2) {
        console.log(arrCycle[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('%c%s', styleHeader,
    `5. перебрати циклом while та вивести  числа тільки парні  значення`);
i = 0;
while (i < arrCycle.length) {
    let value = arrCycle[i];
    if(!(value % 2)) {
        console.log(value);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('%c%s', styleHeader,
    `6. перебрати циклом for та вивести  числа тільки парні  значення`);
for (let i = 0; i < arrCycle.length; i++) {
    let value = arrCycle[i];
    if(!(value % 2)) {
        console.log(value);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log('%c%s', styleHeader,
    `7. замінити кожне число кратне 3 на слово "okten"`);
for (let i = 0; i < arrCycle.length; i++) {
    if(!(arrCycle[i] % 3)) {
        arrCycle[i] = "okten";
    }
    console.log(arrCycle[i]);
}
// 8. вивести масив в зворотньому порядку.
console.log('%c%s', styleHeader,
    `8. вивести масив в зворотньому порядку.`);
for (let i = arrCycle.length - 1; i >= 0; i--) {
    const item = arrCycle[i];
    console.log(arrCycle[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log('%c%s', styleHeader,
    `9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)`);

arrCycle = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while [ЗВОРОТНІЙ ПОРЯДОК]
console.log('%c%s', styleHeader,
    `1. перебрати його циклом while [ЗВОРОТНІЙ ПОРЯДОК]`);
i = arrCycle.length - 1;
while (i >= 0) {
    console.log(arrCycle[i]);
    i--;
}
// 2. перебрати його циклом for [ЗВОРОТНІЙ ПОРЯДОК]
console.log('%c%s', styleHeader,
    `2. перебрати його циклом for [ЗВОРОТНІЙ ПОРЯДОК]`);
for (let i = arrCycle.length - 1; i >= 0; i--) {
    console.log(arrCycle[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом [ЗВОРОТНІЙ ПОРЯДОК]
console.log('%c%s', styleHeader,
    `3. перебрати циклом while та вивести  числа тільки з непарним індексом [ЗВОРОТНІЙ ПОРЯДОК]`);
i = arrCycle.length - 1;
while (i >= 0) {
    if(i % 2) {
        console.log(arrCycle[i]);
    }
    i--;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом [ЗВОРОТНІЙ ПОРЯДОК]
console.log('%c%s', styleHeader,
    `4. перебрати циклом for та вивести  числа тільки з непарним індексом [ЗВОРОТНІЙ ПОРЯДОК]`);
for (let i = arrCycle.length - 1; i >= 0; i--) {
    if(i % 2) {
        console.log(arrCycle[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення [ЗВОРОТНІЙ ПОРЯДОК]
console.log('%c%s', styleHeader,
    `5. перебрати циклом while та вивести  числа тільки парні  значення [ЗВОРОТНІЙ ПОРЯДОК]`);
i = arrCycle.length - 1;
while (i >= 0) {
    let value = arrCycle[i];
    if(!(value % 2)) {
        console.log(value);
    }
    i--;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення [ЗВОРОТНІЙ ПОРЯДОК]
console.log('%c%s', styleHeader,
    `6. перебрати циклом for та вивести  числа тільки парні  значення [ЗВОРОТНІЙ ПОРЯДОК]`);
for (let i = arrCycle.length - 1; i >= 0; i--) {
    let value = arrCycle[i];
    if(!(value % 2)) {
        console.log(value);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten" [ЗВОРОТНІЙ ПОРЯДОК]
console.log('%c%s', styleHeader,
    `7. замінити кожне число кратне 3 на слово "okten" [ЗВОРОТНІЙ ПОРЯДОК]`);
for (let i = arrCycle.length - 1; i >= 0; i--) {
    if(arrCycle[i] % 3 === 0) {
        arrCycle[i] = "okten";
    }
    console.log(arrCycle[i]);
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('%c%s', styleHeader,
    `- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.`);
const arrNum = [1,2,3,4,5,6,7,8,9,10];
for (const value of arrNum) {
    console.log(value);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('%c%s', styleHeader,
    `- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.`);
const arrStr = ['1','2','3','4','5','6','7','8','9','10'];
for (const value of arrStr) {
    console.log(value);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('%c%s', styleHeader,
    `- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.`);
const arrAny = ['1','2','3',4,5,6,false,true,[], {name: 'object'}];
for (const value of arrAny) {
    console.log(value);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log('%c%s', styleHeader,
    `- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи`);
const arrAny0 = [1,2,3,'4','5','6',false,true,false,true];
for (const value of arrAny0) {
    if(typeof value === 'boolean') {
        console.log(value);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log('%c%s', styleHeader,
    `- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи`);
const arrAny1 = [1,2,3,'4','5','6',false,true,false,true];
for (const value of arrAny1) {
    if(typeof value === 'number') {
        console.log(value);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('%c%s', styleHeader,
    `- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи`);
const arrAny2 = [1,2,3,'4','5','6',false,true,false,true];
for (const value of arrAny2) {
    if(typeof value === 'string') {
        console.log(value);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
document.write(headerBegin, `- Створити порожній масив. Наповнити його 10 елементами (різними за типами) 
через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.`, headerEnd);
console.log('%c%s', styleHeader,
  `- Створити порожній масив. Наповнити його 10 елементами (різними за типами) 
  через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.`);

const arrAny3 = [1,2,3,'4','5','6',false,true,34.2,'end'];
for (let i = 0; i < arrAny3.length; i++) {
    console.log(arrAny3[i]);
    document.write(htmlNumber + arrAny3[i], htmlEOL);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(headerBegin, `- Створити цикл for на 10  ітерацій з кроком 1. 
  Вивести поточний номер кроку через console.log та document.write`, headerEnd);
console.log('%c%s', styleHeader,
    `- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write`);
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(htmlNumber + i, htmlEOL);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(headerBegin, `- Створити цикл for на 100 ітерацій з кроком 1. 
  Вивести поточний номер кроку через console.log та document.write`, headerEnd);
console.log('%c%s', styleHeader,
    `- Створити цикл for на 100 ітерацій з кроком 1. 
  Вивести поточний номер кроку через console.log та document.write`);
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(htmlNumber + i, htmlEOL);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write(headerBegin, `- Створити цикл for на 100 ітерацій з кроком 2. 
  Вивести поточний номер кроку через console.log та document.write`, headerEnd);
console.log('%c%s', styleHeader,
    `- Створити цикл for на 100 ітерацій з кроком 2. 
  Вивести поточний номер кроку через console.log та document.write`);
for (let i = 0; i < 200; i += 2) {
    let stepNo = 1 + (i >> 1);
    console.log(stepNo);
    document.write(htmlNumber + stepNo, htmlEOL);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write(headerBegin, `- Створити цикл for на 100 ітерацій. 
  Вивести тільки парні кроки. через console.log + document.write`, headerEnd);
console.log('%c%s', styleHeader,
    `- Створити цикл for на 100 ітерацій. 
  Вивести тільки парні кроки. через console.log + document.write`);
for (let i = 1; i <= 100; i++) {
    if(i % 2 === 0){
        console.log(i);
        document.write(htmlNumber + i, htmlEOL);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write(headerBegin, `- Створити цикл for на 100 ітерацій. 
  Вивести тільки непарні кроки. через console.log + document.write`, headerEnd);
console.log('%c%s', styleHeader,
    `- Створити цикл for на 100 ітерацій. 
  Вивести тільки непарні кроки. через console.log + document.write`);
for (let i = 1; i <= 100; i++) {
    if(i % 2){
        console.log(i);
        document.write(htmlNumber + i, htmlEOL);
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
console.log('%c%s', styleHeader,
    `стоврити масив книжок (назва, кількість сторінок, автори , жанри).`);

const books = [
    {
        title: 'Назва книги 1',
        pages: 123,
        authors: ['Автор 1', 'Автор 2', 'Автор 3'],
        genres: ['Жанр 1', 'Жанр 2', 'Жанр 3']
    },
    {
        title: 'Назва книги 2 найдовша',
        pages: 436,
        authors: ['Автор 4', 'Автор 5'],
        genres: ['Жанр 4']
    },
    {
        title: 'Назва книги 3',
        pages: 202,
        authors: ['Автор 6'],
        genres: ['Жанр 5', 'Жанр 6']
    }
];
console.log(books);

// -знайти наібльшу книжку.
console.log('%c%s', styleHeader,
    `-знайти наібльшу книжку.`);
let bookPages = books[0].pages;
for (let i = 1; i < books.length; i++) {
    const current = books[i];
    if(current.pages > bookPages) {
        bookPages = current.pages;
    }
}
for (let i = 0; i < books.length; i++) {
    const current = books[i];
    if(current.pages === bookPages) {
        console.log(current);
    }
}
// - знайти книжку/ки з найбільшою кількістю жанрів
console.log('%c%s', styleHeader,
    `- знайти книжку/ки з найбільшою кількістю жанрів`);
let genresLength = books[0].genres.length;
for (let i = 1; i < books.length; i++) {
    const current = books[i];
    if(current.genres.length > genresLength) {
        genresLength = current.genres.length;
    }
}
for (let i = 0; i < books.length; i++) {
    const current = books[i];
    if(current.genres.length === genresLength) {
        console.log(current);
    }
}
// - знайти книжку/ки з найдовшою назвою
console.log('%c%s', styleHeader,
    `- знайти книжку/ки з найдовшою назвою`);
let titleLen = books[0].title.length;
for (let i = 1; i < books.length; i++) {
    const current = books[i];
    if(current.title.length > titleLen) {
        titleLen = current.title.length;
    }
}
for (let i = 0; i < books.length; i++) {
    const current = books[i];
    if(current.title.length === titleLen) {
        console.log(current);
    }
}
// - знайти книжку/ки які писали 2 автори
console.log('%c%s', styleHeader,
    `- знайти книжку/ки які писали 2 автори`);
for (let i = 0; i < books.length; i++) {
    const current = books[i];
    if(current.authors.length === 2) {
        console.log(current);
    }
}
// - знайти книжку/ки які писав 1 автор
console.log('%c%s', styleHeader,
    `- знайти книжку/ки які писав 1 автор`);
for (let i = 0; i < books.length; i++) {
    const current = books[i];
    if(current.authors.length === 1) {
        console.log(current);
    }
}

