'use strict'

//Filter Help Function
function wannaParty(){

  var userAct = prompt('please choose a number, choose 1 for amsterdam or 2 for the bush?');
  var answer;
    

  while(userAct != "1" && userAct != "2"){
    userAct = prompt('Please enter a number 1 or 2 ONLY!'); // re assign value of user act to new prompt
  }

  if (userAct === "1") {
      answer = '<img src = "images/pic1.jpg">'; // insert pics
  } else if (userAct === "2") {
      answer =  '<img src = "images/pic2.jpg">'; // insert pics
  }
  console.log("answer", answer);
  return answer;
}

/* Prompt the user for how many things they’d like your shop to make.

    Use a loop in your JavaScript to add items to the page that many times.
    Can functions make your code more readable?
*/

//helper functions

function getCount() {
var count = prompt('Great!  Here you go!');
while(isNaN(count) || count == '') {
  count = prompt("Please enter a number.  Which picture would you like??");
 }
 return count;
}

//Where helper functions are being called - king of functions
function showOrder() {
  var result = '';
  var itemType = wannaParty();
  var total = getCount();

  for(var i =0; i < total; i++) {
    result = result + '<p>' + itemType + '</p>';
  }
return document.write(result);
}

showOrder();




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