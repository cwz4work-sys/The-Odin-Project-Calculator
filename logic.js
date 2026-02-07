function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1 = '';
let operator;
let num2 = '';
let beforeOperator = true;

function operate(num1, operator, num2) {
    const result = 0;
    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    }

    return result;
}

const display = document.querySelector('.display p');
const digits = document.querySelectorAll('.digit');
digits.forEach((element) => element.addEventListener('click', () => {
    display.textContent += element.textContent;
    if (beforeOperator) {
        num1 += element.textContent;
    } else {
        num2 += element.textContent;
    }
}));