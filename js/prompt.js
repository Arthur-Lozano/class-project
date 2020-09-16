'use strict';

function wannaParty () {

var userAct = prompt ('Ready to have fun? ' +  'yes or no?');
var answer;
  

if (userAct == 'yes') {
    answer = ('Glad your answer was YES');
}

else if (userAct == 'no') {
    answer =  ('Sorry your answer was no');
}

else {
    answer = 'Maybe next time!';
  }
  return document.write('<h1>'+ answer + '</h1');
}

 wannaParty();







/*var userAct = prompt ('Ready to have fun? ' +  'yes or no?');


if (userAct == 'yes') {
    document.write('<h2>' + 'Glad your answer was  ' + userAct + '<h2>');
}

else if (userAct == 'no') {
    document.write('<h2>' + 'Sorry your answer was ' + userAct + '<h2>');
}

else {
    document.write('<h2>' + 'Maybe next time! ' + '<h2>');
}
*/

/*

var sleepCheck = function(numHours) {
  if (numHours >= 8) {
    return "You're getting plenty of sleep! Maybe even too much!";
  } else if(numHours < 8) {
    return "Get some more shut eye!";
  }
}
sleepCheck(10);

*/
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