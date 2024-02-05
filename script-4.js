// Задание 1
function getMin (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(getMin(2, 1));
console.log(getMin(3, 8));

// Задание 2
function parityNumber (num) {
    if (num % 2 === 0) {
        return "Число четное"
    } else {
        return "Число нечетное"
    }
}

console.log(parityNumber(13));

// Задание 3
function printSquare (num) {
    console.log (num * num);
}

function getSquare (num) {
    return num * num;
}

// Задание 4 
function helloUser() {
    let age = prompt("Сколько Вам лет?");

    if (age < 0) {
        alert('Вы ввели неверное значение')
    } else if (age > 0 && age <= 12) {
        alert ('Привет, друг')
    } else {
        alert ('Добро пожаловать')
    }
}

// Задание 5
function multiplyNumbers(a, b) {
    let aNumber = Number(a);
    let bNumber = Number(b);

    if (isNaN(aNumber) || isNaN(bNumber)) {
        return "Одно или оба значения не являются числом";
    } else {
        return a * b;
    }
}

console.log (multiplyNumbers(4, 5));
console.log (multiplyNumbers('Я, не я'));

// Задание 6
function cubeNumber() {
    let num = prompt("Введите число");
    num = Number(num);
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
}

// Задание 7
function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea,
    getPerimeter,
};

const circle2 = {
    radius: 10,
    getArea,
    getPerimeter,
};

console.log(circle2.getArea());

// Задание 8
function seasons() {
    let num = +prompt('Введите номер месяца');
    if (num === 1 || num === 2 || num === 12) {
        alert('Это зимний месяц');
    } else if (num === 3 || num === 4 || num === 5) {
        alert('Это весенний месяц');
    } else if (num === 6 || num === 7 || num === 8) {
        alert('Это летний месяц');
    } else if (num === 9 || num === 10 || num === 11) {
        alert('Это осенний месяц');
    } else {
        alert('Вы ввели некорректное значение');
    }
}