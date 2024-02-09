// Задание 1
let str = 'sfjfkl';
console.log(str.toLocaleUpperCase());

// Задание 2
function stringsFilter(arr, str) {
return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase())); 
}

console.log(stringsFilter(['кошка', 'Кит', 'Комар', 'Носорог'], 'Ко'));
console.log(stringsFilter(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(stringsFilter(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3
let number = 32.58884;
// 1)
console.log(Math.floor(number));
// 2)
console.log(Math.ceil(number));
// 3)
let floorNumber = Math.round(number);
console.log(floorNumber);

// Задание 4
const nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));

// Задание 5
function getRandomNumber() {
let randomNumber = Math.round((Math.random() * 10));
console.log(randomNumber);
}

getRandomNumber();

// Задание 6
function getRandomArrNumbers(num) {
const result = [];
for (let i = 0; i < Math.floor(num / 2); i++) {
  result.push(Math.round(Math.random() * num))
}
return result;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7
function getRandomNumber(min, max) {
   let randomNumber = Math.round((Math.random() * (max - min)) + min); 
   console.log(randomNumber);
}

getRandomNumber(123, 543);

// Задание 8
console.log(new Date());

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
function formatedDateAndTime(inputDate) {
const daysOfWeeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const dayOfTheWeek = daysOfWeeks[inputDate.getDay()];

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const month = months[inputDate.getMonth()];


const year = inputDate.getFullYear();
const day = inputDate.getDate();
const hours = inputDate.getHours();
const minutes = inputDate.getMinutes();
const seconds = inputDate.getSeconds();

const formatedDate = `Дата: ${day} ${month} ${year} - это ${dayOfTheWeek}`;
const formatedTime = `Время: ${hours}:${minutes}:${seconds}`;

return `${formatedDate}\n${formatedTime}`;
}

console.log(formatedDateAndTime(new Date()));

// Задание 11
function rememberWords() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruit = fruits.sort(() => Math.random() - 0.5); // либо отриц, либо положительное 
    alert(fruit.join(' '));
    
    let oneQuestion = prompt('Чему равнялся первый элемент массива?');
    
    if (oneQuestion === null) {    
        alert ('Вы отменили ввод');
        return;
    }
     
    let twoQuestion = prompt('Чему равнялся последний элемент массива?');
    
    if (twoQuestion === null) {    
      alert ('Вы отменили ввод');
      return;
    }
    
    if (!oneQuestion.trim() || !twoQuestion.trim()) {
      alert ('Строка пустая или состоит только из пробелов');
      return;
    }
    
    if (oneQuestion === fruits[0] && twoQuestion === fruits[fruits.length - 1]) {
        alert("Поздравляем! Вы угадали оба слова.");
    } else if (oneQuestion === fruits[0] || twoQuestion === fruits[fruits.length - 1]) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы не угадали ни одного слова.");
    }
  } 