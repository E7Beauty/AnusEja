// // есть n человек, необходимо распределить: кто кому дарит подарки
// // Нельзя дарить подарок самому себе

// function getRandomInt(max) { // при max = 3, результат одно из: 0,1,2
//     return Math.floor(Math.random() * max); // округляем число вниз и возвращаем полученное случайное число
// }

// function getLength (massiv) { // в этой программе из массивов удалять элементы я не буду, вместо этого буду заменять их значения на 0, а эта функция будет возвращать длину массива без "нулей".
//     let a=0;
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] != 0) {
//             ++a;
//         }
//     }
//     return a;
// }

// function checkPairsEqual (i, rNumber) { // сравнивает два элемента массива, если они равно, то возвращает false (ты не можешь дарить подарки сам себе)
//      if (givers[i] != receivers[rNumber]) {
//         return true;
//     }
//     return false;
// }

// function checkElemNotZero (rNumber) { //т.к. из массива не удаляются элементы а становятся равны нулю, мы проверим, что случайный элемент из массива получателей не равен нулю
//     if (receivers[rNumber] != 0) {
//         return true;
//     }
//     return false;
// }

// function writePairs (i, rNumber) { //записывает в документ пары, при этом элементы, которые были использованы, становятся равны нулю
//     pair[0] = givers [i];
//     pair[1] = receivers [rNumber];
//     document.write(i+1, '-я пара = ', pair, '<br \/>');
//     givers [i] = 0;
//     receivers [rNumber] = 0;
// }

// function checkTwoNumbersLeft () { // делает проверку, осталось ли всего 2 числа в обоих массивах (эта проверка нужна, чтобы не было ситуации, когда остается 1 пара одинаковых чисел(человек) и ничего уже нельзя исправить)...
//     if (getLength(givers) == 2) { 
//         return true;
//     }
//     return false;
// }

// function getLastTwoPairs () { // возвращает значение последних двух чисел из массива receivers
//     let a = 0;
//     let b = 0;
//     // document.write(givers, '- givers','<br \/>');
//     // document.write(receivers, '- recevies','<br \/>');
//     receivers.forEach(function(item, index) {
//         if (item != 0) {
//             if ( b == 0 && a != 0) {
//                 b = item; // второе значение из массива ( по порядку)
//             } 
//             if ( a == 0 ) {
//                 a = item; //первое значение из массива (и последнее)
//             }           
//         }
//     });
//     calcLastTwoNumbers (a, b);
// }

// function calcLastTwoNumbers (x, y) { // собственно делает проверку, к примеру, если остались следующие числа в массивах: 9 10 и 9 10, в данном случае важно не сделать пару 9 9, а именно 9 10, эта функция делает именно это
//     if ( x == n - 1 || y == n) { 
//         writePairs (n - 2, y - 1); // здесь пишем везде -1, т.к. работали с индексами, а у нас индекс = значение элемента - 1
//         writePairs (n - 1, x - 1);
//     } else {
//         writePairs (n - 2, x - 1);
//         writePairs (n - 1, y - 1);
//     }
// }

// let rNumber = -1;
// let pair = []; //массив для вывода пар
// let givers = []; //массив для людей, которые дарят поадрки (1-ое число в паре)
// let receivers =[]; //массив получающих подарки (2-ое число в паре)

// let n = +prompt('Введите количество человек (больше 2): ',5); // получаем количество человек
// document.write('Количество человек = ', n, '<br \/>');

// for (let i = 0; i < n; i++) { //заполняем массив "номерами" всех участников: от 1 до n
//     givers [i] = i+1;
//     receivers [i] = i+1;
// }

// for (i = 0; i < n; i++) {
//     rNumber = getRandomInt(n); //получаем случ. число(номер получателя) для ДАННОЙ итерации
//     while (!(checkPairsEqual(i, rNumber) && checkElemNotZero (rNumber))) { // если элемент != 0(у нас это = удаленный элемент) и два числа (пара)не равны между собой, идем далее, иначе - заново генерируем число
//         rNumber = getRandomInt(n);
//     }
//     writePairs(i, rNumber); 
//     if (checkTwoNumbersLeft ()) {
//         break; // выходим из цикла если осталось всего 2 возможные пары
//     }
// }

// getLastTwoPairs ();


// Начнём с удаления:
// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
// alert( arr ); // осталось ["Я", "JavaScript"]

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");
// alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 2 первых элемента
// let removed = arr.splice(0, 2);
// alert( removed ); // "Я", "изучаю" <-- массив из удалённых элементов

// let arr = ["Я", "изучаю", "JavaScript"];
// // с позиции 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");
// alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

// let arr = [1, 2, 5];
// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(-1, 0, 3, 4);
// alert( arr ); // 1,2,3,4,5

// //ЕСТЬ также slice([start],[end]) возвращает новый массив, в который копирует элементы,
//  //начиная с индекса start и до end (не включая end). 
//  //Оба индекса start и end могут быть отрицательными. 
//  //В таком случае отсчёт будет осуществляться с конца массива.
// let arr = ["t", "e", "s", "t"];
// alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
// alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)
// //ЕСТЬ concat
// let arr = [1, 2];
// // создать массив из: arr и [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4

// // создать массив из: arr и [3,4] и [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// //forEach
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} имеет позицию ${index} в ${array}`);
// });

// // Методы arr.indexOf, arr.lastIndexOf и arr.includes имеют одинаковый синтаксис 
// // и делают по сути то же самое, что и их строковые аналоги, 
// // но работают с элементами вместо символов:

// // arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, 
// // на котором был найден искомый элемент, в противном случае -1.
// // arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// // arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, 
// // если поиск успешен.

// let arr = [1, 0, false];
// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1
// alert( arr.includes(1) ); // true

// n people are participating in Sacret Santa, program needs to distribute them in pairs so that:
// one person cannot give a gift to himself, one person receives ONE gift and gives ONE gift;

let getRandomInt = (max) => { //if max == 3, then possible results are: 0,1,2
  return Math.floor(Math.random() * max); 
}

let showPairs = (first, second) => { 
   console.log(givers[first], recipients[second]);
}

const n = +prompt('Enter number of people participating in Secret Santa', 5);
let givers = [];
let recipients = [];
let randomNumber = 0;

for (let i = 0; i < n; i++) { 
  givers.push(i + 1);
  recipients.push(i + 1);
}

for (i = 0; i < (n - 2) ; i++) {
  randomNumber = getRandomInt(recipients.length);
  while ( recipients[randomNumber] == givers[i] ) { 
    randomNumber = getRandomInt(recipients.length); 
  }
  showPairs(i, randomNumber);
  recipients.splice(randomNumber, 1); 
}

if ( givers[i] != recipients[1] ) { //calculating two last pairs
  showPairs(i, 1);
  showPairs(i + 1, 0);
} else {
  showPairs(i, 0);
  showPairs(i + 1, 1);
}



