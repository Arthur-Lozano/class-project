'use strict'; 


var userAge = prompt ("Please enter your age")

if (userAge === 17) 
{
    text = ("Sorry, you're too young!");
} 
else if (userAge > 17) {
    text = ("Enter my site!");
    
//don't forget to return it
return document.write(userAge);}


//Below calls the function
userAge();
