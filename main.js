
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

	var button = event.target;  // the clicked element

	var input = button.innerHTML;

  var output = document.getElementById('output');

    switch(input) {
       case '+':         
         number1G = parseFloat(output.innerHTML);
         operatorG = input;
         resultG = compute(number1G,resultG, operatorG)//resultG + parseFloat(output.innerHTML);
         output.innerHTML = ''; 
         //operatorActivatedFlagG = true;
         /*
         number1G = parseFloat(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         operatorActivatedFlagG = true;
         */
         break;
       case '-':
         console.log("It's substraction");
         
         if(operatorActivatedFlagG === false) {
         	//number1G = parseFloat(output.innerHTML);
         	resultG = parseFloat(output.innerHTML);
         	operatorG = input;
         	output.innerHTML = ''; 
            operatorActivatedFlagG = true;
            console.log('in op flag false', number1G);
            console.log('num1 is', number1G);
            console.log('result is', resultG);
         } 
         else{
         	number1G = parseFloat(output.innerHTML);
            operatorG = input;
            resultG = compute(resultG,number1G, operatorG)//resultG + parseFloat(output.innerHTML);
            output.innerHTML = ''; 
            //operatorActivatedFlagG = true;
         }
         /*
         operatorG = input;
         resultG = compute(resultG,parseFloat(output.innerHTML), operatorG);
         output.innerHTML = ''; 
         */
         /*
         number1G = parseFloat(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         operatorActivatedFlagG = true;
         */
         break;
       case '*':
         number1G = parseFloat(output.innerHTML);
         operatorG = input;
         //resultG = compute(resultG,number1G, operatorG); //resultG + parseFloat(output.innerHTML);
         console.log('num1 is', number1G);
         console.log('result is', resultG);
         output.innerHTML = ''; 
         operatorActivatedFlagG = true;
         /*
         number1G = parseFloat(output.innerHTML);
         console.log("this is number 1", number1G);
         output.innerHTML = '';
         console.log("this is our operator input", input);
         operatorG = input;
         operatorActivatedFlagG = true;
         */
         break;
       case '/':
         number1G = parseFloat(output.innerHTML);
         operatorG = input;
         //resultG = compute(resultG,number1G, operatorG);//resultG + parseFloat(output.innerHTML);
         output.innerHTML = ''; 
         operatorActivatedFlagG = true;
         /*
          console.log("It's division!");
          number1G = parseFloat(output.innerHTML);
          console.log("this is number 1", number1G);
          output.innerHTML = '';
          console.log("this is our operator input", input);
          operatorG = input;
          operatorActivatedFlagG = true;
         */
          break;
       case '+/-':
          output.innerHTML = -output.innerHTML;
          break;
       case '.':
          if(output.innerHTML.indexOf('.') === -1) {
          	 output.innerHTML = output.innerHTML + '.';
          } 
          break;
       case '%':
          output.innerHTML = (parseFloat(output.innerHTML)/100).toString();    
          break;
       case 'AC':
          number1G = 0; 
          number2G = 0; 
          resultG = 0; 
          output.innerHTML = '';
          break;
       case '=':
          //number1G = parseFloat(output.innerHTML); 
          resultG = compute(number1G, output.innerHTML, operatorG);
          //number2G = parseFloat(output.innerHTML); 
          //resultG = compute(number1G, number2G, operatorG);
          //resultG = compute(resultG, number2G, operatorG);
          output.innerHTML = resultG; 
          //number1G = resultG; 
          //number2G = 0; 
          resultG = 0; 
          startOverFlagG = true;
          break;
       default:          
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
}  

function compute(number1, number2, operator) {

    var result = 0;

switch(operator) {
       case '+':
         result = number1 + number2;
         return result;
       case '-':
         result = number1 - number2; 
         return result; 
         break;
       case '*':
         result = number1 * number2;
         return result;
         break;
       case '/':
          result = number1/number2; 
          return result; 
          break;
       case '+/-':
          //result = -number1;
          break;
       case '.':
          break;
       case '%':
          break;
       case 'AC':
          break;
       case '=':
          number2G = output.innerHTML; 
          break;
       default:
          output.innerHTML = output.innerHTML + button.innerHTML;
          break;
    } 

}

