function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    if (num2 === '0') {
        alert('Division by zero not allowed!');
        reset();
    } else {
        return +num1 / +num2;
    }
}

let num1 = '';
let operator;
let num2 = '';
let beforeOperator = true;
let resultDisplayed = false;

function operate() {
    if (num2 === '') return num1;
    
    let result = num1;
    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === 'x') {
        result = multiply(num1, num2);
    } else if (operator === '÷') {
        result = divide(num1, num2);
    }

    return result;
}

const display = document.querySelector('.display p');
const digits = document.querySelectorAll('.digit');
digits.forEach(element => element.addEventListener('click', () => {
    if (resultDisplayed) {
        resultDisplayed = false;
        reset();
    }
    if (beforeOperator) {
        display.textContent += element.textContent;
        num1 += element.textContent;
    } else {
        if (num2 === '') {
            display.textContent = element.textContent;
        } else {
            display.textContent += element.textContent;
        }
        num2 += element.textContent;
    }
}));

const operators = document.querySelectorAll('.operator');
operators.forEach(element => element.addEventListener('click', () => {
    if (num2 !== '') {
        equal.dispatchEvent(new Event('click'));
    }
    beforeOperator = false;
    operator = element.textContent;
}));

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    display.textContent = num1 = operate();
    beforeOperator = true;
    num2 = '';
    resultDisplayed = true;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => reset());

function reset() {
    num1 = '';
    operator;
    num2 = '';
    beforeOperator = true;
    display.textContent = '';
}