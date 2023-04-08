
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

console.log(operate("+", 2, 3));

let Hn = null; //history for previous number
let Ho = ""; //history for previous operation symb
let number2;
let F = 0; //counter for new operation after = press
let C = 0;  // counter for consecutive operations without = presses;
let c = 0; // counter for multiple = presses

number_buttons.forEach(element => {
    element.addEventListener("click", function(){
        old_text = display.textContent;
        text = element.textContent;
        console.log(text)
              
                if(text == 'C'){
                    display.innerHTML = 0;
                    Hn = null;
                    Ho = "";
                    F = 0;
                    C = 0;
                    c = 0;
                }
                if (text == 'DEL'){
                    if(!isNaN(old_text)){
                        old_text = old_text.slice(0, -1);
                        if(old_text == '')
                        display.innerHTML = 0;
                        else display.innerHTML = old_text;
                        
                    }
                    else if(isNaN(old_text)){
                        old_text = old_text.split("(")[0];
                        display.innerHTML = old_text;
                    }
                    
                }
                // if display is showing a number with a operation and we enter another number
                if(isNaN(old_text) && (!isNaN(text))  && text != '=' ){
                    Hn = old_text.split("(")[0];
                    console.log("Hn este: " + Hn);
                    Ho = old_text.split("(")[1].slice(0,1);
                    console.log("Ho este: " + Ho);
                    display.innerHTML = "";
                    display.innerHTML = text;
            }
        // if display shows a only a number and we enter another number:
        if(!isNaN(old_text) && (!isNaN(text))  && text != '=') {
            if(F == 0){
            if(old_text == 0)
            display.innerHTML = text
            else
            display.innerHTML = old_text + text;
            }
            
            if(F == 1){
                Hn = 0;
                Ho = '';
                number2 = 0;
                display.innerHTML = text;
                F = 0;
            }
            c = 0;
        }
        // if display shows a number and we enter a symbol (not =)
        if(!isNaN(old_text) && isNaN(text) && text != '=' && text != 'C' && text!='DEL' && text!='%' && text!='+/-' && text !='.' ){
        if(C == 1){ 
            number2 = old_text;
            number2 = parseInt(number2);
            let result = operate(Ho, parseInt(Hn), number2);
            display.innerHTML = result + "(" + text + ")";

        }
        else display.innerHTML = old_text + " (" + text + ")";
        }
       
          // if we press = after having 2 number and a operation
        
          if(text == "="){
              if(!c){
            number2 = old_text; 
              }
            number2 = parseInt(number2);
            console.log('typeof Ho: ' + typeof Ho + ' typeof Hn ' + typeof Hn + ' typeof number2: ' + typeof number2);
            console.log ("Ho este " + Ho);
            console.log ("Hn este " + Hn);
            console.log ("number2 este " + number2);
            let result = operate(Ho, parseInt(Hn), number2);
            console.log(result);
            display.innerHTML = result;
            Hn = result;
            F = 1;
            c = 1;
            C = 0;
              


        }
         // if display is showing a number with a operation and we enter another number
        
        if(isNaN(old_text) && !isNaN(text)  && text != '='){
            Hn = old_text.split("(")[0];
            console.log(Hn);
            Ho = old_text.split("(")[1].slice(0,1);
            console.log(Ho)
            display.innerHTML = "";
            display.innerHTML = text;
            C = 1;
    }
      
        // if we press a symbol after we already entered one
        if(isNaN(old_text) && isNaN(text) && text != '=' && text != 'C' && text!='DEL'){
            console.log('schimbare de simbol');
            old_text = old_text.split("(")[0] + " (" + text + ")";
            display.innerHTML = old_text;
        }

        if(!isNaN(old_text) && text == '+/-' && old_text != 0){
            old_text = old_text * -1;
            display.innerHTML = old_text;
                }

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

function divide(number1, number2){
    if (number2 == 0)
        return "Can't divide by 0";
    else return (number1 / number2);
}


function operate(operator, number1, number2){
    switch (operator){
        case "+":
            return add(number1,number2);
        case "-":
            return subtract(number1, number2);
        case "x":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
}
}



