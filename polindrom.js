//введеное слово полиндром или нет?
let slovo = prompt('Введите слово без пробелов маленькими буквами','шалаш');
let slovoArr = [];

for (let i = 0; i < slovo.length; i++) { // заполняем массив буквами из введеного слова
    slovoArr [i] = slovo [i];
}

let arrLength = slovoArr.length; //запомниаем количество букв в слове
let y = 0; //счетчик совпадающих букв
let n = Math.floor(slovoArr.length / 2);//разделим кол-во букв на 2 и округлим вниз (на случай нечетного кол-ва букв)

for (i = 0; i < n; i++) {
    if (slovoArr[i] == slovoArr[arrLength - i - 1]) { //сравниваем буквы с начала и с конца
        ++y; // если буквы совпали записываем это число
    }
}

if (y == n) { // сравниваем количество совпадающих букв с разных сторон слова с количеством букв до середины слова (они должны быть равны в полиндромах)
    document.write('Слово "', slovo, '" является полиндромом!', '<br \/>');
} else {
    document.write('Слово "', slovo, '" НЕ является полиндромом!', '<br \/>');
}