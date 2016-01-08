
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

    var output = document.getElementById('output');

	output.innerHTML = output.innerHTML + button.innerHTML;

    
    // Switch statement

    switch(expression) {
       case n:
         code block
         break;
       case n:
         code block
         break;
       default:
         default code block
    } 

}  // buttonClicked(event)