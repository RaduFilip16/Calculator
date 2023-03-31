
// Variables for HTML file

const number_buttons = document.querySelectorAll("div > button");
display = document.querySelector(".display");


/*
function show(element){
    const display = document.querySelector(".display");
    console.log(element.textContent);
    display.innerHTML = "";
    text = element.textContent;
    display.innerHTML = text;
}
*/
number_buttons.forEach(element => {
    element.addEventListener("click", function(){
        console.log('apasat');
        display.innerHTML = "";
        text = element.textContent;
        console.log(text);
        display.innerHTML = text;


    });
});



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