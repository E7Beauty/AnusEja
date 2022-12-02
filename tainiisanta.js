// есть n человек, необходимо распределить: кто кому дарит подарки
// Нельзя дарить подарок самому себе

function getRandomInt(max) { // при max = 3, результат одно из: 0,1,2
    return Math.floor(Math.random() * max); // округляем число вниз и возвращаем полученное случайное число
}

function getLength (massiv) { // в этой программе из массивов удалять элементы я не буду, вместо этого буду заменять их значения на 0, а эта функция будет возвращать длину массива без "нулей".
    let a=0;
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] != 0) {
            ++a;
        }
    }
    return a;
}

function checkPairsEqual (i, rNumber) { // сравнивает два элемента массива, если они равно, то возвращает false (ты не можешь дарить подарки сам себе)
     if (givers[i] != receivers[rNumber]) {
        return true;
    }
    return false;
}

function checkElemNotZero (rNumber) { //т.к. из массива не удаляются элементы а становятся равны нулю, мы проверим, что случайный элемент из массива получателей не равен нулю
    if (receivers[rNumber] != 0) {
        return true;
    }
    return false;
}

function writePairs (i, rNumber) { //записывает в документ пары, при этом элементы, которые были использованы, становятся равны нулю
    pair[0] = givers [i];
    pair[1] = receivers [rNumber];
    document.write(i+1, '-я пара = ', pair, '<br \/>');
    givers [i] = 0;
    receivers [rNumber] = 0;
}

function checkTwoNumbersLeft () { // делает проверку, осталось ли всего 2 числа в обоих массивах (эта проверка нужна, чтобы не было ситуации, когда остается 1 пара одинаковых чисел(человек) и ничего уже нельзя исправить)...
    if (getLength(givers) == 2) { 
        return true;
    }
    return false;
}

function getLastTwoPairs () { // возвращает значение последних двух чисел из массива receivers
    let a = 0;
    let b = 0;
    // document.write(givers, '- givers','<br \/>');
    // document.write(receivers, '- recevies','<br \/>');
    receivers.forEach(function(item, index) {
        if (item != 0) {
            if ( b == 0 && a != 0) {
                b = item; // второе значение из массива ( по порядку)
            } 
            if ( a == 0 ) {
                a = item; //первое значение из массива (и последнее)
            }           
        }
    });
    calcLastTwoNumbers (a, b);
}

function calcLastTwoNumbers (x, y) { // собственно делает проверку, к примеру, если остались следующие числа в массивах: 9 10 и 9 10, в данном случае важно не сделать пару 9 9, а именно 9 10, эта функция делает именно это
    if ( x == n - 1 || y == n) { 
        writePairs (n - 2, y - 1); // здесь пишем везде -1, т.к. работали с индексами, а у нас индекс = значение элемента - 1
        writePairs (n - 1, x - 1);
    } else {
        writePairs (n - 2, x - 1);
        writePairs (n - 1, y - 1);
    }
}

let rNumber = -1;
let pair = []; //массив для вывода пар
let givers = []; //массив для людей, которые дарят поадрки (1-ое число в паре)
let receivers =[]; //массив получающих подарки (2-ое число в паре)

let n = +prompt('Введите количество человек (больше 2): ',5); // получаем количество человек
document.write('Количество человек = ', n, '<br \/>');

for (let i = 0; i < n; i++) { //заполняем массив "номерами" всех участников: от 1 до n
    givers [i] = i+1;
    receivers [i] = i+1;
}

for (i = 0; i < n; i++) {
    rNumber = getRandomInt(n); //получаем случ. число(номер получателя) для ДАННОЙ итерации
    while (!(checkPairsEqual(i, rNumber) && checkElemNotZero (rNumber))) { // если элемент != 0(у нас это = удаленный элемент) и два числа (пара)не равны между собой, идем далее, иначе - заново генерируем число
        rNumber = getRandomInt(n);
    }
    writePairs(i, rNumber); 
    if (checkTwoNumbersLeft ()) {
        break; // выходим из цикла если осталось всего 2 возможные пары
    }
}

getLastTwoPairs ();






