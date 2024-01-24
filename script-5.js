// Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break
    }
}

// Задание 2
const arr1 = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));

// Задание 2: Вариант 2
const arr2 = [1, 5, 4, 10, 0, 3];
let res;
arr.forEach((el, i) => {
    if (el === 4) res = i;
})
console.log(res);

// Задание 3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

// Задание 4
const arr4 = [];
for (i = 0; i < 3; i++) {
    const nestArr = [];
    for (k = 0; k < 3; k++) {
        nestArr.push(1);
    }
    arr.push(nestArr);
}
console.log(arr);

// Задание 5
const arr5 = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];
const result = arr.filter((el) => typeof el === 'number');
let arrNumbs = result.sort();
console.log(arrNumbs);

// Задание 7
const arr7 = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Угадайте число'));
console.log(userAnswer);
if (isNaN(userAnswer)) {
    console.log('nan')
} else if (arr.includes(userAnswer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
const str = 'abcdef';
const reverseStr = str.split('').reverse().join('');
console.log(reverseStr);

// Задание 9
const arr9 = [[1, 2, 3,], [4, 5, 6]];
const flatArr = arr.flat();
console.log(flatArr);

// Задание 10
let arr10 = [9, 8, 7, 6, 5, 123];
for (let i = 0; i < arr10.length - 1; i++) {
    let sumArr10 = arr10[i] + arr10[i + 1];
    console.log(`Сумма текущего элемента равна ${arr10[i]} и следуещего эелемента
${arr10[i + 1]} = ${sumArr10}`);
}

// Задание 11
function getSquare(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** 2);
    }
    return result;
}

console.log(getSquare([9, 14, 21]));

let result11 = [9, 8, 7, 6, 5];
function powArr(nums) {
    return nums.map(num => num ** 2);
}
console.log(powArr(result));

// Задание 12
function stringLength(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].length);
    }
    console.log(result);
}
stringLength(['space', 'sun', 'quazar']);

let words = ['ждать', 'здесь', 'спать', 'очень хочу', '-'];

function getLengthWords(words) {
    return words.map(word => word.length);
}
console.log(getLengthWords(words));

// Задание 13
function filterPositive(array) {
    return array.filter(num => num < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

function filterPositive(array) {
    const negativeNumbers = array.filter(item => item < 0);
    console.log(negativeNumbers2);
}
filterPositive()
const currentDate = new Date();
const options = { year: 'numeric', weekday: 'long', month: 'long', day: 'numeric' };
console.log(currentDate.toLocaleDateString('ru-RU', options).split(',').reverse().join(', '));
