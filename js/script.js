'use strict';

/* Задание на урок:


// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

console.log(numberOfFilms);


// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDb);


3) Задайте пользователю по два раза вопроса:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

4) Потренироваться и переписать цикл еще двумя способами*/


// 1).

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// let personalMovieDb = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// 2).

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = +prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('Отлично');
//     } else {
//         console.log("Ошибка при вводе");
//         i--;
//     }
// }

// console.log(personalMovieDb);


// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// if (personalMovieDb.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDb.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }


// Урок 14. Циклы

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }


// const num = '50';

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }


// (num === 50) ? console.log('Ok') : console.log('Error');

// switch (num) {
//     case '49':
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('В точку!');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)

// for (let i = 0; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// Задачки для см. раб

// Задача. Выведите столбец чисел от 1 до 50.

// let i = 1;

// while (i <= 50) {
//     console.log(i + '<br>');
//     i++;
// }

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// let mas = [1, 2, 3, 4, 5];
// for (let i = 0; i < mas.length; i++) {
//     console.log(mas[i]);
// }

// Задача. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.

// let result = 1;

// let mas = [2, 3, 4, 5];

// for (let i = 0; i < mas.length; i++) {
//     result = result * mas[i];
//     console.log(result);
// }

// Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

// let obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// };

// for (let key in obj) {
//     console.log(key);
// }

// for (let key in obj) {
//     console.log(obj[key]);
// }

// for (let key in obj) {
//     console.log(key + ' - это ' + obj[key] + '.');
// }

// Выведите столбец чисел от 1 до 100.

// let i = 1;

// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }


// Выведите столбец чисел от 11 до 33.

// let i = 11;

// while (i <= 33) {
//     alert(i + '<br>');
//     i++;
// }

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }


// Выведите столбец четных чисел в промежутке от 0 до 100.

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// С помощью цикла найдите сумму чисел от 1 до 100.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
//     console.log(sum);
// }
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage("Hello world!");
// console.log(num);

// // function calc(a, b) {
// //     return (a + b);
// // }

// // console.log(calc(4, 3));
// // console.log(calc(11, 9));
// // console.log(calc(77, 19));

// function ret() {
//     let num = 50;

//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function () {
//     console.log("Hello!");
// };

// logger();

// const calc = (a, b) => a + b;

// const logg = "Hello world is my";

// console.log(logg.slice(5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// 18. Практика, ч3.Используем функции.

// 1) Первую часть задания повторить по уроку

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// let personalMovieDb = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = +prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDb.movies[a] = b;
//             console.log('Отлично');
//         } else {
//             console.log("Ошибка при вводе");
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDb.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDb.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();


// // 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// // false - выводит в консоль главный объект программы

// function showMyDB(hiden) {
//     if (!hiden) {
//         console.log(personalMovieDb);
//     }
// }

// showMyDB(personalMovieDb.privat);

// // 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// // "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// // genres

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDb.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();

// ***********************************************
// 19. Callback - функции

// function learnJS(lang, Callback) {
//     console.log(`Я учу: ${lang}`);
// }

// function done() {
//     console.log('Я прошёл этот урок!');
// }

// learnJS('Javascript', done); 

// ***********************************************

// 20. Объекты, декструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(Object.keys(options).length);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }    
// }

// console.log(counter);