'use strict';

var userAct = prompt ('Ready to have fun? ' +  'yes or no?');


if (userAct == 'yes') {
    document.write('<h2>' + 'Glad your answer was  ' + userAct + '<h2>');
}

else if (userAct == 'no') {
    document.write('<h2>' + 'Sorry your answer was ' + userAct + '<h2>');
}

else {
    document.write('<h2>' + 'Maybe next time! ' + '<h2>');
}



/*
'use strict'; 


function wantIn() {
var userAge = prompt ("Would you like to enter? Type yes or no")

if (userAge == 'yes') 
{
    text = ("Welcome!");
} 
else if (userAge == no) {
    text = ("Adios!");
    
//don't forget to return it
return document.write(userAge);}
}

//Below calls the function
wantIn();
'*/