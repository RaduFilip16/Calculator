
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

let Hn = 0;
let Ho = "";

number_buttons.forEach(element => {
    element.addEventListener("click", function(){

        console.log('apasat');
        old_text = display.textContent;
        text = element.textContent;
        console.log(text)
                // if display is showing a number with a operation and we enter another number
                if(text == 'C'){
                    display.innerHTML = 0;
                    Hn = 0;
                    Ho = "";
                }
                if (text == 'DEL'){
                    if(!isNaN(old_text)){
                        old_text = old_text.slice(0, -1);
                        display.innerHTML = old_text;
                    }
                    else if(isNaN(old_text)){
                        old_text = old_text.split("(")[0];
                        display.innerHTML = old_text;
                    }
                    
                
                }
                if(isNaN(old_text) && (!isNaN(text))  && text != '=' ){
                    console.log('se salveaza?');
                    Hn = old_text.split("(")[0];
                    console.log("Hn este: " + Hn);
                    Ho = old_text.split("(")[1].slice(0,1);
                    console.log("Ho este: " + Ho);
                    display.innerHTML = "";
                    display.innerHTML = text;
            }
        // if display shows a only a number and we enter another number:
        if(!isNaN(old_text) && (!isNaN(text))  && text != '=') {
            if(old_text == 0)
            display.innerHTML = text
            else
            display.innerHTML = old_text + text;
        }
        // if display shows a number and we enter a symbol (not =)
        if(!isNaN(old_text) && isNaN(text) && text != '=' && text != 'C' && text!='DEL'){
        console
        display.innerHTML = old_text + " (" + text + ")";
        }
       
          // if we press = after having 2 number and a operation
        
          if(text == "="){
            let number2 = old_text; 
            console.log("hai cu egalul si n2 este " + number2 );
            number2 = parseInt(number2);
            console.log('typeof Ho: ' + typeof Ho + 'typeof Hn' + typeof Hn + 'typeof number2: ' + typeof number2);
            console.log ("Ho este " + Ho);
            console.log ("Hn este " + Hn);
            console.log ("number2 este " + number2);
            let result = operate(Ho, Hn, number2);
            console.log(result);
            display.innerHTML = result;
            Hn = result;
        }
         // if display is showing a number with a operation and we enter another number
        
        if(isNaN(old_text) && !isNaN(text)  && text != '='){
            console.log('se salveaza?');
            Hn = old_text.split("(")[0];
            console.log(Hn);
            Ho = old_text.split("(")[1].slice(0,1);
            console.log(Ho)
            display.innerHTML = "";
            display.innerHTML = text;
    }
      
        // if we press a symbol after we already entered one
        if(isNaN(old_text) && isNaN(text) && text != '=' && text != 'C' && text!='DEL'){
            console.log('schimbare de simbol');
            old_text = old_text.split("(")[0] + " (" + text + ")";
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



