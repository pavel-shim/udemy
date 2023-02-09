/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

let num = 50;

while  (num < 55) {
    console.log(num);
    num++;
}

for (let  i = 1; i < 10; i++) {
    if  (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}

let result = '';
const length = 7;

for (let  i = 1; i < length; i++) {
    
    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);


first: for (let i = 0; i < 3; i++) {
    console.log(`first leavel: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second leavel: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;  //выход из цикла когда к = 2
            console.log(`third leavel: ${k}`);
        }
    }
}

//tasks lesson 22

for (let i = 5; i < 11;  i++) {
    console.log(i);
}

for (let i = 20; i > 9;  i--) {
    if  (i === 13) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 11;  i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

while (i < 17) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

const arrayOfNumbers = [];

for (let i = 5; i < 11;  i++) {
    arrayOfNumbers.push(i);
    console.log(arrayOfNumbers);
}

//task 2 lesons 21

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
    console.log(result[i]);
}

console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) == 'number') {
        data[i] = data[i] * 2;
    }
    if (typeof(data[i]) == 'string') {
        data[i] = data[i] + ' - done';
    } 
}


console.log(data);


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let length = data.length - 1;

for (let i = length; i >= 0; i--) {
    result[(length - i)] = data[i];
}
 
console.log(result);

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}

secondTask()


//task 3 lesons 21

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j <  2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)


// lesson 23

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++)   {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//           personalMovieDB.movies[a] = b;  
//     if (a != null && b !=  null && a != '' && b != '' && a.length < 50 ) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//     } else {
//             console.log('error');
//             i--;
//     }  
// } 

// let i = 0; 
//     while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//           personalMovieDB.movies[a] = b;  
//     if (a != null && b !=  null && a != '' && b != '' && a.length < 50 ) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//     } else {
//             console.log('error');
//             i--;
//     }  
//     i++;
// } 

for (let i = 0; i < 2; i++)   {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          personalMovieDB.movies[a] = b;  
    if (a == null || b ==  null || a == '' || b == '' || a.length > 50 ) {
            console.log('error');
            i--;
    } else {
            personalMovieDB.movies[a] = b;
            console.log('done');
    }  
} 

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


console.log(personalMovieDB);


//lesson 25

const logg = "Hello world";

console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px"
console.log(parseInt(test));


//lesson 25
//1.
const usdCurr = 28;
const discount = 0.5;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount)
}

const res = convert(500, usdCurr);
promotion(res);

//2.
function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log("Done");
}

test();


//3. функция всегда что-то возвращает. в данном случе андефайнд
function doNothing() {};
console.log(doNothing() === undefined);

//4. DZ
function sayHello(name) {
  let result = (`Привет, ${name}!`);
  console.log(result);
  return result;
}

sayHello('Alex');

let arr = [];

function sayHello(num) {
  for (let i = 0; i < 3; i++) {
    arr[i] = num - 1;
    num += 1;
  }
  console.log(arr);
}

sayHello(5);


function getMathResult(base, repit) {
  if (typeof(repit) !== 'number' || repit <= 0) {
    return base;
  }

  let result = '';
  
    for (let i = 1; i <= repit; i++) {
      if (i === repit) {
        result = result + `${base * i}`;
      } else {
        result = result + `${base * i}` + "---";
      }
    }
    console.log(result);
    return result; 
}

getMathResult(5, 10);

// lesson 25

const logg = "Hello world";

console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px"
console.log(parseInt(test));

// lesson 29 dz

function calculateVolumeAndArea(a) {

    if (Number.isInteger(a) == false || typeof a != "number" || a < 0) {
        const error = 'При вычислении произошла ошибка';
        console.log(error)
        return error;
    } else {
        const V = a * a * a; 
        const S = 6 * a * a;
        const result = `Объем куба: ${V}, площадь всей поверхности: ${S}`;
        console.log(result)
        return result;
    }
    
}

calculateVolumeAndArea(0);


function getCoupeNumber(a) {

    if (Number.isInteger(a) == false || typeof a != "number" || a < 0) {
        const error = "Ошибка. Проверьте правильность введенного номера места";
        console.log(error);
        return error;
    }  else if (a == 0 || a > 36) {
        const noPlace = "Таких мест в вагоне не существует";
        console.log(noPlace);
        return noPlace;
    }  else {
        const result = Math.ceil(a / 4);
        console.log(result);
        return result;
    } 

}

getCoupeNumber(0);

//dz lesson 29 результат учителя

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

