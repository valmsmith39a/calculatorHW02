
'use strict';

var number1G = 0; 
var number2G = 0; 
var operatorG = '';
var resultG = 0; 
var operatorActivatedFlagG = false; 
var startOverFlagG = true; 

document.addEventListener('DOMContentLoaded', function(){

    var buttons = document.getElementsByClassName('buttons');
    
    for(var i = 0; i < buttons.length; i++) {
       buttons[i].addEventListener('click', buttonClicked);
    }

});

function buttonClicked(event) {

	console.log(event);

	var button = event.target;  // the clicked element

	var input = button.innerHTML;

    var output = document.getElementById('output');

    switch(input) {
       case '+':
         console.log("its a addition!");
         /*
         operatorG = input;
         resultG = compute(resultG,parseFloat(output.innerHTML), operatorG)//resultG + parseFloat(output.innerHTML);
         output.innerHTML = ''; 
         */

         number1G = parseFloat(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         operatorActivatedFlagG = true;
         
         break;
       case '-':
         console.log("It's substraction");
         /*
         operatorG = input;
         resultG = compute(resultG,parseFloat(output.innerHTML), operatorG);
         output.innerHTML = ''; 
         */
         
         number1G = parseFloat(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         operatorActivatedFlagG = true;
         
         break;
       case '*':
         console.log("It's multiplicaton");
         number1G = parseFloat(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         operatorActivatedFlagG = true;
         break;
       case '/':
          console.log("It's division!");
          number1G = parseFloat(output.innerHTML);
          console.log("this is number 1", number1G);
          output.innerHTML = '';
          console.log("this is our operator input", input);
          operatorG = input;
          operatorActivatedFlagG = true;
          break;
       case '+/-':
          console.log("It's flip!");
          output.innerHTML = -output.innerHTML;
          break;
       case '.':
          if(output.innerHTML.indexOf('.') === -1) {
          	 output.innerHTML = output.innerHTML + '.';
          } 
          break;
       case '%':
          console.log("It's percent!");
          output.innerHTML = (parseFloat(output.innerHTML)/100).toString();    
          break;
       case 'AC':
          console.log("it's clear!");
          number1G = 0; 
          number2G = 0; 
          resultG = 0; 
          output.innerHTML = '';
          break;
       case '=':
          console.log("It's equal");
          number2G = parseFloat(output.innerHTML); 
          console.log('this is number 2', number2G);
          console.log('this is number 1', number1G);
          console.log('this is our operator', operatorG);
          resultG = compute(number1G, number2G, operatorG);
          //resultG = compute(resultG, number2G, operatorG);
          console.log("result from computer:", resultG);
          output.innerHTML = resultG; 
          console.log("output.innerHTML", output.innerHTML);
          //number1G = resultG; 
          number2G = 0; 
          resultG = 0; 
          startOverFlagG = true;
          break;
       default:
          console.log("It's a number");
          
          if(startOverFlagG === true) {
             output.innerHTML = button.innerHTML;
             startOverFlagG = false;
          }
          else {
          	 output.innerHTML = output.innerHTML + button.innerHTML;
          }        
          /*
          if(input === '0' && startOverFlagG === true) {
            output.innerHTML = button.innerHTML;
          }
          else if(input !== '0' && startOverFlagG === true) {
            output.innerHTML = output.innerHTML;	
            startOverFlagG = false;	
          } 
          else {
          	output.innerHTML = output.innerHTML + button.innerHTML;	
          }
          */
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

