
'use strict';

var number1G = 0; 
var number2G = 0; 
var operatorG = '';
var resultG = 0; 
var operatorActivatedFlagG = false; 

document.addEventListener('DOMContentLoaded', function(){


    var buttons = document.getElementsByClassName('buttons');
    //button.addEventListener('click', buttonClicked);

    for(var i = 0; i < buttons.length; i++) {
       buttons[i].addEventListener('click', buttonClicked);
    }


});

function buttonClicked(event) {

	console.log(event);

	var button = event.target;  // the clicked element

	var input = button.innerHTML;

    var output = document.getElementById('output');

	

    
     //var hasNumber = /\d/;
//hasNumber.test("ABC"); // false
//hasNumber.test("Easy as 123"); // true

     //console.log('is this a number?', hasNumber.test(input) === true);

// input = 6, input = *

    //console.log('input is', input);
    //console.log('is input equal to addition char?', input==='+');

    switch(input) {
       case '+':
         console.log("its a addition!");
         number1G = parseInt(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         break;
       case '-':
         console.log("It's substraction");
         number1G = parseInt(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         break;
       case '*':
         console.log("It's multiplicaton");
         number1G = parseInt(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         break;
       case '/':
          console.log("It's division!");
          number1G = parseInt(output.innerHTML);
          console.log("this is number 1", number1G);
          output.innerHTML = '';
          console.log("this is our operator input", input);
          operatorG = input;
          break;
       case '+/-':
          console.log("It's flip!");

          number1G = -parseInt(output.innerHTML);
          //operatorG = input; 
          //resultG = compute(number1G, number2G, operatorG);
          output.innerHTML = number1G;
          break;
       case '.':
          console.log("it's decimal");
          number1G = parseInt(output.innerHTML);
          console.log("this is number 1", number1G);
          output.innerHTML = '';
          console.log("this is our operator input", input);
          operatorG = input;
          break;
       case '%':
          console.log("It's percent!");
          number1G = parseInt(output.innerHTML);
          console.log("this is number 1", number1G);
          output.innerHTML = '';
          console.log("this is our operator input", input);
          operatorG = input;
          break;
       case 'AC':
          console.log("it's clear!");
          number1G = 0; 
          number2G = 0; 
          resultG = 0; 
          output.innerHTML = '';
          input.innerHTML = '';
          break;
       case '=':
          console.log("It's equal");
          number2G = parseInt(output.innerHTML); 
          console.log('this is number 2', number2G);
          console.log('this is number 1', number1G);
          console.log('this is our operator', operatorG);
          resultG = compute(number1G, number2G, operatorG);
          console.log("result from computer:", resultG);
          output.innerHTML = resultG; 
          console.log("output.innerHTML", output.innerHTML);
          number1G = 0; 
          number2G = 0; 
          resultG = 0; 
          output.innerHTML = '';
          input.innerHTML = '';
          break;
       default:
          console.log("It's a number");
          output.innerHTML = output.innerHTML + button.innerHTML;
          break;
    } 
}  // buttonClicked(event)

function compute(number1, number2, operator) {

    var result = 0;

switch(operator) {
       case '+':
         console.log("its a addition!");
         result = number1 + number2;
         return result;
       case '-':
         console.log("It's substraction");
         result = number1 - number2; 
         return result; 
         break;
       case '*':
         console.log("It's multiplicaton");
         result = number1 * number2;
         return result;
         break;
       case '/':
          console.log("It's division!");
          result = number1/number2; 
          return result; 
          break;
       case '+/-':
          //console.log("It's flip!");
          //result = -number1;
          break;
       case '.':
          console.log("it's decimal");
          break;
       case '%':
          console.log("It's percent!");
          break;
       case 'AC':
          //console.log("it's clear!");
          break;
       case '=':
          console.log("It's equal");
          number2G = output.innerHTML; 
          console.log('this is number 2', number2G);
          console.log('this is number 1', number1G);
          console.log('this is our operator', operatorG);
          break;
       default:
          console.log("It's a number");
          output.innerHTML = output.innerHTML + button.innerHTML;
          break;
    } 






}

