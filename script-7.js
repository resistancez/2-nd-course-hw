// Homework 2.8

// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2
function isPositive(num) {
    return num >= 0;
}

function isMale(human) {
    return human.gender === "male";
}

function filter(arr, ruleFunction) {
    const output = [];

    for (i = 0; i < arr.length; i++) {
        if (ruleFunction && ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleFilter = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleFilter, isMale));

// Задание 3
let cat = setInterval(() => console.log(new Date()), 3000);

setTimeout(() => {
    clearInterval(cat);
    console.log('30 секунд прошло');
}, 30000);


const timeNow = (second) => {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log(`${second} секунд прошло!`)
    }, second * 1000)
};

timeNow(30);

// Задание 4
function delayForSecond(callback) {
    callback();
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

function delayForSecond(callback) {
    setTimeout(callback, 1000)
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// Задание 5
function delayForSeconds(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSeconds(() => sayHi('Глеб'));