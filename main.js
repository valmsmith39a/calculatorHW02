
'use strict';



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

	output.innerHTML = output.innerHTML + button.innerHTML;

    
      var hasNumber = /\d/;
//hasNumber.test("ABC"); // false
//hasNumber.test("Easy as 123"); // true

     //console.log('is this a number?', hasNumber.test(input) === true);

// input = 6, input = *

    //console.log('input is', input);
    //console.log('is input equal to addition char?', input==='+');

    switch(input) {
       case '+':
         console.log("its a addition!");
         break;
       case '-':
         console.log("It's substraction");
         break;
       case '*':
         console.log("It's multiplicaton");
         break;
       case '/':
          console.log("It's division!");
          break;
       case '+/-':
          console.log("It's flip!");
          break;
       case '.':
          console.log("it's decimal");
          break;
       case '%':
          console.log("It's percent!");
          break;
       case 'AC':
          console.log("it's clear!");
          break;
       case '=':
          console.log("It's equal");
          break;
       default:
          console.log("It's a number!");
          break;
    } 
    

}  // buttonClicked(event)