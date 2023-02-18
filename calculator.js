function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number3, number4){
    return (number3 / number4);
}

function operate(operator, number1, number2){
    switch (operator){
        case "+":
            return add(number1,number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
}
}


console.log(operate("+", 10, 20));
console.log(operate("-", 10, 20));
console.log(operate("*", 10, 20));
console.log(operate("/", 10, 20));