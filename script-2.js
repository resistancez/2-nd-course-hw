// Homework 2.3

// Задание 1
let password = 'пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    alert('пароль введён верно');
} else {
    alert('Пароль введён неправильно');
}

// Задание 2
let c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
let d = 101;
let e = 50;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12;

switch(monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');       
        break;
    case 9:
    case 10:
    case 11:
        alert('Зима');
        break;
    default:
        alert('Неизвестный месяц');
}